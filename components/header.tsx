'use client'
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { List, MagnifyingGlass, Plus, X } from "@phosphor-icons/react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      id="masthead"
      className="header header-3 header-dynamic-typo extended-menu z-50 w-full"
      data-fixed-initial-offset="150"
    >
      <div className="header-wrap flex px-7 items-center">
        <div className="">
          <Image 
          src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1753781965/BEQ-HOLDINGS-logo-dark_t8yxls.webp"
          alt=""
          width={75}
          height={70}
          ></Image>
        </div>
        <div className="header-wrap-inner mx-auto">
          <style jsx>{`
            .flex a {
              opacity: 1;
              color: #ffffff;
              transition: opacity 0.3s ease;
            }
            .flex:hover a {
              opacity: 0.6;
            }
            .flex a:hover,
            .nav-item:hover > a {
              opacity: 1;
            }
            .nav-item {
              position: relative;
            }
            .nav-item:hover .dropdown,
            .dropdown-item:hover .sub-dropdown {
              display: block;
            }
            .nav-item .dropdown {
              display: none;
              position: absolute;
              padding: 20px 0px;
              background-color: #111111;
              border-radius: 4px;
              min-width: 416px;
              z-index: 1000;
              top: 100%;
              left: 0;
            }
            .dropdown-item {
              position: relative;
            }
            .dropdown-item .sub-dropdown {
              display: none;
              position: absolute;
              background-color:  #111111;
              padding: 20px 0px;
              border-radius: 4px;
              min-width: 416px;
              white-space: nowrap;
              right: 100%;
              top: 0;
            }
            .dropdown li,
            .sub-dropdown li {
              position: relative;
            }
            .dropdown li::after,
            .sub-dropdown li::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 0;
              height: 2px;
              background-color: #bf9b30;
              transition: width 0.5s ease, left 0.5s ease, right 0.5s ease;
            }
            .dropdown li:hover::after,
            .sub-dropdown li:hover::after {
              width: 100%;
              left: 0;
              right: 0;
            }
            .dropdown li:hover,
            .sub-dropdown li:hover {
              background-color: #9690a20f;
            }
            .nav-item .dropdown > ul > li:hover > a:first-child {
              color: #bf9b30 !important;
            }
            .dropdown-item span {
              color: gray;
              font-size: 18px;
              transition: transform 0.3s ease, color 0.3s ease;
            }
            .dropdown-item:hover span {
              transform: rotate(45deg);
              color: #bf9b30;
            }
            .dropdown a {
              color: #fff;
              opacity: 0.9;
              text-decoration: none;
            }
            .sub-dropdown a {
              color: #ffffff; 
              opacity: 1; 
              text-decoration: none;
            }
            .sub-dropdown > ul > li:hover a {
              color: #bf9b30 !important; 
            }
            
          `}</style>
          <div className="flex relative text-white p-2 w-full">
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">Home</a>
              <div className="dropdown">
                <ul className="list-none px-3 m-0">
                  <li className="py-2"><a href="#" className="block no-underline">Home 1</a></li>
                  <li className="py-2"><a href="#" className="block no-underline">Home 2</a></li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">About</a>
              <div className="dropdown p-0">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5"><a href="https://beqholdings.com/about-us/" className="block no-underline">BeQ Holdings</a></li>
                  <li className="py-2 px-5"><a href="https://beqholdings.com/team/" className="block no-underline">Team</a></li>
                  <li className="py-2 px-5"><a href="https://beqholdings.com/projects/" className="block no-underline">Projects</a></li>
                  <li className="py-2 px-5"><a href="https://beqholdings.com/partners/" className="block no-underline">Partners</a></li>
                  <li className="py-2 px-5"><a href="https://beqholdings.com/about-us/contact-us/" className="block no-underline">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">Indexes Family</a>
              <div className="dropdown">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-vietnam-vnx-indexes-family/" className="menu-link -undash sub-menu-link">
                      Vietnam VNX indexes Family
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-indexes-and-portfolios-free-and-ready-for-research/" className="menu-link -undash sub-menu-link">
                      Indexes and Portfolios free and ready for Research
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="http://www.beqholdings.com/beq-ifrc-vietnam-smart-beta-indexes/" className="menu-link -undash sub-menu-link">
                      Vietnam Smart Beta indexes Series
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="http://www.beqholdings.com/beq-ifrc-vietnam-provincial-indexes/" className="menu-link -undash sub-menu-link">
                      Vietnam Provincial indexes Series
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="#" className="menu-link -undash sub-menu-link">
                      Vietnam and International Women CEO Indexes
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-artificial-indexes-indexes/" className="menu-link -undash sub-menu-link">
                      Artificial Indexes indexes
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="#" className="menu-link -undash sub-menu-link">
                      Sentiment/Fear & Greed Indexes
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-volatility-indexes/" className="menu-link -undash sub-menu-link">
                      BeQ/IFRC Volatility indexes
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-crypto-currency-indexes/" className="menu-link -undash sub-menu-link">
                      Crypto Currency Indexes
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-currency-indexes/" className="menu-link -undash sub-menu-link">
                      Currency indexes
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/beq-ifrc-customised-indexes/" className="menu-link -undash sub-menu-link">
                      Customised indexes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px] nav-link">Big Data</a>
              <div className="dropdown">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5">
                    <a target="_blank" className="menu-link -undash sub-menu-link">
                      Data center
                    </a>
                  </li>
                  <li className="py-2 px-5 dropdown-item flex justify-between">
                    <a target="_blank" className="block no-underline">Research</a>
                    <span className="text-white opacity-90">+</span>
                    <div className="sub-dropdown">
                      <ul className="list-none p-0 m-0">
                        <li className="py-2 px-5 ">
                          <a href="http://www.ccpr.vn" className="menu-link -undash sub-menu-link">
                            Cloud Computing Platform for Research (CCPR)
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/research-project-vietnam-ai-development-index/" className="menu-link -undash sub-menu-link">
                            Research Project : Vietnam AI Development Index
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/research-project-asean-monetary-unit/" className="menu-link -undash sub-menu-link">
                            Research Project : ASEAN Monetary Unit
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/research-project-market-high-volatility-risk-or-opportunities/" className="menu-link -undash sub-menu-link">
                            Research Project : Market High Volatility, Risk or Opportunities
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="py-2 px-5">
                    <a target="_blank" className="menu-link -undash sub-menu-link">
                      Investment
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a target="_blank" className="menu-link -undash sub-menu-link">
                      Strategies
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a target="_blank" className="menu-link -undash sub-menu-link">
                      Education
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a target="_blank" className="menu-link -undash sub-menu-link">
                      Society
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a target="_blank" className="menu-link -undash sub-menu-link">
                      Web Services
                    </a>
                  </li>
                  <li className="py-2 px-5 dropdown-item flex justify-between">
                    <a target="_blank" className="block no-underline">Service</a>
                    <span className="text-white opacity-90">+</span>
                    <div className="sub-dropdown">
                      <ul className="list-none p-0 m-0">
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228972" className="menu-link -undash sub-menu-link">
                            To schedule a direct conversation and introduction between the lender and the company (borrower)
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228977" className="menu-link -undash sub-menu-link">
                            Legal entity name of the borrower
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228982" className="menu-link -undash sub-menu-link">
                            Shareholding structure
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228987" className="menu-link -undash sub-menu-link">
                            Overall information on Group Company and Business activities
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228989" className="menu-link -undash sub-menu-link">
                            Management of the Company (the borrower)
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228997" className="menu-link -undash sub-menu-link">
                            Briefing the big picture strategy for the year, together with growth opportunities and challenges
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=228999" className="menu-link -undash sub-menu-link">
                            Financial reports for the last 3 years (English perferable)
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/?p=229001" className="menu-link -undash sub-menu-link">
                            Borrower’s expectation for Loan application: Structure, amount, terms & conditions, timings,…
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">Education</a>
              <div className="dropdown">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/data-science-and-technology-institute-dtsi/" className="menu-link -undash sub-menu-link">
                      Data Science and Technology Institute (DTSI)
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/dsti-professional-data-analyst-certificate/" className="menu-link -undash sub-menu-link">
                      DSTI Professional Data Analyst Certificate
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/dsti-professional-data-scientist-certificate/" className="menu-link -undash sub-menu-link">
                      DSTI Professional Data Scientist Certificate
                    </a>
                  </li>
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/learning-to-conduct-and-publish-research-in-international-journals/" className="menu-link -undash sub-menu-link">
                      Learning to conduct and publish research in international journals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">News</a>
              <div className="dropdown">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/category/beq-holdings-grand-opening-2025/" className="menu-link -undash sub-menu-link">
                      BeQ Holdings Grand Opening 2025
                    </a>
                  </li>
                  <li className="py-2 px-5 dropdown-item flex justify-between">
                    <a target="_blank" className="block no-underline">BeQ Financial Township Competition</a>
                    <span className="text-white opacity-90">+</span>
                    <div className="sub-dropdown">
                      <ul className="list-none p-0 m-0">
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/beq-financial-township-competition-kicks-off-in-ho-chi-minh-city/" className="menu-link -undash sub-menu-link">
                            BeQ Financial Township Competition Kicks Off in Ho Chi Minh City
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/beq-holdings-successfully-organizes-week-2-competition-searching-for-strategies-to-expand-the-international-financial-market/" className="menu-link -undash sub-menu-link">
                            BeQ Holdings successfully organizes Week 2 Financial Township Competition
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/beq-holdings-concludes-week-3-competition-of-the-12-week-journey/" className="menu-link -undash sub-menu-link">
                            BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey
                          </a>
                        </li>
                        <li className="py-2 px-5 ">
                          <a href="https://beqholdings.com/beq-holdings-celebrates-unique-financial-strategies-in-week-4/" className="menu-link -undash sub-menu-link">
                            BeQ Holdings Celebrates Unique Financial Strategies in Week 4
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">Events</a>
              <div className="dropdown">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/training/" className="menu-link -undash sub-menu-link">
                      Training
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-item relative">
              <a href="https://beqholdings.com/" className="text-base px-[18px]">Media</a>
              <div className="dropdown">
                <ul className="list-none p-0 m-0">
                  <li className="py-2 px-5">
                    <a href="https://beqholdings.com/gallery/" className="menu-link -undash sub-menu-link">
                      Gallery
                    </a>
                  </li><li className="py-2 px-5">
                    <a href="https://beqholdings.com/video/" className="menu-link -undash sub-menu-link">
                      Video
                    </a>
                  </li><li className="py-2 px-5">
                    <a href="https://beqholdings.com/newsletter/" className="menu-link -undash sub-menu-link">
                      Newsletter
                    </a>
                  </li><li className="py-2 px-5">
                    <a href="https://beqholdings.com/brochures/" className="menu-link -undash sub-menu-link">
                      Brochures
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;