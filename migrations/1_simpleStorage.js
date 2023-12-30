var SimpleStorage = artifacts.require("./Simplestorage.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};