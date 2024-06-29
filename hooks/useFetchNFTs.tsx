import { useState, useEffect } from "react";
import fetchNFTs from "@/lib/fetchUserNFTs";

const useFetchNFTs = (userWalletAddress: string) => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        const getNFTs = async () => {
            const fetchedNFTs = await fetchNFTs(userWalletAddress);
            setNfts(fetchedNFTs);
        };
        getNFTs();
    }, [userWalletAddress]);

    return nfts;
};

export default useFetchNFTs;