import { ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import Image from "next/image";

const HomeSection4 = () => {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-between">
            <div className="flex flex-col md:flex-row w-full mx-auto md:h-[500px]">
                <div className="md:w-1/2 w-full flex flex-col gap-16 relative">
                    <div className=" w-full h-[500px] flex items-center justify-center absolute top-0 left-0 z-0">
                        <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202435/oh__img135_lkufeq.jpg"
                            fill
                            alt="Section4 Image"
                            className="object-cover w-full h-[500px] "
                        />
                    </div>
                    <div className="w-full z-10 p-16 md:p-28">

                        <div className="flex flex-col items-start justify-center w-full z-10">
                            <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                                CAPABILITIES
                            </h6>
                            <h2 className="md:text-[3.25rem] text-[3rem] font-bold mb-2"
                                style={{
                                    lineHeight: '3.5rem',
                                }}
                            >
                                Servies solutions
                            </h2>
                            <h6 className="text-[1.025rem] font-bold text-[#82838A]">
                                Big Data, Data Science, Data Analytics, Business Intelligence, Blockchain NFT
                            </h6>
                        </div>
                        <Button className="group w-[200px] h-[40px] rounded-[4px] mt-4 bg-[#BF9B30] text-white hover:bg-[#a87c1f]">
                            <a href="https://dashboardlive.ccpi.vn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 gap-2">
                                View Services
                                <ArrowRightIcon
                                    size={24}
                                    className="transform origin-center transition-transform group-hover:translate-x-2 group-active:translate-x-0"
                                />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2 w-full bg-[#BF9B30] z-10">
                    <div className="flex flex-col items-start justify-center w-full h-full p-16 text-white">
                        <div>
                            <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                                SHOWCASE
                            </h6>
                            <h2 className="md:text-[3.25rem] text-[3rem] font-bold mb-2"
                                style={{
                                    lineHeight: '3.5rem',
                                }}
                            >
                                Our most recent
                                digital and strategy projects
                            </h2>
                        </div>
                        <Button className="group w-[200px] h-[40px] rounded-[4px] mt-4 bg-BF9B30 text-white hover:bg-[#ffdd80] shadow-none">
                            <a href="https://dashboardlive.ccpi.vn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 gap-2">
                                View Showcase
                                <ArrowRightIcon
                                    size={24}
                                    className="transform origin-center transition-transform group-hover:translate-x-2 group-active:translate-x-0"
                                />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default HomeSection4;