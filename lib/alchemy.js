import axios from "axios";

const fetchNFTs = async (walletAddress) => {
    const alchemyBaseApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API;
    
    // Use this to get User Wallet Address Transaction
    // const baseURL = `https://base-mainnet.g.alchemy.com/nft/v3/${alchemyBaseApiKey}/getNFTsForOwner/`;
    // const pageSize = 2;
    // const url = `${baseURL}?owner=${walletAddress}&pageSize=${pageSize}`

    // User Wallet Address NFTs
    const baseURL = `https://base-mainnet.g.alchemy.com/nft/v3/${alchemyBaseApiKey}/getNFTsForOwner/`;
    const url = `${baseURL}?owner=${walletAddress}`
    
    try {
        const response = await axios.get(url);
        const ownedNftsFetched = response.data.ownedNfts;
        // console.log("ownedNFTsFetched:", ownedNftsFetched);
        return ownedNftsFetched;
    } catch {
        console.log("Error fetching NFTs:", error);
        return [];
    }
};

export default fetchNFTs;