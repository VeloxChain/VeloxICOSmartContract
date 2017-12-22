module.exports = {
  networks: {
      kovan: {
          network_id: 42,    // Official kovan network id
          host:'localhost',
          port:8545,
          gas: 4500000
      }//,
   /* development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }*/
  }
};
