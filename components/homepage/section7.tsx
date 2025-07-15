import { IntersectSquareIcon, StackIcon } from "@phosphor-icons/react"

const HomeSection7 = () => {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-between py-8 md:py-16 px-8 ">
            <div className="flex flex-col md:flex-row lg:w-2/3 w-full gap-16">
                <div className="flex flex-col gap-12 md:w-[40%] w-full ">
                    <div className="flex flex-col items-start justify-center w-full">
                        <div className="inline-flex">
                            <IntersectSquareIcon size={32} color="#BF9B30" />
                            <h4 className="md:text-[2.75rem] text-[2rem] font-bold mb-2 ml-2 "
                                style={{ lineHeight: '2.75rem' }}
                            >
                                40+
                            </h4>
                        </div>
                        <p className="text-[1.025rem] font-bold text-[#82838A]">
                            Year of experience
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                            CAPABILITIES
                        </h6>
                        <h4 className="md:text-[2.25rem] text-[1.75rem] font-bold mb-2"
                            style={{ lineHeight: '1.15' }}
                        >
                            Unleash your data power with BeQ Holdings' advanced Business Intelligence (BI) and analytics solutions
                        </h4>
                    </div>
                    <p className="text-[22px] font-bold text-[#82838A]">
                        Understands big data, data science, data analytics, financial markets and business intelligence to help you make informed investment decisions.
                    </p>
                </div>
                <div className="flex flex-col gap-12 md:w-[50%] w-full ">
                    <div className="flex flex-col items-start justify-center w-full">
                        <div className="inline-flex">
                            <StackIcon size={32} color="#BF9B30" />
                            <h4 className="md:text-[2.75rem] text-[2rem] font-bold mb-2 ml-2 "
                                style={{ lineHeight: '2.75rem' }}
                            >
                                22889 +
                            </h4>
                        </div>
                        <p className="text-[1.025rem] font-bold text-[#82838A]">
                            indexes (Viet Nam and International)
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                            CAPABILITIES
                        </h6>
                        <h4 className="md:text-[2.25rem] text-[1.75rem] font-bold mb-2"
                            style={{ lineHeight: '1.15' }}
                        >
                            The indexing industry has come a long way over the past 100 years.
                            BeQ Holdings ' offers are “smart”, sophisticated and innovative to respond to the very changing conditions of the market and the requirements of investors.
                        </h4>
                    </div>
                    <p className="text-[22px] font-bold text-[#82838A]">
                        From Benchmark, BlueChips, Sector, Strategies, Thematic Indexes to Volatility, Sentiment, Fear & Greed Indexes
                    </p>
                </div>
            </div>
        </section>
    )
}
export default HomeSection7;