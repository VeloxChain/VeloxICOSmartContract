var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

var contributorApprover = artifacts.require("./ContributorApprover.sol");
var contributorWhitelist = artifacts.require("./ContributorWhitelist.sol");
var tokenSaleSmartContract = artifacts.require("./TokenSaleSmartContract.sol");
var tokenSmartContract = artifacts.require("./TokenSmartContract.sol");

module.exports = function(deployer) {
  /*deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);*/

  deployer.deploy(contributorWhitelist);

  /*

   deployer.deploy(ConvertLib);
   deployer.link(ConvertLib, MetaCoin);
   deployer.deploy(MetaCoin);
   */



    //deployer.deploy(ERC20);
  /* deployer.deploy(BikeCoinReserve);
   deployer.deploy(BikeCoinNetwork);
   deployer.deploy(BikeCoinWallet);
   deployer.deploy(dgx);
   deployer.deploy(exchange);
   deployer.deploy(testToken);*/

    //deployer.deploy(BikeCoinReserve,'0x6f83eac8241106f335c38e78c4caf5f65b74ac06','0x007896a9aAE4D2803537C299779ab49EC5835e78');


    // deployer.deploy(BikeCoinNetwork,'0x0043f39A2ab831769269D48aB73723536f5e136B');
    //deployer.deploy(BikeCoinReserve,'0xfa379ffb7f561b17783142084131ea90cb01bc65','0x007896a9aAE4D2803537C299779ab49EC5835e78');

  /* deployer.deploy(testToken,"DIGIX","DGD");
   deployer.deploy(testToken,"TESTCOIN","TC1");*/

    //deployer.deploy(testToken,"MONKEY","MKC");

    //  deployer.deploy(DAO_Creator)

  /*deployer.deploy(DAO_Creator).then(function () {
   return deployer.deploy(DAO, curator,DAO_Creator.address,
   web3.toWei(default_proposal_deposit, "ether"),  web3.toWei(min_tokens_to_create, "ether"),
   closing_time,
   0);

   })*/


  /* deployer.deploy(DAO, curator, DAO_Creator_Address,
   web3.toWei(default_proposal_deposit, "ether"),  web3.toWei(min_tokens_to_create, "ether"),
   closing_time,
   0);*/

  /*  deployer.deploy(DAO, curator, DAO_Creator_Address,
   web3.toWei(default_proposal_deposit, "ether"),  web3.toWei(min_tokens_to_create, "ether"),
   closing_time,
   0);*/


  /* deployer.deploy(dao);
   deployer.deploy(managedAccount);
   deployer.deploy(daotoken);
   deployer.deploy(token);
   deployer.deploy(tokenCreation);
   deployer.deploy(sampleOffer);

   deployer.deploy(mytoken);*/

    //deployer.deploy(mutil);







  /* deployer.deploy(ConvertLib);
   deployer.link(ConvertLib, MetaCoin);
   deployer.deploy(MetaCoin);
   deployer.deploy(A);
   deployer.deploy(creator);
   deployer.deploy(OwnerToken);

   deployer.deploy(ProofOfExistence2);*/
};
