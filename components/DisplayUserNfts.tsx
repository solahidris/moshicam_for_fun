import { useState, useEffect } from "react";
import { sortNftsByDate } from "@/lib/sortNftsByDate";
import { categorizeNfts } from "@/lib/categorizeNfts";

const DisplayUserNfts = ({ nfts, userWalletAddress, userContractAddress, showCreatedNft }: { nfts: any[], userWalletAddress:string, userContractAddress:string, showCreatedNft:boolean }) => {

        const userAllNfts = sortNftsByDate(nfts);
        const {userCreatedNfts , userOtherUsersNft} = categorizeNfts(nfts);
        console.log("userCreatedNfts:" , userCreatedNfts);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {showCreatedNft ?
                userCreatedNfts?.map((nfts: any) => (
                    <div key={nfts.tokenId} className="flex flex-col items-center">
                        <img src={nfts.image.thumbnailUrl} alt={`${nfts.title}.image_url`} className="w-40 lg:w-80"/>
                        <p className="font-thin tracking-widest mt-1">{new Date(nfts.mint.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC'})}</p>
                        <br/>
                    </div>
                )) :
                userOtherUsersNft?.map((nfts: any) => (
                    <div key={nfts.tokenId} className="flex flex-col items-center">
                        <img src={nfts.image.thumbnailUrl} alt={`${nfts.title}.image_url`} className="w-40 lg:w-80"/>
                        <p className="font-thin tracking-widest mt-1">{new Date(nfts.mint.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC'})}</p>
                        <br/>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayUserNfts;