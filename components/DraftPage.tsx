import { useState, useEffect } from "react";
import fetchNFTs from "@/lib/alchemy";
import DisplayUserNfts from "./DisplayUserNfts";

const DraftPage = () => {
    
    const alchemyBaseApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API;
    const userWalletAddress = "0xaA8c465E51347c94E8dec8D564222e29e4F32612";
    const [nfts, setNfts] = useState([]);

    // Get nfts from wallet address
    useEffect((()=>{
        const getNFTs = async () => {
            const fetchedNFTs = await fetchNFTs(userWalletAddress);
            setNfts(fetchedNFTs);
        }
        getNFTs();
    }),[])

    // Check NFTs Fetched
    useEffect(() => {
        console.log("nfts:", nfts);
    }, [nfts]);

    return (
        <div className=" text-xs w-full flex flex-col justify-center items-center mt-8">
            <p><span className="bg-blue-500 text-white p-1">{userWalletAddress}</span> = base wallet address</p>
                <br/>
            <p>contractAddress = (see eth balance & eth value)</p>
                <br/>
            <p><span className="bg-red-500 text-white p-1">0x61b1cAF7d65b10faa1DB2682ca6F0C6855b2981f</span> = contractAddress</p>
                <br/>
            <p>issue: figure out to find contract address associated with wallet address</p>
                <br/>
            <hr className="my-8 w-[90vw]"/>
                <p>users NFTs</p>
                <div>
                    <div className="flex justify-center items-center
                    p-10">
                        {nfts.length > 0 ?
                            <DisplayUserNfts nfts={nfts}/>
                        :
                            <p>no NFTS ??!!</p>
                        }
                    </div>
                </div>
        </div>
    )
};

export default DraftPage;