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
import { List, ListBulletsIcon, ListIcon, MagnifyingGlass, Plus, X } from "@phosphor-icons/react";
import Image from "next/image";
import { Menu } from "lucide-react";

interface MenuItem {
  name: string;
  key: string;
  subItems?: string[];
}

type SubItemLinks = {
  [K in string]: string;
} & {
  "BeQ Holdings": string;
  "Team": string;
  "Projects": string;
  "Partners": string;
  "Contact us": string;
  "Vietnam VNX indexes Family": string;
  "Indexes and Portfolios free and ready for Research": string;
  "Vietnam Smart Beta indexes Series": string;
  "Vietnam Provincial indexes Series": string;
  "Vietnam and International Women CEO Indexes": string;
  "Artificial Indexes indexes": string;
  "Sentiment/Fear & Greed Indexes": string;
  "BeQ/IFRC Volatility indexes": string;
  "Crypto Currency Indexes": string;
  "Currency indexes": string;
  "Customised indexes": string;
  "Data center": string;
  "Research": string;
  "Investment": string;
  "Strategies": string;
  "Education": string;
  "Society": string;
  "Web Services": string;
  "Service": string;
  "Data Science and Technology Institute (DTSI)": string;
  "DSTI Professional Data Analyst Certificate": string;
  "DSTI Professional Data Scientist Certificate": string;
  "Learning to conduct and publish research in international journals": string;
  "BeQ Holdings Grand Opening 2025": string;
  "BeQ Financial Township Competition": string;
  "Training": string;
  "Gallery": string;
  "Video": string;
  "Newsletter": string;
  "Brochures": string;
  "Cloud Computing Platform for Research (CCPR)": string;
  "Research Project : Vietnam AI Development Index": string;
  "Research Project : ASEAN Monetary Unit": string;
  "Research Project : Market High Volatility, Risk or Opportunities": string;
  "To schedule a direct conversation and introduction between the lender and the company (borrower)": string;
  "Legal entity name of the borrower": string;
  "Shareholding structure": string;
  "Overall information on Group Company and Business activities": string;
  "Management of the Company (the borrower)": string;
  "Briefing the big picture strategy for the year, together with growth opportunities and challenges": string;
  "Financial reports for the last 3 years (English perferable)": string;
  "Borrower’s expectation for Loan application: Structure, amount, terms & conditions, timings,…": string;
  "BeQ Financial Township Competition Kicks Off in Ho Chi Minh City": string;
  "BeQ Holdings successfully organizes Week 2 Financial Township Competition": string;
  "BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey": string;
  "BeQ Holdings Celebrates Unique Financial Strategies in Week 4": string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState<string | null>(null);
  const [subSubMenuOpen, setSubSubMenuOpen] = React.useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = (item: string) => {
    setSubMenuOpen(subMenuOpen === item ? null : item);
  };
  const toggleSubSubMenu = (item: string) => {
    setSubSubMenuOpen(subSubMenuOpen === item ? null : item);
  };

  const menuItems: MenuItem[] = [
    { name: "Home", key: "home"},
    { name: "About", key: "about", subItems: ["BeQ Holdings", "Team", "Projects", "Partners", "Contact us"] },
    { name: "Indexes Family", key: "indexes", subItems: ["Vietnam VNX indexes Family", "Indexes and Portfolios free and ready for Research", "Vietnam Smart Beta indexes Series", "Vietnam Provincial indexes Series", "Vietnam and International Women CEO Indexes", "Artificial Indexes indexes", "Sentiment/Fear & Greed Indexes", "BeQ/IFRC Volatility indexes", "Crypto Currency Indexes", "Currency indexes", "Customised indexes"] },
    { name: "Big Data", key: "bigdata", subItems: ["Data center", "Research", "Investment", "Strategies", "Education", "Society", "Web Services", "Service"] },
    { name: "Education", key: "education", subItems: ["Data Science and Technology Institute (DTSI)", "DSTI Professional Data Analyst Certificate", "DSTI Professional Data Scientist Certificate", "Learning to conduct and publish research in international journals"] },
    { name: "News", key: "news", subItems: ["BeQ Holdings Grand Opening 2025", "BeQ Financial Township Competition"] },
    { name: "Events", key: "events", subItems: ["Training"] },
    { name: "Media", key: "media", subItems: ["Gallery", "Video", "Newsletter", "Brochures"] },
  ];

  const subItemSubItems: { [key: string]: string[] } = {
    "Research": ["Cloud Computing Platform for Research (CCPR)", "Research Project : Vietnam AI Development Index", "Research Project : ASEAN Monetary Unit", "Research Project : Market High Volatility, Risk or Opportunities"],
    "Service": ["To schedule a direct conversation and introduction between the lender and the company (borrower)", "Legal entity name of the borrower", "Shareholding structure", "Overall information on Group Company and Business activities", "Management of the Company (the borrower)", "Briefing the big picture strategy for the year, together with growth opportunities and challenges", "Financial reports for the last 3 years (English perferable)", "Borrower’s expectation for Loan application: Structure, amount, terms & conditions, timings,…" ],
    "BeQ Financial Township Competition": ["BeQ Financial Township Competition Kicks Off in Ho Chi Minh City", "BeQ Holdings successfully organizes Week 2 Financial Township Competition", "BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey", "BeQ Holdings Celebrates Unique Financial Strategies in Week 4"]
  };

  const subItemLinks: SubItemLinks = {
    "BeQ Holdings": "https://beqholdings.com/about-us/",
    "Team": "https://beqholdings.com/team/",
    "Projects": "https://beqholdings.com/projects/",
    "Partners": "https://beqholdings.com/partners/",
    "Contact us": "https://beqholdings.com/about-us/contact-us/",
    "Vietnam VNX indexes Family": "https://beqholdings.com/beq-ifrc-vietnam-vnx-indexes-family/",
    "Indexes and Portfolios free and ready for Research": "https://beqholdings.com/beq-ifrc-indexes-and-portfolios-free-and-ready-for-research/",
    "Vietnam Smart Beta indexes Series": "http://www.beqholdings.com/beq-ifrc-vietnam-smart-beta-indexes/",
    "Vietnam Provincial indexes Series": "http://www.beqholdings.com/beq-ifrc-vietnam-provincial-indexes/",
    "Vietnam and International Women CEO Indexes": "#",
    "Artificial Indexes indexes": "https://beqholdings.com/beq-ifrc-artificial-indexes-indexes/",
    "Sentiment/Fear & Greed Indexes": "#",
    "BeQ/IFRC Volatility indexes": "https://beqholdings.com/beq-ifrc-volatility-indexes/",
    "Crypto Currency Indexes": "https://beqholdings.com/beq-ifrc-crypto-currency-indexes/",
    "Currency indexes": "https://beqholdings.com/beq-ifrc-currency-indexes/",
    "Customised indexes": "https://beqholdings.com/beq-ifrc-customised-indexes/",
    "Data center": "#",
    "Research": "#",
    "Investment": "#",
    "Strategies": "#",
    "Education": "#",
    "Society": "#",
    "Web Services": "#",
    "Service": "#",
    "Data Science and Technology Institute (DTSI)": "https://beqholdings.com/data-science-and-technology-institute-dtsi/",
    "DSTI Professional Data Analyst Certificate": "https://beqholdings.com/dsti-professional-data-analyst-certificate/",
    "DSTI Professional Data Scientist Certificate": "https://beqholdings.com/dsti-professional-data-scientist-certificate/",
    "Learning to conduct and publish research in international journals": "https://beqholdings.com/learning-to-conduct-and-publish-research-in-international-journals/",
    "BeQ Holdings Grand Opening 2025": "https://beqholdings.com/category/beq-holdings-grand-opening-2025/",
    "BeQ Financial Township Competition": "#",
    "Training": "https://beqholdings.com/training/",
    "Gallery": "https://beqholdings.com/gallery/",
    "Video": "https://beqholdings.com/video/",
    "Newsletter": "https://beqholdings.com/newsletter/",
    "Brochures": "https://beqholdings.com/brochures/",
    "Cloud Computing Platform for Research (CCPR)": "#",
    "Research Project : Vietnam AI Development Index": "https://beqholdings.com/research-project-vietnam-ai-development-index/",
    "Research Project : ASEAN Monetary Unit": "https://beqholdings.com/research-project-asean-monetary-unit/",
    "Research Project : Market High Volatility, Risk or Opportunities": "https://beqholdings.com/research-project-market-high-volatility-risk-or-opportunities/",
    "To schedule a direct conversation and introduction between the lender and the company (borrower)": "#",
    "Legal entity name of the borrower": "#",
    "Shareholding structure": "#",
    "Overall information on Group Company and Business activities": "#",
    "Management of the Company (the borrower)": "#",
    "Briefing the big picture strategy for the year, together with growth opportunities and challenges": "#",
    "Financial reports for the last 3 years (English perferable)": "#",
    "Borrower’s expectation for Loan application: Structure, amount, terms & conditions, timings,…": "#",
    "BeQ Financial Township Competition Kicks Off in Ho Chi Minh City": "https://beqholdings.com/beq-financial-township-competition-kicks-off-in-ho-chi-minh-city/",
    "BeQ Holdings successfully organizes Week 2 Financial Township Competition": "https://beqholdings.com/beq-holdings-successfully-organizes-week-2-competition-searching-for-strategies-to-expand-the-international-financial-market/",
    "BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey": "https://beqholdings.com/beq-holdings-concludes-week-3-competition-of-the-12-week-journey/",
    "BeQ Holdings Celebrates Unique Financial Strategies in Week 4": "https://beqholdings.com/beq-holdings-celebrates-unique-financial-strategies-in-week-4/",
  };

  return (
    <header
      id="masthead"
      className="header header-3 header-dynamic-typo extended-menu z-50 w-full"
      data-fixed-initial-offset="150"
    >
      <div className="header-wrap flex px-7 items-center max-md:hidden">
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
      <div className="header-wrap flex px-5 items-center md:hidden">
        <div className="flex items-center gap-[9px]">
          <Button
            variant="ghost"
            aria-controls="site-navigation"
            aria-expanded={isMenuOpen}
            className="bg-[#1c1b1d] w-15 h-15 rounded-full"
            onClick={toggleMenu}>
            <Menu width={40} className="!w-[28px] !h-[28px]" />
          </Button>
          <Image
            src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1753781965/BEQ-HOLDINGS-logo-dark_t8yxls.webp"
            alt=""
            width={75}
            height={70}
          ></Image>
        </div>
        {isMenuOpen && (
          <div
            id="site-navigation"
            className={`fixed top-0 left-0 h-screen bg-[#111111] text-white px-5 py-24 z-50 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} overflow-y-auto`}
            style={{ width: "85%" }}
          >
            <ul className="space-y-4">
              {menuItems.map((item: MenuItem) => (
                <li key={item.key} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    {item.subItems && (
                      <button
                        onClick={() => toggleSubMenu(item.key)}
                        className={`focus:outline-none transition-transform duration-300 ${subMenuOpen === item.key ? "rotate-45 text-white text-xl" : "text-gray-400 texl-xl"
                          }`}
                      >
                        +
                      </button>
                    )}
                  </div>
                  {subMenuOpen === item.key && item.subItems && (
                    <ul className="mt-2 space-y-3">
                      {item.subItems.map((subItem, index) => (
                        <li key={index} className="text-white ml-4 flex flex-col">
                          <div className="flex justify-between items-center">
                            <a
                              href={subItemLinks[subItem] || "#"}
                              className="text-white hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {subItem}
                            </a>
                            {subItemSubItems[subItem] && (
                              <button
                                onClick={() => toggleSubSubMenu(`${item.key}-${index}`)}
                                className={`focus:outline-none transition-transform duration-300 ${subSubMenuOpen === `${item.key}-${index}` ? "rotate-45 text-white text-xl" : "text-gray-400 text-xl"
                                  }`}
                              >
                                +
                              </button>
                            )}
                          </div>
                          {subSubMenuOpen === `${item.key}-${index}` && subItemSubItems[subItem] && (
                            <ul className="mt-2 space-y-2 ml-4">
                              {subItemSubItems[subItem].map((subSubItem, subIndex) => (
                                <li key={subIndex} className="text-white">
                                  <a href={subItemLinks[subSubItem] || "#"} className="text-white hover:underline">{subSubItem}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <p className=" text-sm mt-4">
              © 2016-2023 <span className="text-[#bf9b30]">BeQ Holdings</span>. All rights reserved
            </p>
          </div>
        )}
      </div>
      
    </header>
  );
};

export default Header;