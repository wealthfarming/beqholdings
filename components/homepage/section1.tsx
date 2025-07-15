import Image from "next/image";

const HomeSection1 = () => {
    return (
        <div className="flex flex-row items-center justify-center w-full md:w-2/3 pt-28 relative ">
            <div className="flex  flex-row  items-center relative w-full">
                <div className="relative w-full h-[700px] flex md:flex-row overflow-visible md:overflow-hidden">
                    <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202271/homeS1_q4gakz.webp" alt="Logo" width={700} height={700} className="object-cover " />
                    <div className="text-left rounded-full bg-[#BF9B30] opacity-60 bg-opacity-50 p-4 w-[45rem] h-[45rem] md:h-[45rem] md:w-[45rem] absolute -left-[50%] md:left-1/3 "></div>
                    <div
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', lineHeight: '4rem' }}
                        className="w-[20rem] md:w-[650px] text-left text-5xl md:text-7xl font-bold z-10 absolute -left-1/12 md:left-1/3 translate-x-20 top-1/5">
                        Data & Technology at the service of Society, Environment, Education, Research and Finance
                    </div>
                </div>

            </div>
        </div>
    );
}
export default HomeSection1;