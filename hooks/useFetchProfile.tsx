import { useState, useEffect } from "react";
import fetchProfile from "@/lib/fetchUserProfile";
import { BigNumberish } from "ethers";

interface Profile {
  balanceInEth: number;
  balanceInUsd: number;
}

const useFetchProfile = (userContractAddress: string) => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
      const getProfile = async () => {
          const fetchedProfile = await fetchProfile(userContractAddress) as Profile | null;
          setProfile(fetchedProfile);
      };
      getProfile();
  }, [userContractAddress]);
console.log("profile", profile)
    return profile;
};

export default useFetchProfile;