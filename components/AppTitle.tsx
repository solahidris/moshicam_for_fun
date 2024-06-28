import MoshiLogo from "@/public/moshi_logo.svg";
import Image from "next/image";

const AppTitle = () => {
    return (
        <main className="flex items-center justify-center p-6 border-b shadow">
            <div className="flex flex-col">
                <p className="font-semibold text-5xl">moshicam</p>
                <p className="font-semibold">unofficial fan build tool</p>
            </div>
            <Image src="/moshi_logo.svg" alt="Moshi Logo" width={100} height={100} className="absolute right-4 top-20 w-20 lg:w-40 lg:right-[33%] lg:top-10"/>
        </main>
    )
}

export default AppTitle;