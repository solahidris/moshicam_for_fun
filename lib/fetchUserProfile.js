import { Alchemy, Network } from "alchemy-sdk";
import axios from "axios";

const fetchProfile = async (userContractAddress) => {
    const alchemyBaseApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API;

    // Configures the Alchemy SDK
    const config = {
        apiKey: alchemyBaseApiKey, // Use your API key from environment variables
        network: Network.BASE_MAINNET, // Replace with your network if needed
    };

    // Creates an Alchemy object instance with the config to use for making requests
    const alchemy = new Alchemy(config);

    try {
        // Fetches the balance of the given contract address
        const response = await alchemy.core.getBalance(userContractAddress, "latest");
        const balanceInEth = parseFloat(response) / Math.pow(10, 18); // Convert balance to ETH
        // console.log("profileBalance in ETH:", balanceInEth);

        // Fetch the current ETH to USD exchange rate from CoinGecko
        const ethToUsdResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const ethToUsdRate = ethToUsdResponse.data.ethereum.usd;
        const balanceInUsd = balanceInEth * ethToUsdRate;
        // console.log("profileBalance in USD:", balanceInUsd);

        return { balanceInEth, balanceInUsd };
    } catch (error) {
        console.log("Error fetching profile balance:", error);
        return null; // Return null on error
    }
};

export default fetchProfile;