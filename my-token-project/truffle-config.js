const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
      sepolia: {
            provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
                  network_id: 11155111, // Sepolia's network id
                        gas: 5500000,
                              confirmations: 2,
                                    timeoutBlocks: 200,
                                          skipDryRun: true
                                              }
                                                },
                                                  compilers: {
                                                      solc: {
                                                            version: "0.8.0"  // Menggunakan versi Solidity yang sama dengan kontrak Anda
                                                                }
                                                                  }
                                                                  };