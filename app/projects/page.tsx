"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import PageHeader from "@/components/header";
import Footer from "@/components/footer";

export default function Project() {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full flex relative">
                <div className="w-full flex flex-col items-center justify-center absolute top-0 z-20 mt-5">
                    <PageHeader />
                </div>
            </div>
            <div
                className="w-full md:h-[400px] max-md:h-[265px] "
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dyavs1cdn/image/upload/v1752744668/oh__img93_utatxd.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex w-full mt-[125px] justify-center">
                    <div className="md:mx-10 md:px-5 md:py-16 max-md:mx-5 max-md:py-12">
                        <div className="text-[72px] max-md:text-[48px] font-bold mx-auto">Projects</div>
                    </div>
                </div>
            </div>
            <div className="max-md:rounded-2xl max-md:mt-[-10px]">
                <div className="flex flex-col md:w-[1260px] w-full md:px-5">
                    <div className="flex flex-col md:mt-[80px] md:pt-[10px] items-center justify-center">
                        <div className="flex md:py-[50px] py-[15px] w-full items-center justify-center">
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                            <Star width={20} fill="#fff" className="mx-[10px]" />
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <div className="text-[40px] font-bold mb-16 text-center tracking-[-1.4px]">Cloud Computing Platform for Research (CCPR)</div>
                        <div className="flex flex-col max-md:gap-12">
                            <div className="flex max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752809641/image_2023_06_01T09_45_20_796Z_khf43a.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Front End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Cloud computing is the delivery of different services through the Internet. These resources include tools and
                                            applications like data storage, servers, databases, networking, and software.
                                        </div>
                                        <div className="text-base text-white opacity-75">
                                            Rather than keeping files on a proprietary hard drive or local storage device,
                                            <span className="text-[#BF9B30] opacity-100 hover:underline"> cloud-based storage</span> makes it
                                            possible to save them to a remote database.
                                        </div>
                                    </div>
                                    <a 
                                        href="https://ccpr.vn/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex md:mt-10 max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752810963/image_2023_06_01T09_57_50_215Z_pglaro.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Back End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Cloud Computing Platform For Research is a fantastic database of global data such as Stocks, Society, Nature, and so on. It assists users not only with data but also with advices from BeQ Holdings.
                                        </div>
                                        <div className="text-base text-white opacity-75">
                                            CCPR will save great efforts and resources for users in researching.
                                        </div>
                                    </div>
                                    <a 
                                        href="https://datacenter.ccpr.vn/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:pt-[10px] items-center justify-center">
                        <div className="flex md:py-[50px] py-[15px] w-full items-center justify-center">
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                            <Star width={20} fill="#fff" className="mx-[10px]" />
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <div className="text-[40px] font-bold mb-16 text-center tracking-[-1.4px]">Cloud Computing Platform For Investment (CCPI)</div>
                        <div className="flex flex-col">
                            <div className="flex max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752811305/2023-06-01_17-30-52_l7p2jx.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Back End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Cloud Computing Platform For Investment is a fantastic database of global data such as Stocks, Society, Nature, and so on. It assists users not only with data but also with calculations using BeQ Holdings’ formulas.
                                        </div>
                                            <div className="text-base text-white opacity-75">
                                            With CCPI, users could have professional advices with the least efforts and resources.
                                        </div>
                                    </div>
                                    <a 
                                        href="https://investment.ccpr.vn/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:pt-[10px] items-center justify-center">
                        <div className="flex md:py-[50px] py-[15px] w-full items-center justify-center">
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                            <Star width={20} fill="#fff" className="mx-[10px]" />
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <div className="text-[40px] font-bold mb-16 text-center tracking-[-1.4px]">Cloud Computing Platform For Strategies (CCPS)</div>
                        <div className="flex flex-col">
                            <div className="flex max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752811277/2023-06-01_17-36-57_hv4gol.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Back End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Cloud Computing Platform For Stragety is a fantastic database of global data such as Stocks, Society, Nature, and so on. It assists users not only with data but also with advices from BeQ Holdings.                                    </div>
                                        <div className="text-base text-white opacity-75">
                                            CCPS will save great efforts and resources for users in investing with a clear strategy.
                                        </div>
                                    </div>
                                    <a 
                                        href="https://strategies.ccpr.vn/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:pt-[10px] items-center justify-center">
                        <div className="flex md:py-[50px] py-[15px] w-full items-center justify-center">
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                            <Star width={20} fill="#fff" className="mx-[10px]" />
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <div className="text-[40px] font-bold mb-16 text-center tracking-[-1.4px]">Vietnam Data Science and Technology Institute</div>
                        <div className="flex flex-col">
                            <div className="flex max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752811277/2023-06-01_17-58-51-1536x756_bjuilm.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Front End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Our academic qualifications and professional certifications have been designed to reflect the fact that data science professionals must be trained to think scientifically and creatively in order to solve real-world challenges. We promote our courses through the European Qualifications Framework and offer internationally transferable credits.
                                            <br></br>
                                            The institute’s goal is to provide highly qualified workers not only in Vietnam, but all around the world.
                                        </div>

                                    </div>
                                    <a 
                                        href="https://dsti.edu.vn/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:mt-[80px] md:pt-[10px] items-center justify-center">
                        <div className="flex md:py-[50px] py-[15px] w-full items-center justify-center">
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                            <Star width={20} fill="#fff" className="mx-[10px]" />
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <div className="text-[40px] font-bold mb-16 text-center tracking-[-1.4px]">WomenCEOWorld Magazine and Directory</div>
                        <div className="flex flex-col">
                            <div className="flex max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752811277/2023-06-01_174338-1536x713_mlcyxj.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Front End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Providing a global overview of companies using indexes, with a focus on the returns of enterprises led by women. People will be able to visualize not only return ratios but also firm governance.
                                        </div>
                                        <div className="text-base text-white opacity-75">
                                            The magazine also includes articles that keep readers up to date on current events and recognize CEO accomplishments.
                                        </div>
                                    </div>
                                    <a 
                                        href="https://womenceoworld.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex md:mt-10 max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dvtuy0whs/image/upload/v1753169388/image_2023_06_01T09_58_51_019Z_chwpzq.png'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] md:gap-5">
                                    <h2 className="text-[30px] font-bold">Directory</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            Women CEO World Directory is a platform for connecting people, particularly female CEOs. They will have interaction with one other through infomation on the website, which is a great instrument for seizing the opportunity and developing.
                                        </div>
                                    </div>
                                    <a 
                                        href="https://directory.womenceoworld.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:pt-[10px] items-center justify-center">
                        <div className="flex md:py-[50px] py-[15px] w-full items-center justify-center">
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                            <Star width={20} fill="#fff" className="mx-[10px]" />
                            <div className="border-t border-white md:my-4 md:w-[50%] max-md:w-[42%]"></div>
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <div className="text-[40px] font-bold mb-16 text-center tracking-[-1.4px]">BeQ Family</div>
                        <div className="flex flex-col">
                            <div className="flex max-md:flex-col">
                                <div className="w-[427px] h-[217px] flex-shrink-0" style={{ width: '427px', height: '217px', minWidth: '427px', minHeight: '217px' }}>
                                    <Image
                                        src={'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752811277/2023-06-02_12-34-12_psgmav.webp'}
                                        alt=""
                                        width={427}
                                        height={217}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col pl-[20px] pt-0 md:gap-5">
                                    <h2 className="text-[30px] font-bold">Front End</h2>
                                    <div className="flex flex-col">
                                        <div className="text-base text-white opacity-75">
                                            At BeQ Family, our mission is to help you on your journey to a better understanding of yourself. Our goal is to create a strong community centered on self-discovery, self-improvement, and, most importantly, enjoyment!
                                        </div>
                                        <div className="text-base text-white opacity-75">
                                            We know that living in harmony with your True Self and maintaining a balanced lifestyle founded on three roots: morality, wisdom, and energy makes life better. We enjoy discovering and sharing exceptionally valuable approaches, tools, and items with you!
                                        </div>

                                    </div>
                                    <a 
                                        href="https://beqfamily.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center hover:bg-[#A08428] transition-colors cursor-pointer"
                                    >
                                        <div className="text-base font-bold">Website</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}