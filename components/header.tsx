import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="px-4 md:px-8 lg:px-24 mb-5 pt-4 flex flex-col">
            <div className="flex items-center justify-between">
                {/* Logo at the far left */}
                <div>
                    <Image src="/logo.svg" alt="outreaches logo" width={60} height={60} />
                </div>

                <div className="flex items-center space-x-6">
                    <Link href="/gallery" className="text-black text-lg hover:underline">Gallery</Link>
                    <Image src="/socials.png" alt="socials" width={80} height={80} />
                    {/* <div className="flex items-center space-x-4">
                        <Image src="/fb.svg" alt="Facebook" width={24} height={24} />
                        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                        <Image src="/tiktok.svg" alt="TikTok" width={24} height={24} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}