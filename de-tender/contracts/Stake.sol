// SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.9;

contract Stake {
    address public owner;
    uint256 public immutable stakingDuration; // Stake süresi (örneğin, bir ay)
    mapping(address => uint256) public stakedBalances;
    mapping(address => uint256) public stakingTimestamp;

    event Staked(address indexed staker, uint256 amount);
    event Unstaked(address indexed staker, uint256 amount);
    

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(uint256 _stakingDurationInDays) {
        owner = msg.sender;
        stakingDuration = _stakingDurationInDays * 1 days;
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(stakedBalances[msg.sender] == 0, "You have already staked");

        // Transfer tokens to the contract
        // Implement token transfer logic here

        stakedBalances[msg.sender] += amount;
        stakingTimestamp[msg.sender] = block.timestamp;
        emit Staked(msg.sender, amount);
    }

    function unstake() external {
        require(stakedBalances[msg.sender] > 0, "No staked amount to unstake");
        require(block.timestamp >= stakingTimestamp[msg.sender] + stakingDuration, "Staking duration not met");

        uint256 amount = stakedBalances[msg.sender];
        // Transfer tokens back to the staker
        // Implement token transfer logic here

        stakedBalances[msg.sender] = 0;
        stakingTimestamp[msg.sender] = 0;
        emit Unstaked(msg.sender, amount);
    }
    // Additional functions can be added as needed
}