const { etheres } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  const cryptoDevsContract = await etheres.getContractFactory("CrypoDevs");
  const deployedCryptoDevsContrat = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  console.log(
    `Crypto Devs contract Address :${deployedCryptoDevsContrat.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
