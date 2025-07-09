import { Climate_Crisis } from 'next/font/google';
const climateCrisis = Climate_Crisis({ subsets: ['latin'], weight: '400' });

import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex items-center justify-center font-['Duplet'] text-black mt-4 mb-4">
            <Image src="/logo.svg" alt="outreaches logo" width={60} height={60} />
            <h1><span className={`${climateCrisis.className} text-[#BE551D]`}>BORN TO LOVE OUTREACHES</span> © Copyright BornToLove - All rights reserved.</h1>
        </div>
    )
}