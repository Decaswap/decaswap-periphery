var DecaswapRouter = artifacts.require("DecaswapRouter");

module.exports = function(deployer, network, accounts) {
  let factory = "0xBBE41D698119Dd1E1b94F2c335d89f58CF6315d6";
  let weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  let owner = accounts[0];
  // Deploy the Migrations contract as our only task
  deployer.deploy(DecaswapRouter, factory, weth, {from:owner});
};