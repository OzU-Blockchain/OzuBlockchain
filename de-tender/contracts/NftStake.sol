// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTStaking is ERC721Holder, Ownable {
    using SafeERC20 for IERC20;

    // ERC721 token contract
    IERC721 public nftToken;

    // ERC20 token used for staking rewards
    IERC20 public rewardToken;

    // Staking duration and reward rate
    uint256 public stakingDuration;
    uint256 public rewardRate;

    // Mapping to track staked NFTs and their respective staking timestamps
    mapping(address => uint256) public stakedNFTs;
    
    // Event emitted when a user stakes NFTs
    event Staked(address indexed user, uint256 amount, uint256 timestamp);

    // Event emitted when a user unstakes NFTs
    event Unstaked(address indexed user, uint256 amount);

    constructor(
        address _nftToken,
        address _rewardToken,
        uint256 _stakingDuration,
        uint256 _rewardRate
    ) {
        nftToken = IERC721(_nftToken);
        rewardToken = IERC20(_rewardToken);
        stakingDuration = _stakingDuration;
        rewardRate = _rewardRate;
    }

    // Function for users to stake NFTs
    function stakeNFT(uint256 tokenId) external {
        require(nftToken.ownerOf(tokenId) == msg.sender, "Not the owner of NFT");
        require(stakedNFTs[msg.sender] == 0, "Already staked");

        // Transfer NFT to contract
        nftToken.safeTransferFrom(msg.sender, address(this), tokenId);

        // Record staking timestamp
        stakedNFTs[msg.sender] = block.timestamp;

        emit Staked(msg.sender, tokenId, block.timestamp);
    }

    // Function for users to unstake NFTs and claim rewards
    function unstakeNFT() external {
        require(stakedNFTs[msg.sender] > 0, "Not staked");

        // Calculate the rewards based on staking duration and reward rate
        uint256 elapsedTime = block.timestamp - stakedNFTs[msg.sender];
        uint256 rewards = (elapsedTime * rewardRate) / stakingDuration;

        // Transfer NFT back to the user
        uint256 stakedTokenId = stakedNFTs[msg.sender];
        nftToken.safeTransferFrom(address(this), msg.sender, stakedTokenId);

        // Transfer rewards to the user
        rewardToken.safeTransfer(msg.sender, rewards);

        // Reset staking information
        stakedNFTs[msg.sender] = 0;

        emit Unstaked(msg.sender, stakedTokenId);
    }
}