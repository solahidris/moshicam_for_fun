export const sortNftsByDate = (nfts) => {
  return nfts.sort((a, b) => new Date(b.timeLastUpdated).getTime() - new Date(a.mint.timestamp).getTime());
};