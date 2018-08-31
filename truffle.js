var mne = process.env.MNE
var HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
    	provider: () => {
    		return new HDWalletProvider(mne,"https://kovan.infura.io/v3/2d33fa4e20ab49a4804b287fdcc7966d")
    	},
    	network_id: '42',
    }
  }
};
