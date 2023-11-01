import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config();

const SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const INFURA_API_KEY = process.env.INFURA_API_KEY
const polygonRpc = process.env.POLYGON_RPC
const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  paths: { tests: "tests" },
  networks: {
    hardhat: {
      chainId: 1337, // Sepolia chainId
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 11155111, // Sepolia chainId
      accounts: [SEPOLIA_PRIVATE_KEY], // Provide an array of private keys directly
    },

    polygon_mumbai: {
      url: polygonRpc,
      accounts: [`0x${POLYGON_PRIVATE_KEY}`]
   },
  },

  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",

    },
  },
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
