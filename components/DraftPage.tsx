import { useState, useEffect } from "react";
import fetchNFTs from "@/lib/alchemy";

const DraftPage = () => {
    
    const alchemyBaseApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API;
    const userWalletAddress = "0xaA8c465E51347c94E8dec8D564222e29e4F32612";
    const [nfts, setNfts] = useState([]);

    // useEffect((()=>{
    //     const getNFTs = async () => {
    //         const fetchedNFTs = await fetchNFTs(userWalletAddress);
    //         setNfts(fetchedNFTs);
    //         console.log("nfts:", nfts);
    //     }
    //     getNFTs();
    // }),[])

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
                    <p>user's NFTs</p>
                    {/* <p>{nfts}</p> */}
                </div>
        </div>
    )
};

export default DraftPage;