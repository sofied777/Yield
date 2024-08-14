require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.7",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        timeout: 120000 // 120 seconds
      }
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  mocha: {
    timeout: 120000 // 120 seconds
  }
};