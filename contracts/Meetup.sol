pragma solidity ^0.4.15;

contract Meetup {
     // State variable
     address owner;

     // Modifiers
     modifier onlyOwner() {
          require(msg.sender == owner);
          _;
     }

     // constructor
     function Meetup() {
          owner = msg.sender;
     }
}