'use client';
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react"
import { useTranslation } from "react-i18next";
const HomeSection2 = () => {
    const {t} = useTranslation()
    return (
        <section className="py-8 w-full md:w-[85%] mx-auto px-0 ">
            <div className="flex flex-col items-center justify-center max-w-[1400px] w-full">
                <div className="flex flex-col xl:flex-row xl:items-start justify-center w-full mx-auto">
                    <div className="relative xl:w-1/2 w-full h-[50vh] flex items-center justify-center">
                        <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202348/dashboardlive.ccpi_.vn_assets_css_fonts_fontawesome-webfont.ttf_v4.6.3-768x542_lpo3hn.png" alt="Logo"
                            fill
                            className="object-fill w-full h-[50vh]" />
                    </div>
                    <div className="text-left flex flex-col xl:w-[50%] ml-8 mt-8 xl:mt-0">
                        <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                            {t('section2_tag')}
                        </h6>
                        <h2 className="text-[3.25rem] font-bold mb-2"
                            style={{
                                lineHeight: '3.5rem',
                            }}
                        >
                            {t('section2_title_1')} <br/> {t('section2_title_2')}
                        </h2>
                        <p>
                            {t('section2_description')}
                        </p>
                        <Button className="group w-[200px] h-[40px] rounded-[4px] mt-4 bg-[#BF9B30] text-white hover:bg-[#a87c1f]">
                            <a href="https://dashboardlive.ccpi.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-4">
                                {t('section2_button')}
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