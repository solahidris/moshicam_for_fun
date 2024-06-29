export const categorizeNfts = (nfts) => {
  const addressCount = nfts.reduce((acc, nft) => {
      const address = nft.contract.address;
      acc[address] = (acc[address] || 0) + 1;
      return acc;
  }, {});

  const mostCommonAddress = Object.keys(addressCount).reduce((a, b) => addressCount[a] > addressCount[b] ? a : b);

  const userCreatedNfts = nfts.filter((nft) => nft.contract.address === mostCommonAddress);
  const userOtherUsersNft = nfts.filter((nft) => nft.contract.address !== mostCommonAddress);

  return { userCreatedNfts, userOtherUsersNft };
};