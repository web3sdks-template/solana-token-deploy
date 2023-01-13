import { Web3sdksSDK } from "@web3sdks/sdk/solana";
import { config } from "dotenv";
config();

// Instantiate the SDK and pass in a signer
const sdk = Web3sdksSDK.fromPrivateKey("devnet", process.env.PRIVATE_KEY);

// Define the metadata for your program
const metadata = {
  symbol: "TOK",
  description: "My token",
  name: "My Token",
  initialSupply: 100,
};

// And deploy a new program from the connected wallet
const address = await sdk.deployer.createToken(metadata);

console.log(address);
console.log("Contract deployed successfully! 🎉");

const token = await sdk.getToken(address);
const supply = await token.totalSupply();

console.log(supply);
