const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  compilers: {
    solc: {
      version: "0.4.24"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          "deliver kid very feature upon please tree robust common tail reward home",
          "https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
        );
      },
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};
