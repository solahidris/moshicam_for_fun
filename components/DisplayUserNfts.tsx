import { useState, useEffect } from "react";

const DisplayUserNfts = ({ nfts }: { nfts: any[] }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4">
            {nfts.map((nfts: any) => (
                <div key={nfts.id.tokenId} className="flex flex-col items-center">
                    <img src={nfts.metadata.image_url} alt={`${nfts.title}.image_url`} className="w-40 lg:w-80"/>
                    {/* <img src={nfts.media[0].thumbnail} alt={`${nfts.title}.thumbnail`} className="w-10" /> */}
                    <p>{new Date(nfts.timeLastUpdated).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC'})}</p>
                    <br/>

                    {/* <div className="bg-red-100">
                        <p>Owner Contract Address: {nfts.contract.address}</p>
                        <p>Token ID: {nfts.id.tokenId}</p>
                        <p>Token Type: {nfts.id.tokenMetadata.tokenType}</p>
                        <p>Balance: {nfts.balance}</p>
                    <br/>
                        <p>Contract Name: {nfts.contractMetadata.name}</p>
                        <p>Contract Symbol: {nfts.contractMetadata.symbol}</p>
                        <p>Total Supply: {nfts.contractMetadata.totalSupply}</p>
                        <p>Contract Token Type: {nfts.contractMetadata.tokenType}</p>
                    </div> */}

                </div>
                
            ))}
        </div>
    );
};

export default DisplayUserNfts;