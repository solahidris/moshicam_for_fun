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
        <div className=" text-xs w-full flex flex-col justify-center items-center mt-20">
                <p>coinbase wallet address:</p>
                <p>{userWalletAddress}</p>
            <br/>
                <p>nfts are on base</p>
            <br/>
                <p>alchemy api key</p>
                <p>{alchemyBaseApiKey}</p>
            <br/>
                <p>base mainnet</p>
                <p>https</p>
                <p>https://base-mainnet.g.alchemy.com/v2/{alchemyBaseApiKey}</p>
                <p>websockets</p>
                <p>wss://base-mainnet.g.alchemy.com/v2/{alchemyBaseApiKey}</p>
            <hr className="my-8 w-[90vw]"/>
                <div>
                    <p>output</p>
                    <p>users NFTs</p>
                    <p>nfts.contractAddress = userAddress (can see eth balance & eth value)</p>
                    <p>{userWalletAddress} = wallet address checking</p>
                    <p>0x61b1cAF7d65b10faa1DB2682ca6F0C6855b2981f = contractAddress</p>
                    <br/>
                    <div className="flex justify-center items-center">
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