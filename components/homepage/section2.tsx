'use client';
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react"
const HomeSection2 = () => {
    return (
        <section className="py-8 w-full mx-auto ">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col lg:flex-row md:items-start justify-center w-full md:w-[85%] lg:w-2/3  mx-auto">
                    <div className="relative w-full xl:w-[50%] h-[40vh] flex items-center justify-center">
                        <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202348/dashboardlive.ccpi_.vn_assets_css_fonts_fontawesome-webfont.ttf_v4.6.3-768x542_lpo3hn.png" alt="Logo"
                            fill
                            className="object-fill w-full h-[40vh]" />
                    </div>
                    <div className="text-left flex flex-col xl:w-[50%] ml-8 mt-8 lg:mt-0">
                        <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                            INDEXES DASHBOARD
                        </h6>
                        <h2 className="text-[3.25rem] font-bold mb-2"
                            style={{
                                lineHeight: '3.5rem',
                            }}
                        >
                            Screener of Best Performers
                        </h2>
                        <p>
                            Empower your portfolio. Let data-driven insights guide your journey to investment success.  Uncover alpha opportunities with cutting-edge tools and curated indexes.
                        </p>
                        <Button className="group w-[200px] h-[40px] rounded-[4px] mt-4 bg-[#BF9B30] text-white hover:bg-[#a87c1f]">
                            <a href="https://dashboardlive.ccpi.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4">
                                Dashboard CCPI
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
export default HomeSection2;