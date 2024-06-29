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
import { Copy } from "lucide-react";
import copyToClipboard from "@/lib/copyToClipboard";
import { Button } from "./ui/button";

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
    
    const handleSearchButton = async () => {
        const fetchedNfts = await fetchNFTs(userWalletAddress);
        const fetchedProfile = await fetchProfile(userContractAddress);
        setNfts(fetchedNfts);
        setProfile(fetchedProfile);
    }

    return (
        <div className=" text-xs w-full flex flex-col justify-center items-center mt-8">
            <Card className="lg:w-[600px] p-8 flex flex-col gap-8">
                <div className="flex flex-col">
                    <Label className="pb-1">Wallet Address</Label>
                    <Input placeholder="0xaA8c465E51347c94E8dec8D564222e29e4F32612" onChange={(e)=>setUserWalletAddress(e.target.value)}/>
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
                <div className="flex gap-4">
                    <Button className={`${showCreatedNft ? "bg-black" : "bg-gray-300"}`} onClick={()=>setShowCreatedNft(true)}>Created</Button>
                    <Button className={`${showCreatedNft ? "bg-gray-300" : "bg-black"}`} onClick={()=>setShowCreatedNft(false)}>Collected</Button>
                </div>
                {nfts.length > 0 ?
                    <DisplayUserNfts nfts={nfts} userWalletAddress={userWalletAddress} userContractAddress={userContractAddress} showCreatedNft={showCreatedNft} />
                :
                    <p>no NFTS ??!!</p>
                }
            </div>
        </div>
    )
};

export default DraftPage;