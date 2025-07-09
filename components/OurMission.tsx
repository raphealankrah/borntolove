import { Climate_Crisis } from 'next/font/google';
const climateCrisis = Climate_Crisis({ subsets: ['latin'], weight: '400' });

export default function OurMission() {
    return (
        <div className='flex flex-col items-center justify-center mb-8'>
            <h1 className={`${climateCrisis.className} text-[#BE551D] text-2xl md:text-4xl px-4 text-center mb-5`}>OUR MISSION</h1>
            <div className="font-['Duplet'] bg-gray-100 w-full md:w-220 h-auto md:h-120 mb-4 md:mb-0 md:mr-6 p-6 md:pt-15 rounded-[30px] text-black text-center text-lg md:text-2xl whitespace-normal">
                Our current focus is simple but powerful: Spreading the gospel of Jesus by serving our community through feeding the homeless and hungry, one meal at a time, with dignity, compassion, and hope.
                Inspired by the life and teachings of Jesus Christ, we believe that everyone deserves to be seen, valued, and  cared for.
                We don&apos;t just hand out food; we offer connection, prayer, and a reminder that no one is forgotten. <br></br>
                <br></br>
                Whether it&apos;s through a warm meal, a kind conversation, or a helping hand, we are committed to being the hands and feet of Jesus to those who need it most. As we grow, our vision remains clear—to build a community where compassion leads, and no one is left behind.
            </div>
        </div>
    )
}