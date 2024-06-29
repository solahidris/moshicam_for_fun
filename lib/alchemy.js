import axios from "axios";

const fetchNFTs = async (walletAddress) => {
    const alchemyBaseApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API;
    const url = `https://base-mainnet.g.alchemy.com/v2/${alchemyBaseApiKey}/getNFTs/?owner=${walletAddress}`
    
    try {
        const response = await axios.get(url);
        const ownedNFTs = response.data.ownedNfts;
        console.log("ownedNFTs:", ownedNFTs);
        return ownedNFTs;
    } catch {
        console.log("Error fetching NFTs:", error);
        return [];
    }
};

export default fetchNFTs;