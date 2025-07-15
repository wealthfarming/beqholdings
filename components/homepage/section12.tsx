import { ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

const HomeSection12 = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full gap-8 py-8 md:py-16 ">
            <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl px-4 gap-8">
                <div className="md:w-1/2 w-full flex flex-col items-start justify-center">
                    <h2 className="text-3xl font-bold  mb-4">
                        We are driving the future and shaping the world of tomorrow
                    </h2>
                </div>
                <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-4">
                    <p className="text-[1.025rem] "
                        style={{
                            lineHeight: '1.65rem',
                        }}
                    >
                        <strong>BeQ Holdings</strong> creates a future where <strong>technology seamlessly connects</strong> and <strong>empowers</strong> individuals and organizations to <strong>reach their full potential.</strong>
                    </p>
                    <Button className="group w-[200px] h-[40px] rounded-[4px] mt-4 bg-[#BF9B30] text-white hover:bg-[#a87c1f]">
                        <a href="https://dashboardlive.ccpi.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4">
                            See Open Positions
                            <ArrowRightIcon
                                size={24}
                                className="transform origin-center transition-transform group-hover:translate-x-2 group-active:translate-x-0"
                            />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
export default HomeSection12;