import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

import DisplayUserNfts from "./DisplayUserNfts";
import useFetchNFTs from "@/hooks/useFetchNFTs";
import useFetchProfile from "@/hooks/useFetchProfile";
import fetchNFTs from "@/lib/fetchUserNFTs";
import fetchProfile from "@/lib/fetchUserProfile";

import { Label } from "./ui/label";
import UserEarnings from "./UserEarnings";
import { Copy, Loader2Icon } from "lucide-react";
import copyToClipboard from "@/lib/copyToClipboard";
import { Button } from "./ui/button";
import UserNftToggle from "./UserNftToggle";

interface Profile {
    balanceInEth: number;
    balanceInUsd: number;
  }

const DraftPage = () => {
    
    const [userWalletAddress, setUserWalletAddress] = useState("");
    const [userContractAddress, setUserContractAddress] = useState("0x61b1cAF7d65b10faa1DB2682ca6F0C6855b2981f");
    const [nfts, setNfts] = useState([]);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [showCreatedNft, setShowCreatedNft] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSearchButton = async () => {
        setIsLoading(true);
        const fetchedNfts = await fetchNFTs(userWalletAddress);
        const fetchedProfile = await fetchProfile(userContractAddress);
        setNfts(fetchedNfts);
        setProfile(fetchedProfile);
        setIsLoading(false);
    }

    return (
        <div className=" text-xs w-full flex flex-col justify-center items-center mt-8">
            <Card className="lg:w-[600px] p-8 flex flex-col gap-8">
                <div className="flex flex-col">
                    <Label className="pb-1">Wallet Address</Label>
                    <Input placeholder="0xaA8.....32612" onChange={(e)=>setUserWalletAddress(e.target.value)}/>
                    <div className="flex justify-between mt-2">
                        <div className="flex gap-1 items-center -mt-4">
                            <span>Sample: </span>
                            <Copy onClick={() => copyToClipboard("0xaA8c465E51347c94E8dec8D564222e29e4F32612")}/>
                        </div>
                        <Button onClick={handleSearchButton} >Search</Button>
                    </div>
                </div>
                <UserEarnings profile={profile} />
            </Card>


            <div className="p-8 flex flex-col gap-10 justify-center items-center">
                <UserNftToggle showCreatedNft={showCreatedNft} setShowCreatedNft={setShowCreatedNft} />
                {nfts.length > 0 ?
                    <DisplayUserNfts nfts={nfts} userWalletAddress={userWalletAddress} userContractAddress={userContractAddress} showCreatedNft={showCreatedNft} />
                :
                    isLoading ? <div className="flex flex-col items-center gap-2"><p>Loading NFTs...</p><Loader2Icon className="animate animate-spin" /></div> : <p className="text-center">Enter a wallet address and<br/> click Search</p>
                }
            </div>
        </div>
    )
};

export default DraftPage;