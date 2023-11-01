import { ethers } from 'hardhat';
import { verify } from '../utils/verify';

function sleep (ms:number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {

    console.log("Deploying contract...")
    // const myContract = await ethers.deployContract("SomeContract");
    // await myContract.waitForDeployment();

    const MyContract = await ethers.getContractFactory("SomeContract");
    const myContract = await MyContract.deploy();
    await myContract.waitForDeployment();
    console.log("Contract deployed at", myContract.target)

    sleep(30 * 1000)


    //Verfying Contracts
    // verify(myContract.target.toString(), [])
    // OR if you already have contract address:
    // verify("0x47C383658e159227Eea55a82E86159d0CDED2d7b", [])

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
