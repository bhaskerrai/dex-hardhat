import { ethers } from 'hardhat';
import { verify } from '../utils/verify';

function sleep (ms:number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {

    /*
    
     // Deploy the Token Contract
     console.log("Deploying Token contract...")
     // const myContract = await ethers.deployContract("Token");
     // await myContract.waitForDeployment();
 
     const tokenContractFactory = await ethers.getContractFactory("Token");
     const tokenContract = await tokenContractFactory.deploy();
     await tokenContract.waitForDeployment();
     console.log("Token Contract deployed at", tokenContract.target)
 
 
     // Deploy the Exchange Contract
     console.log("Deploying Token contract...")
     const exchangeContractFactory = await ethers.getContractFactory("Exchange");
     const exchangeContract = await exchangeContractFactory.deploy(tokenContract.target);
     await exchangeContract.waitForDeployment();
     console.log("Exchange Contract deployed at", exchangeContract.target)
 
     sleep(30 * 1000)
    */


    //Verfying Contracts
    // verify(tokenContract.target.toString(), [], "contracts/Token.sol:Token")
    // OR if you already have contract address:
    verify("0x4DBc7F1Be8C3716Bac9D52AF0035Eb9A80457d3C", [], "contracts/Token.sol:Token")

    // verify("0xCf2fdA3C61ecBe500c718AC3D0C590cc3B056FF9", ["0xc9a505aa4685aca8042b2a9862d86b39b8df5901"])




}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
