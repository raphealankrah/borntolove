import Image from "next/image";

export default function FrontView() {
    return (
        <div className="flex items-center justify-center gap-3">
            <div><Image src="/image-1.png" alt="image1" width={800} height={800} /></div>
            <div><Image src="/image-2.png" alt="image1" width={800} height={800} /></div>
        </div>

    )
}