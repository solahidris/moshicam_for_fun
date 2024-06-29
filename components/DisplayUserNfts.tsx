import { useState, useEffect } from "react";

const DisplayUserNfts = ({ nfts }: { nfts: any[] }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2">
            {nfts.map((nfts: any) => (
                <div key={nfts.tokenId} className="flex flex-col items-center">
                    <img src={nfts.image.cachedUrl} alt={`${nfts.title}.image_url`} className="w-40 lg:w-80"/>
                    <p>{new Date(nfts.mint.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC'})}</p>
                    <br/>
                </div>
            ))}
            {/* {nfts.map((nfts: any) => (
                <div key={nfts.tokenId} className="flex flex-col items-center">
                    <img src={nfts.image.cachedUrl} alt={`${nfts.title}.image_url`} className="w-40 lg:w-80"/>
                    <p>{new Date(nfts.mint.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC'})}</p>
                    <br/>

                    <div className="bg-red-100 p-10">
                        <p>Balance: {nfts.balance}</p>
                        <p>Token ID: {nfts.tokenId}</p>
                        <p>Token URI: {nfts.tokenUri}</p>
                        <p>Mint blockNumber: {nfts.mint.blockNumber}</p>
                        <p>Mint mintAddress: {nfts.mint.mintAddress}</p>
                        <p>Mint transactionHash: {nfts.mint.transactionHash}</p>
                    <br/>
                        <p>Contract Address: {nfts.contract.address}</p>
                        <p>Contract Name: {nfts.contract.name}</p>
                        <p>Contract Symbol: {nfts.contract.symbol}</p>
                        <p>Total Supply: {nfts.contract.totalSupply}</p>
                        <p>Contract Token Type: {nfts.contract.tokenType}</p>
                    </div>
                </div>
            ))} */}
            <p>GOT EM! NFTS</p>
        </div>
    );
};

export default DisplayUserNfts;