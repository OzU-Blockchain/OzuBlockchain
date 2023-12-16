// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Hello {
    string private hello_message;

    constructor(string memory _hello_message){
        hello_message=_hello_message;
    }
}
