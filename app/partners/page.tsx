"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Star } from "lucide-react";

export default function Partners() {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="md:mx-10 md:px-5 md:py-24 max-md:mx-5 max-md:py-12">
                <div className="text-[72px] max-md:text-[48px] font-bold mx-auto">Partners</div>
            </div>
            <div className="flex flex-col md:w-[1260px] w-full md:py-2 max-md:mb-12">
                <div className="text-white flex flex-col items-center justify-center p-4 md:mb-10">
                    <div className="flex flex-col max-md:gap-12">
                        <div className="flex md:py-[10px] max-md:flex-col">
                            <Image
                                src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752824037/IFRC1180x1192_cx2aho.webp'}
                                alt=""
                                width={427}
                                height={217}
                                className="p-[10px] md:w-[370px] md:h-[373px]"
                            >
                            </Image>
                            <div className="flex flex-col p-[10px] md:gap-5">
                                <h2 className="text-[36px] font-bold mb-2 tracking-[-1.26px] md:whitespace-nowrap">Intelligent Financial Research & Consulting (IFRC)</h2>
                                <div className="flex flex-col">
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Intelligent Financial Research & Consulting (IFRC) is a French and Vietnamese company.
                                    </div>
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Created in 2010, IFRC is specialized in Indexing (calculates and maintains more than 20,000 indexes including 10,000 Vietnam indexes), Big Data, Education, Research, Financial Strategies (long, short and intraday) and development of Web Apps, and Platforms.
                                    </div>
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Among the most striking products and projects are the Vietnam Women CEO indices which largely outperform the national indices of the Vietnamese Stock Exchange, the Vietnam Economics and Financial Research Center (VNEFRC) precursor of the Cloud Computing Platfor for Research (CCPR) developed by Beq Holdings, the Virtual Derivatives Market, or even the employees appraisal software for the city of Dong Thap.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white flex flex-col items-center justify-center p-4 md:mb-10 max-md:hidden">
                    <div className="flex flex-col max-md:gap-12">
                        <div className="flex md:py-[10px] max-md:flex-col">
                            <div className="flex flex-col p-[10px] md:gap-5">
                                <h2 className="text-[36px] font-bold mb-2 tracking-[-1.26px] whitespace-nowrap">Wishare</h2>
                                <div className="flex flex-col">
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Wishare Co., Ltd. is a technology company that pursues the purpose of applying technology to maximize social impact. The company building the Wishare platform is a social network that shares dreams and promotes activities for social advancement.
                                    </div>
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Fundraising and charity management platform
                                    </div>
                                </div>
                            </div>
                            <Image
                                src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752824037/whishare-logo_sccgup.png'}
                                alt=""
                                width={427}
                                height={217}
                                className="p-[10px] md:w-[426px] md:h-[426px]"
                            >
                            </Image>
                        </div>
                    </div>
                </div>
                <div className="text-white flex flex-col items-center justify-center p-4 md:mb-10">
                    <div className="flex flex-col max-md:gap-12">
                        <Image
                            src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752824037/whishare-logo_sccgup.png'}
                            alt=""
                            width={427}
                            height={217}
                            className="p-[10px] md:w-[370px] md:h-[370px]"
                        >
                        </Image>
                        <div className="flex md:py-[10px] max-md:flex-col">
                            <div className="flex flex-col p-[10px] md:gap-5">
                                <h2 className="text-[36px] font-bold mb-2 tracking-[-1.26px] whitespace-nowrap">Wishare</h2>
                                <div className="flex flex-col">
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Wishare Co., Ltd. is a technology company that pursues the purpose of applying technology to maximize social impact. The company building the Wishare platform is a social network that shares dreams and promotes activities for social advancement.
                                    </div>
                                    <div className="mt-4 text-base text-white opacity-75">
                                        Fundraising and charity management platform
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="text-white flex flex-col items-center justify-center p-4 md:mb-10">
                    <div className="flex flex-col max-md:gap-12">
                        <div className="flex md:py-[10px] max-md:flex-col justify-center items-center">
                            <Image
                                src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752824036/Allsports_vj0fzb.webp'}
                                alt=""
                                width={327}
                                height={131}
                                className="p-[10px] md:w-[327px] md:h-[131px]"
                            >
                            </Image>
                            <div className="flex flex-col p-[10px] md:gap-5">
                                <h2 className="text-[36px] font-bold mb-2 tracking-[-1.26px] whitespace-nowrap">AllSports Business</h2>
                                <div className="flex flex-col">
                                    <div className="mt-4 text-base text-white opacity-75">
                                        The AllSports Business is a business circle based on a network made up of 30 years of international business.
                                    </div>
                                    <div className="mt-4 text-base text-white opacity-75">
                                        This business circle around sports, arts and entrepreneurship, exists for 4 years and aims to identify and support talents whether they are athletes, artists, inventors, or entrepreneurs. Last 3 years, we develop 4 brands, SERVIN® , THILLEON®, ComptaOne® and T-Shidi.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}