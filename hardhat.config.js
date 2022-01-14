require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

module.exports = {
  solidity: process.env.SOLIDITY_VERSION || "0.7.3",
  networks: {
    [process.env.NETWORK_NAME]: {
      url: process.env.RPC_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    }
  }
};
