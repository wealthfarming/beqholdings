import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


const HomeSection1 = () => {
    return (
        <div className="flex flex-row items-center justify-center w-full md:w-[80%] relative ">
            <div className="flex flex-row  items-center relative w-full max-w-[1300px] mx-auto">
                <div className="relative w-full h-[700px] flex md:flex-row overflow-visible md:overflow-hidden">
                    <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202271/homeS1_q4gakz.webp" alt="Logo" width={700} height={700} className="object-cover " />

                </div>
                {/* <div className="absolute rounded-full top-0 w-[700px] h-[700px] right-0 bg-black/70  z-0"></div> */}
                <div className="absolute rounded-full top-0 w-[700px] h-[700px] md:right-[20px] right-0 bg-[#BF9B30] opacity-[0.4] z-1"></div>
                <AnimatedText />
            </div>
        </div>
    );
}
export default HomeSection1;

const AnimatedText = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const {t} = useTranslation()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return (
        <div
            ref={ref}
            style={{
                textRendering: 'optimizeLegibility',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                lineHeight: '4rem',
                transition: 'opacity 0.8s, transform 0.8s',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(250px)',
            }}
            className="w-[90%] md:w-[675px] md:pl-4 text-left text-5xl lg:text-6xl font-bold z-10 absolute right-0  md:right-[20px] translate-y-[-50%] top-[50%] text-white"
        >
            {t('introduction')}
        </div>
    );
};

// Replace $SELECTION_PLACEHOLDER$ with:

