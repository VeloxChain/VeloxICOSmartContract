////// geth --datadir=$HOME/.rinkeby attach ipc:$HOME/Library/Ethereum/rinkeby/geth.ipc console

module.exports = {
  networks: {
      /*kovan: {
          network_id: 42,    // Official kovan network id
          host:'localhost',
          port:8545,
          gas: 4500000
      }//,*/
      development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
     /* rinkeby: {
          host: "localhost", // Connect to geth on the specified
          port: 8545,
          network_id: 4,
          gas: 4612388 // Gas limit used for deploys
      }*/
  }
};
