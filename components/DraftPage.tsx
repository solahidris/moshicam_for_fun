const DraftPage = () => {
    
    const alchemy_api_key = process.env.NEXT_PUBLIC_ALCHEMY_API;

    return (
        <div className=" text-xs w-full flex flex-col justify-center items-center mt-20">
                <p>coinbase wallet address:</p>
                <p>0xaA8c465E51347c94E8dec8D564222e29e4F32612</p>
            <br/>
                <p>nfts are on base</p>
            <br/>
                <p>alchemy api key</p>
                <p>{alchemy_api_key}</p>
        </div>
    )
};

export default DraftPage;