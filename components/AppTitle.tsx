import MoshiLogo from "@/public/moshi_logo.svg";
import Image from "next/image";

const AppTitle = () => {
    return (
        <main className="flex items-center justify-center p-6 border-b shadow-md">
            <div className="flex flex-col">
                <p className="font-semibold text-5xl lg:text-7xl">moshicam</p>
                <p className="font-semibold text-sm lg:text-base">unofficial fan build tool</p>
            </div>
            <Image src="/moshi_logo.svg" alt="Moshi Logo" width={100} height={100} className="w-16 lg:w-20 lg:w-20 ml-2"/>
        </main>
    )
}

export default AppTitle;