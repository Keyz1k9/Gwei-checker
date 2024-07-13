const axios = require('axios');
require('dotenv').config();

// Gantikan dengan API Key Etherscan Anda dari file .env
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

async function getGasPrice() {
    try {
            const response = await axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_API_KEY}`);
                    const gasPrices = response.data.result;
                            console.log(`Low: ${gasPrices.SafeGasPrice} Gwei`);
                                    console.log(`Average: ${gasPrices.ProposeGasPrice} Gwei`);
                                            console.log(`High: ${gasPrices.FastGasPrice} Gwei`);
                                                } catch (error) {
                                                        console.error('Error fetching gas price:', error);
                                                            }
                                                            }

                                                            getGasPrice();