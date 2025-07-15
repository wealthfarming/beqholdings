'use client';
import { ChatTextIcon, CirclesThreePlusIcon, SelectionAllIcon } from "@phosphor-icons/react";

const HomeSection3 = () => {
    return (
        <section className="px-8 py-8 md:py-16 flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-28">
            <div className="md:w-5/12 w-full">
                <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                    VISION
                </h6>
                <h2 className="md:text-[3.25rem] text-[3rem] font-bold mb-2"
                    style={{
                        lineHeight: '3.5rem',
                    }}
                >
                    Global Top 3 leading brand in big data analytics, technology consulting and investment strategy
                </h2>

            </div>
            <div className="md:w-7/12 w-full ">
                <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                    OUR MISSION
                </h6>
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">

                    <div className="flex flex-col items-start justify-center w-full md:w-1/2 gap-8 text-start text-[#82838A]">

                        <div className="flex flex-col items-start justify-center w-full gap-4 text-start">
                            <div className="flex flex-col items-start justify-center w-full gap-1 text-start">
                                <SelectionAllIcon size={36} />
                                <h5 className="text-[1.25rem] font-bold text-[#BF9B30]">
                                    Unlock value and empower your business
                                </h5>
                            </div>
                            <p>
                                Through constant innovation, a commitment to excellence and By a data-driven revolution utilizing advanced Business Intelligence and analytics solutions.
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-4 text-start text-[#82838A]">
                            <div className="flex flex-col items-start justify-center w-full gap-1 text-start">
                                <CirclesThreePlusIcon size={36} />
                                <h5 className="text-[1.25rem] font-bold  text-[#BF9B30]">
                                    Towards a better, more connected, and prosperous world
                                </h5>
                            </div>
                            <p>
                                We are leading the technology revolution, creating a seamless connected future and driving excellence in every field from finance and business to social responsibility.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/2 gap-4 text-start text-[#82838A]">
                        <div className="flex flex-col items-start justify-center w-full gap-1 text-start">
                            <ChatTextIcon size={36} />
                            <h5 className="text-[1.25rem] font-bold  text-[#BF9B30]">
                                Core values
                            </h5>
                        </div>

                        <div className="flex flex-col items-start justify-center w-full gap-2 text-start">
                            <p className="text-[1.025rem] font-bold ">
                                UNLOCKING POTENTIAL
                            </p>
                            <p className="text-[1.025rem] font-bold">
                                BIG DATA, TECHNOLOGY AND HUMAN RESOURCES
                            </p>

                            <p className="text-[1.025rem] ">
                                Research financial markets, strategies and investments. Investment consulting, capital connection, strategy consulting and IPO roadmap.
                            </p>
                            <p className="text-[1.025rem]">
                                Technology, Platforms, Apps, Web Services, BlockChain NFT, Artificial Intelligence AI.
                            </p>
                            <p className="text-[1.025rem]">
                                Big Data, Data Science, Data Analytics, Business Intelligence.
                            </p>
                            <p className="text-[1.025rem] mb-2">
                                Education, research and coaching, hands-on training. Media, society and public relations
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default HomeSection3;