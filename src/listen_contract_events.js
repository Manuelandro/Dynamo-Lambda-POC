const { ethers } = require("ethers");
const gameABI = require("./ABI/GoodGhostinBatched")
const contract = '0x360BBC11322C77Dadc1DDCdb26224271C96CFD47'
const RPCURL = 'https://polygon-mainnet.infura.io/v3/cdfdd9183f8b4a329edf3375e832d4e8'

module.exports = async function () {
    const customHttpProvider = new ethers.providers.JsonRpcProvider(RPCURL);
    const gameContract = new ethers.Contract(contract, gameABI, customHttpProvider);

    gameContract.on("AdminWithdrawal", (from, to, amount, event) => {
        /**
         * store event on the database
         */
    });

    gameContract.on("FundsDepositedIntoExternalPool", (from, to, amount, event) => {
        /**
       * store event on the database
       */
    });

    gameContract.on("Deposit", (from, to, amount, event) => {
        /**
       * store event on the database
       */
    });

    gameContract.on("EarlyWithdrawal", (from, to, amount, event) => {
        /**
       * store event on the database
       */
    });

    gameContract.on("Withdrawal", (from, to, amount, event) => {
        /**
       * store event on the database
       */
    });

    gameContract.on("FundsRedeemedFromExternalPool", (from, to, amount, event) => {
        /**
       * store event on the database
       */
    });


}