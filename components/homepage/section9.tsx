// components/homepage/section9.tsx

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomeSection9 = () => {
    const { t } = useTranslation()
    return (
        <section className="w-full bg-black text-white flex flex-col items-center justify-between py-8 md:py-16 px-16">
            <div className="flex flex-col-reverse md:flex-row w-full">
                <div className="flex flex-col gap-12 md:w-1/2 w-full md:px-0">
                    <h6 className="text-[.9rem] uppercase tracking-wide mb-4">
                        {t('section9_tag')}
                    </h6>
                    <h4 className="md:text-[3.25rem] text-[calc(2.35rem + 0.9 * ((100vw - 576px) / 864))] font-bold mb-2"
                        style={{ lineHeight: '1.05' }}>
                        {t('section9_title')}
                    </h4>
                    <SlideContent />
                </div>
                <div className="flex flex-col md:w-1/2 w-full h-[500px] z-10">
                    <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752229365/oh__img137_mdf1iy.jpg"
                        alt="Section9 Image"
                        width={700}
                        height={500}
                        className="object-cover w-full h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
}
export default HomeSection9;




const SlideContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation()
    const content = [
        t('section9_des_1'),
        t('section9_des_2'),
        t('section9_des_3'),
        t('section9_des_4'),
    ];
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
    };

    return (
        <div className="w-full flex flex-col items-start justify-center gap-4">
            <div className="flex flex-col items-start justify-center w-full overflow-hidden">
                <div className="inline-flex w-[400%] animate-slide"
                    style={{ transform: `translateX(-${currentIndex * 25}%)`, transition: 'transform 0.5s ease-in-out' }}
                >
                    {
                        content.map((item, index) => (
                            <p key={index} className="text-[1.025rem] text-[#82838A] mb-4 w-1/4 font-normal leading-relaxed">
                                {item}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="w-full inline-flex justify-between gap-8">
                <div className="inline-flex items-center justify-center gap-2 text-[1.025rem] text-[#82838A]">
                    {currentIndex + 1}
                    <span className="mx-1">—</span>
                    {content.length}
                </div>
                <div className="md:w-1/3 w-full flex items-center justify-start gap-4">
                    <div
                        onClick={handlePrev}
                        className="flex items-center justify-center cursor-pointer bg-[#4f50557c] rounded-full transition-all duration-500 p-3 hover:bg-[#4f5055]">
                        <ArrowLeftIcon size={28} color="#fff" />
                    </div>
                    <div
                        onClick={handleNext}
                        className="flex items-center justify-center cursor-pointer bg-[#4f50557c] rounded-full transition-all duration-500 p-3 hover:bg-[#4f5055]">
                        <ArrowRightIcon size={28} color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}