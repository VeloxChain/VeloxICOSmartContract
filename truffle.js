

module.exports = {
  networks: {

      development: {
      host: "localhost",
      port: 8545,
      //gas: 4500000, // Gas limit used for deploys
      network_id: "*" // Match any network id
    },
      rinkeby: {
          host: "localhost", // Connect to geth on the specified
          port: 8545,
          network_id: 4,
          gas: 4712388 // Gas limit used for deploys
      },
      solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
  }
};
