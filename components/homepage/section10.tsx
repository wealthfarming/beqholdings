import Image from "next/image";
const HomeSection10 = () => {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-between py-8 md:py-16 ">
            <div className="flex flex-col lg:flex-row-reverse justify-end items-center w-full">

                <div className="flex flex-col lg:w-[40%] w-full h-[500px] z-10">
                    <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752231284/teamBeq_ben7nl.webp"
                        alt="Section10 Image"
                        width={700}
                        height={500}
                        className="object-fill w-full h-[500px]"
                    />
                </div>
                <div className="flex flex-col gap-8 lg:w-[60%] w-full py-32 px-8 justify-center items-end">
                    <div className="w-full lg:w-[75%]">
                        <div className="flex flex-col gap-2">
                            <h6 className="text-[.9rem] font-thin capitalize">
                                OUR ADVANTAGES
                            </h6>
                            <h4 className="md:text-[3.25rem] text-[calc(2.35rem + 0.9 * ((100vw - 576px) / 864))] font-bold mb-2"
                                style={{ lineHeight: '1.05' }}>
                                Long-Term Cooperation
                            </h4>
                        </div>
                        <p className=" text-[1.025rem] font-bold text-[#82838A] mb-4 w-full">
                            BeQ Holdings has inherited the achievement of calculating 22,889 indexes (Vietnam and International) from IFRC – essential for investors who want to make informed decisions about their investment portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeSection10;

//bg-[#9690a214]