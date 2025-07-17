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
import { ChevronLeft } from "lucide-react";

export default function AboutUs() {
  const baseImages = [
    "https://res.cloudinary.com/dyavs1cdn/image/upload/v1752488584/oh__img91_tmyo1e.jpg",
    "https://res.cloudinary.com/dyavs1cdn/image/upload/v1752488583/oh__img89_uek0ru.jpg",
    "https://res.cloudinary.com/dyavs1cdn/image/upload/v1752488583/oh__img90_nwjd0y.jpg",
  ];

  const [images, setImages] = useState([...baseImages, ...baseImages]);
  const [windowWidth, setWindowWidth] = useState(390);

  useEffect(() => {
    console.log("Updated images:", images, "length:", images.length);
  }, [images]);

  useEffect(() => {
    const handleSlideChange = (api: { selectedScrollSnap: () => any; scrollTo: (arg0: any, arg1: boolean) => void; }) => {
      const selectedIndex = api.selectedScrollSnap();
      const totalItems = images.length;
      const baseLength = baseImages.length;

      if (selectedIndex >= totalItems - baseLength) {
        console.log("[SlideChange] Adding images to end");
        setImages((prev) => [...prev, ...baseImages]);
      } else if (selectedIndex < baseLength) {
        console.log("[SlideChange] Adding images to start");
        setImages((prev) => [...baseImages, ...prev]);
        api.scrollTo(selectedIndex + baseLength, true);
      }
    };

    return () => {
      // Cleanup if needed
    };
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideWidth = () => (windowWidth >= 768 ? 859 : 326);

  return (
    <div className="flex flex-col">
      <div
        className="w-full md:h-[500px] max-md:h-[390px]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dyavs1cdn/image/upload/v1752478336/oh__img88_zp1vpm.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex mt-[125px]">
          <div className="ml-6 max-md:hidden relative group">
            <ChevronLeft width={56} className="hover:cursor-pointer" />
            <span className="absolute left-18 top-2.5 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1/2 transition-all duration-500 text-white px-2 py-1 rounded text-lg">
              Back
            </span>
          </div>
          <div className="md:mx-10 md:px-5 md:py-16 max-md:mx-5 max-md:py-12">
            <div className="text-[72px] max-md:text-[48px] font-bold">About us</div>
            <div className="text-white opacity-75 text-[17px]">
              WEALTH FARMING
              <br />
              VIETNAM UNICORNS
            </div>
            <div className="bg-[#BF9B30] px-3 py-1 text-base font-bold mt-5 rounded size-max">
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111111] max-md:rounded-2xl max-md:mt-[-10px]">
        <div className="flex justify-center w-full mx-auto mt-[70px] max-md:flex-col rounded-md">
          <div className="md:max-w-[1300px] w-full md:px-5 text-white max-md:flex-col">
            <div className="flex max-md:flex-col">
              <div className="md:max-w-[538px] px-5 md:mr-[112px]">
                <div className="text-[15px] text-white opacity-75 tracking-[-0.72px]">
                  CAPABILITIES
                </div>
                <div className="border-t border-white opacity-25 md:my-4 max-md:mt-5"></div>
                <div className="md:text-[52px] max-md:text-[37.6px] font-bold mb-4">
                  BeQ Holdings
                </div>
                <div className="text-[28px] max-md:text-[24px] font-bold md:mt-[60px] max-md:my-[40px]">
                  Supply excellent solution services, reliable companion for all
                  businesses.
                </div>
              </div>
              <div className="md:max-w-[325px] px-5">
                <div className="text-[15px] text-white opacity-75 max-md:mb-4 tracking-[-0.72px]">
                  TECHNOLOGY
                </div>
                <div className="border-t border-white opacity-25 md:my-4 md:w-[285px] max-md:mb-2"></div>
                <div className="md:text-[28px] max-md:text-[24px] font-bold pb-[15px] mb-4">
                  Data Science & Technology Institute
                </div>
                <ul className="list-none text-lg">
                  <li className="text-base text-[#BF9B30] font-[900] tracking-[-0.32px]">
                    <a href="">Cloud Computing Platform for Research (CCPR)</a>
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    One single access for everything you need to do research
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900] tracking-[-0.32px]">
                    Cloud Computing Platform for Investment (CCPI)
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    For investment companies
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900] tracking-[-0.32px]">
                    Cloud Computing Platform for Strategies (CCPS)
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    For retail investors
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900] tracking-[-0.32px]">
                    Data Science and Technology Institute (DSTI)
                  </li>
                  <li className="mb-[100px] mt-3 text-base text-white opacity-75">
                    Online/Offline, in Office, in Universities, in house
                  </li>
                </ul>
                <div className="text-[15px] text-white opacity-75 tracking-[-0.72px]">
                  FINANCIAL
                </div>
                <div className="border-t border-white opacity-25 my-4 md:w-[285px] max-md:mt-4 max-md:mb-2"></div>
                <div className="text-[28px] max-md:text-[24px] font-bold pb-[15px] mb-[40px] tracking-[-0.84px]">
                  Capital Farm, Financial Research & Investment
                </div>
                <ul className="list-none text-lg">
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Analyze financial markets, strategies and investments.
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Investment consulting, capital connection, strategy
                    consulting and IPO roadmap.
                  </li>
                  <li className="md:mb-4 mt-3 text-base text-white opacity-75">
                    Capital connection
                  </li>
                </ul>
              </div>
              <div className="md:w-[325px] px-5">
                <div className="text-[15px] text-white opacity-75 max-md:mb-4 tracking-[-0.72px]">
                  MEDIA SOLUTIONS
                </div>
                <div className="border-t border-white opacity-25 md:my-4 md:w-[285px] max-md:mb-2"></div>
                <div className="text-[28px] font-bold md:mb-4 max-md:mb-10 max-md:text-[24px] tracking-[-0.84px]">
                  Global Media
                </div>
                <ul className="list-none text-lg">
                  <li className="text-base text-[#BF9B30] font-[900]">
                    Social Media Marketing
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Offer powerful marketing tools to target specific
                    audiences, track the success of business campaigns to
                    promote brand and product.
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900]">
                    Video Production
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Producing high-quality videos that showcase your brand or
                    product, use them on business website and social media
                    platforms.
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900]">
                    Content Marketing
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Creating high-quality content that provides value to your
                    target audience can help you attract new customers and
                    build brand loyalty.
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900]">
                    Public Relations
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Building relationships with journalists and media outlets
                    to gain exposure for your brand or product.
                  </li>
                  <li className="text-base text-[#BF9B30] font-[900]">
                    Search Engine Optimization (SEO):
                  </li>
                  <li className="mb-[100px] mt-3 text-base text-white opacity-75">
                    Conducting keyword research and incorporating relevant
                    keywords to attract more traffic to business site.
                  </li>
                </ul>
                <div className="text-[15px] text-white opacity-75">
                  UNLOCKING POTENTIAL
                </div>
                <div className="border-t border-white opacity-25 my-4 md:w-[285px] max-md:mt-4 max-md:mb-2"></div>
                <div className="text-[28px] font-bold md:mb-4 max-md:mb-10 max-md:text-[24px] tracking-[-0.84px]">
                  Human Resources
                </div>
                <ul className="list-none text-lg">
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Education, coaching, hands-on training, society and public
                    human relations.
                  </li>
                  <li className="mb-4 mt-3 text-base text-white opacity-75">
                    Training, compensation, benefits, employee relations,
                    performance management.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel cho desktop */}
        <div className="relative h-[587px] mt-[70px] overflow-hidden max-md:hidden">
          <Carousel
            opts={{
              loop: true,
              align: 'center',
              slidesToScroll: 1,
              dragFree: true,
            }}
            className="w-auto h-[587px]"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={img}
                      alt={`slide-${index % baseImages.length}`}
                      className="w-[859px] h-[587px] object-cover flex-shrink-0 border-2 border-black"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 z-10 text-white hover:text-gray-300" />
            <CarouselNext className="absolute right-4 z-10 text-white hover:text-gray-300" />
          </Carousel>
        </div>

        {/* Carousel cho mobile */}
        <div className="relative w-full h-[222px] mt-[70px] overflow-hidden md:hidden">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full h-full"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/3">
                  <div className="h-full flex items-center justify-center">
                    <Image
                      src={img}
                      alt={`slide-${index % baseImages.length}`}
                      width={326}
                      height={222}
                      className="w-[326px] h-[222px] object-cover flex-shrink-0"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex max-md:flex-col w-full gap-[106px] py-[70px] max-md:pt-[40px] bg-[#19181a]">
          <div className="flex md:max-w-full md:w-[55%] max-md:w-full">
            <img
              className="w-full h-[340px] object-cover"
              src={"https://res.cloudinary.com/dyavs1cdn/image/upload/v1752573275/oh__img92_htegor.jpg"}
              alt=""
            />
          </div>
          <div className="flex flex-col px-5 gap-10 max-w-[430px]">
            <div className="text-[52px] font-bold mb-4 max-md:text-[37px]">Our Vision</div>
            <div className="mb-4 mt-3 text-base text-white opacity-75">
              The global Top 3 leader in smart index design with a diverse
              ecosystem of activities in the fields of finance, Big Data, Data
              Science, Technology, AI , Blockchain NFT, Education, Research,
              Practical Coaching.
            </div>
          </div>
        </div>

        <div className="flex mt-5 bg-[#19181a]">
          <section className="py-[91px] w-full mx-auto">
            <div
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-16 w-full max-w-[1400px] mx-auto max-h-[800px] overflow-y-scroll lg:overflow-clip"
            >
              {[
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227425/BEQ-HOLDINGS-logo-dark-768x713_bk9h40.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227423/BeQNFT-den_adrc58.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227422/BeShareShare_l3hfni.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227422/CCPR-nen-trang_q8ynec.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227421/CCPI-logo-Copy_lum9ps.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227420/CCPS-final-768x572_aocpkr.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227418/logoFire_mysjmb.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227417/TheIPOTimes-logo_l9uu5u.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227416/logo_beq_family-removebg-preview_tcecqs.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227415/IFRC_duoplz.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227415/TheXMagic_ss5omq.webp",
                  address: "",
                },
                {
                  link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227415/womenceo-Million-Dream-Font-RGB_pfyk3y.png",
                  address: "",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item.address) {
                      window.open(item.address, "_blank");
                    }
                  }}
                  className="flex cursor-pointer items-center justify-center w-[75px] h-[75px] md:w-[150px] md:h-[150px] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500"
                >
                  <Image
                    src={item.link}
                    alt="Group Logo"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div
          className="w-full md:h-[500px] mb-[100px] max-md:pb-[110px]"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dyavs1cdn/image/upload/v1752574726/oh__img93_no18al.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex md:mt-[110px]  max-w-full md:w-[1300px] mx-auto max-md:w-full ">
            <div className="md:mx-5 max-md:mt-[70px]  max-md:px-5">
              <div className="text-[15px] text-white">CONTACTS</div>
              <div className="border-t border-[#635D6FA6] my-4 w-[500px] max-md:w-[335px]"></div>
              <div className="text-[52px] max-md:text-[37px] font-bold mb-14 md:w-[500px] leading-[54.6px]">
                Want to know more about us?
              </div>
              <div className="bg-[#BF9B30] h-[48px] w-[163px] rounded flex items-center justify-center ">
                <div className="text-base font-bold">Send an email 🡢</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}