var StandardToken = artifacts.require("./StandardToken.sol");
var SafeMath = artifacts.require("./SafeMath.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, StandardToken);
  deployer.deploy(StandardToken,10000);
};
