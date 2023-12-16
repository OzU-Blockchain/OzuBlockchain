require("dotenv").config()
require("@nomiclabs/hardhat-ethers")
 
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    fuji: {
      url: "https://blue-ultra-panorama.avalanche-testnet.quiknode.pro/af0473f61bedcf92629866d237ae4ac60a72796b/ext/bc/C/rpc/",
      accounts: [`0x42cd3a532e3ea6ed030e57589016de7ef6383a0b020df1369143d0cc77a5c74f` ],
      chainId: 43113,
    },
  },
}
