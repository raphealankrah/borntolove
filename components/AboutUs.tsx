import { Climate_Crisis } from 'next/font/google';
const climateCrisis = Climate_Crisis({ subsets: ['latin'], weight: '400' });

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center justify-center text-gray-500">
            <h1 className="text-2xl mt-15 md:text-4xl px-4 text-center whitespace-normal">THIS IS US - <span className={`${climateCrisis.className} text-[#BE551D]`}>BORN TO LOVE</span></h1>

            <div className='flex flex-col md:flex-row items-center justify-center mt-4 px-4'>
                <div className="font-['Duplet'] bg-[#BE551D] w-full md:w-175 h-auto md:h-110 mb-5 md:mb-0 md:mr-6 p-6 md:pt-15 rounded-[30px] text-white text-center text-lg md:text-2xl whitespace-normal">
                    We are Born To Love Outreaches, a <br></br>Christian charitable organisation aimed at helping those in need.<br></br>
                    We are rooted in the unshakeable truth that every person is created by God, for love and with a purpose.<br></br>
                    Our mission is simple yet profound to share Christ's unconditional love through compassionate outreach, practical support, <br></br>and transformational community programs.
                </div>
                <div className="font-['Duplet'] bg-[rgba(0,0,0,0.81)] w-65 md:w-80 h-auto md:h-110 mb-2 md:mb-0 md:mr-6 p-6 md:pt-15 rounded-[30px] text-white text-center text-lg md:text-2xl whitespace-normal p-6">
                    We believe that love is more than a feeling—it's an action.
                    Guided by the teachings of Jesus, we serve the vulnerable, uplift the
                    brokenhearted, and stand alongside those in need, regardless of background or circumstance.
                </div>
            </div>
        </div>
    )
}