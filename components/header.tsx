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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      id="masthead"
      className="header header-3 header-dynamic-typo extended-menu z-50"
      data-fixed-initial-offset="150"
    >
      <div className="header-wrap">
        <div className="header-wrap-inner">
          <div className="left-part">
            <div className="mobile-hamburger -left md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="icon-button hamburger" aria-controls="site-navigation" aria-expanded="false">
                    <List className="icon" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="mobile-overlay menu-mobile-overlay p-0">
                  <div className="overlay" />
                  <div className="close-bar flex justify-between items-center p-4">
                    <Button
                      variant="ghost"
                      className="icon-button -overlay-button"
                      aria-label="close"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="icon" size={24} />
                    </Button>
                    <Button
                      variant="ghost"
                      className="icon-button -overlay-button search-global fixed dynamic-typo btn-round-light hidden sm:block"
                      data-nav-search="true"
                    >
                      <MagnifyingGlass className="icon" size={24} />
                    </Button>
                  </div>
                  <div className="holder overflow-y-auto h-full p-4">
                    <div id="mega-menu-wrap" className="nav-container">
                      <ul id="mobile-menu" className="mobile-menu menu list-none m-0 p-0">
                        <li id="nav-menu-item-225168-687a0fbeb7e08" className="mega-menu-item nav-item menu-item-depth-0 current-menu-item">
                          <a href="https://beqholdings.com/" className="menu-link -undash main-menu-link item-title">
                            <span>Home</span>
                          </a>
                        </li>
                        <li id="nav-menu-item-225396-687a0fbeb7e83" className="mega-menu-item nav-item menu-item-depth-0 has-submenu">
                          <a href="#" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>About</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-225317-687a0fbeb7ebb" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/about-us/" className="menu-link -undash sub-menu-link">
                                <span>BeQ Holdings</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-225322-687a0fbeb7ee9" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/team/" className="menu-link -undash sub-menu-link">
                                <span>Team</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-226968-687a0fbeb7f12" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/projects/" className="menu-link -undash sub-menu-link">
                                <span>Projects</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-226969-687a0fbeb7f3b" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/partners/" className="menu-link -undash sub-menu-link">
                                <span>Partners</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-225460-687a0fbeb7f62" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/about-us/contact-us/" className="menu-link -undash sub-menu-link">
                                <span>Contact us</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="nav-menu-item-227892-687a0fbeb7fb6" className="mega-menu-item nav-item menu-item-depth-0 has-submenu">
                          <a href="https://beqholdings.com/indexes/" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>Indexes Family</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-227914-687a0fbeb7fe4" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-vietnam-vnx-indexes-family/" className="menu-link -undash sub-menu-link">
                                <span>Vietnam VNX indexes Family</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228201-687a0fbeb800d" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-indexes-and-portfolios-free-and-ready-for-research/" className="menu-link -undash sub-menu-link">
                                <span>Indexes and Portfolios free and ready for Research</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-227915-687a0fbeb8033" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="http://www.beqholdings.com/beq-ifrc-vietnam-smart-beta-indexes/" className="menu-link -undash sub-menu-link">
                                <span>Vietnam Smart Beta indexes Series</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-227916-687a0fbeb805a" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="http://www.beqholdings.com/beq-ifrc-vietnam-provincial-indexes/" className="menu-link -undash sub-menu-link">
                                <span>Vietnam Provincial indexes Series</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-227918-687a0fbeb8080" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="#" className="menu-link -undash sub-menu-link">
                                <span>Vietnam and International Women CEO Indexes</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228299-687a0fbeb80a8" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-artificial-indexes-indexes/" className="menu-link -undash sub-menu-link">
                                <span>Artificial Indexes indexes</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-227920-687a0fbeb80cf" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="#" className="menu-link -undash sub-menu-link">
                                <span>Sentiment/Fear & Greed Indexes</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228308-687a0fbeb80f7" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-volatility-indexes/" className="menu-link -undash sub-menu-link">
                                <span>BeQ/IFRC Volatility indexes</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228297-687a0fbeb811d" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-crypto-currency-indexes/" className="menu-link -undash sub-menu-link">
                                <span>Crypto Currency Indexes</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228298-687a0fbeb814c" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-currency-indexes/" className="menu-link -undash sub-menu-link">
                                <span>Currency indexes</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228301-687a0fbeb8172" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/beq-ifrc-customised-indexes/" className="menu-link -undash sub-menu-link">
                                <span>Customised indexes</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="nav-menu-item-228202-687a0fbeb81c6" className="mega-menu-item nav-item menu-item-depth-0 has-submenu">
                          <a href="#" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>Big Data</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-228203-687a0fbeb81f3" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a target="_blank" className="menu-link -undash sub-menu-link">
                                <span>Data center</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228204-687a0fbeb823e" className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu">
                              <a href="http://www.beqholdings.com/category/research-project" className="menu-link -undash sub-menu-link flex justify-between items-center">
                                <span>Research</span>
                                <div className="has-submenu-icon">
                                  <Plus className="icon menu-plus" size={14} />
                                </div>
                              </a>
                              <ul className="menu-depth-2 sub-sub-menu list-none m-0 p-0 pl-4">
                                <li id="nav-menu-item-228255-687a0fbeb826a" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="http://www.ccpr.vn" className="menu-link -undash sub-menu-link">
                                    <span>Cloud Computing Platform for Research (CCPR)</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-228247-687a0fbeb8292" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/research-project-vietnam-ai-development-index/" className="menu-link -undash sub-menu-link">
                                    <span>Research Project : Vietnam AI Development Index</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-228264-687a0fbeb82b7" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/research-project-asean-monetary-unit/" className="menu-link -undash sub-menu-link">
                                    <span>Research Project : ASEAN Monetary Unit</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-228287-687a0fbeb82dc" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/research-project-market-high-volatility-risk-or-opportunities/" className="menu-link -undash sub-menu-link">
                                    <span>Research Project : Market High Volatility, Risk or Opportunities</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li id="nav-menu-item-228252-687a0fbeb8302" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="#" className="menu-link -undash sub-menu-link">
                                <span>Investments</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228253-687a0fbeb8328" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="#" className="menu-link -undash sub-menu-link">
                                <span>Strategies</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228254-687a0fbeb834d" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="#" className="menu-link -undash sub-menu-link">
                                <span>Education</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228265-687a0fbeb8372" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="#" className="menu-link -undash sub-menu-link">
                                <span>Society</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228266-687a0fbeb8398" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/web-services/" className="menu-link -undash sub-menu-link">
                                <span>Web Services</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-229060-687a0fbeb83e3" className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu">
                              <a href="https://beqholdings.com/category/service/" className="menu-link -undash sub-menu-link flex justify-between items-center">
                                <span>Service</span>
                                <div className="has-submenu-icon">
                                  <Plus className="icon menu-plus" size={14} />
                                </div>
                              </a>
                              <ul className="menu-depth-2 sub-sub-menu list-none m-0 p-0 pl-4">
                                <li id="nav-menu-item-229061-687a0fbeb840e" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228972" className="menu-link -undash sub-menu-link">
                                    <span>To schedule a direct conversation and introduction between the lender and the company (borrower)</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229062-687a0fbeb8435" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228977" className="menu-link -undash sub-menu-link">
                                    <span>Legal entity name of the borrower</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229063-687a0fbeb845b" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228982" className="menu-link -undash sub-menu-link">
                                    <span>Shareholding structure</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229064-687a0fbeb8481" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228987" className="menu-link -undash sub-menu-link">
                                    <span>Overall information on Group Company and Business activities</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229065-687a0fbeb84a8" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228989" className="menu-link -undash sub-menu-link">
                                    <span>Management of the Company (the borrower)</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229066-687a0fbeb84ce" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228997" className="menu-link -undash sub-menu-link">
                                    <span>Briefing the big picture strategy for the year, together with growth opportunities and challenges</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229067-687a0fbeb84f5" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=228999" className="menu-link -undash sub-menu-link">
                                    <span>Financial reports for the last 3 years (English perferable)</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-229068-687a0fbeb851a" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/?p=229001" className="menu-link -undash sub-menu-link">
                                    <span>Borrower’s expectation for Loan application: Structure, amount, terms & conditions, timings,…</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li id="nav-menu-item-228313-687a0fbeb8577" className="mega-menu-item nav-item menu-item-depth-0 has-submenu">
                          <a href="#" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>Education</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-228344-687a0fbeb85a3" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/data-science-and-technology-institute-dtsi/" className="menu-link -undash sub-menu-link">
                                <span>Data Science and Technology Institute (DTSI)</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228361-687a0fbeb85ca" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/dsti-professional-data-analyst-certificate/" className="menu-link -undash sub-menu-link">
                                <span>DSTI Professional Data Analyst Certificate</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228368-687a0fbeb85f0" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/dsti-professional-data-scientist-certificate/" className="menu-link -undash sub-menu-link">
                                <span>DSTI Professional Data Scientist Certificate</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-228388-687a0fbeb8615" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/learning-to-conduct-and-publish-research-in-international-journals/" className="menu-link -undash sub-menu-link">
                                <span>Learning to conduct and publish research in international journals</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="nav-menu-item-225394-687a0fbeb8664" className="mega-menu-item sub-nav-item menu-item-depth-0 has-submenu">
                          <a href="https://beqholdings.com/news" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>News</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-230341-687a0fbeb8690" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/category/beq-holdings-grand-opening-2025/" className="menu-link -undash sub-menu-link">
                                <span>BeQ Holdings Grand Opening 2025</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-230183-687a0fbeb86d8" className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu">
                              <a href="https://beqholdings.com/category/beq-financial-township-competition/" className="menu-link -undash sub-menu-link flex justify-between items-center">
                                <span>BeQ Financial Township Competition</span>
                                <div className="has-submenu-icon">
                                  <Plus className="icon menu-plus" size={14} />
                                </div>
                              </a>
                              <ul className="menu-depth-2 sub-sub-menu list-none m-0 p-0 pl-4">
                                <li id="nav-menu-item-230137-687a0fbeb8703" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/beq-financial-township-competition-kicks-off-in-ho-chi-minh-city/" className="menu-link -undash sub-menu-link">
                                    <span>BeQ Financial Township Competition Kicks Off in Ho Chi Minh City</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-230177-687a0fbeb8729" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/beq-holdings-successfully-organizes-week-2-competition-searching-for-strategies-to-expand-the-international-financial-market/" className="menu-link -undash sub-menu-link">
                                    <span>BeQ Holdings successfully organizes Week 2 Financial Township Competition</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-230242-687a0fbeb8757" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/beq-holdings-concludes-week-3-competition-of-the-12-week-journey/" className="menu-link -undash sub-menu-link">
                                    <span>BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey</span>
                                  </a>
                                </li>
                                <li id="nav-menu-item-230305-687a0fbeb877f" className="mega-menu-item sub-nav-item menu-item-depth-2">
                                  <a href="https://beqholdings.com/beq-holdings-celebrates-unique-financial-strategies-in-week-4/" className="menu-link -undash sub-menu-link">
                                    <span>BeQ Holdings Celebrates Unique Financial Strategies in Week 4</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li id="nav-menu-item-225285-687a0fbeb87ce" className="mega-menu-item nav-item menu-item-depth-0 has-submenu">
                          <a href="#" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>Events</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-226324-687a0fbeb87f9" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/training/" className="menu-link -undash sub-menu-link">
                                <span>Training</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="nav-menu-item-225286-687a0fbeb8846" className="mega-menu-item nav-item menu-item-depth-0 has-submenu">
                          <a href="#" className="menu-link -undash main-menu-link item-title flex justify-between items-center">
                            <span>Media</span>
                            <div className="has-submenu-icon">
                              <Plus className="icon menu-plus" size={14} />
                            </div>
                          </a>
                          <ul className="menu-depth-1 sub-menu list-none m-0 p-0 pl-4">
                            <li id="nav-menu-item-226070-687a0fbeb8872" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/gallery/" className="menu-link -undash sub-menu-link">
                                <span>Gallery</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-226112-687a0fbeb889b" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/video/" className="menu-link -undash sub-menu-link">
                                <span>Video</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-226717-687a0fbeb88c2" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/newsletter/" className="menu-link -undash sub-menu-link">
                                <span>Newsletter</span>
                              </a>
                            </li>
                            <li id="nav-menu-item-226097-687a0fbeb88e7" className="mega-menu-item sub-nav-item menu-item-depth-1">
                              <a href="https://beqholdings.com/brochures/" className="menu-link -undash sub-menu-link">
                                <span>Brochures</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        </ul>
                    </div>
                    <div className="copyright mt-4">
                      <p>© 2016-2023 <a href="https://beqholdings.com/" target="_blank">BeQ Holdings</a>. All rights reserved</p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="branding">
              <a className="branding-title titles-typo -undash" href="https://beqholdings.com/" rel="home">
                <div className="logo-dynamic">
                  <span className="dark hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%20%200%200%200'%3E%3C/svg%3E"
                      alt="BEQ HOLDINGS"
                      loading="lazy"
                      data-lazy-src="https://beqholdings.com/wp-content/uploads/2023/12/BEQ-HOLDINGS-logo-white.png"
                    />
                    <noscript>
                      <img
                        src="https://beqholdings.com/wp-content/uploads/2023/12/BEQ-HOLDINGS-logo-white.png"
                        alt="BEQ HOLDINGS"
                      />
                    </noscript>
                  </span>
                  <span className="light hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%20%200%200%200'%3E%3C/svg%3E"
                      alt="BEQ HOLDINGS"
                      loading="lazy"
                      data-lazy-src="https://beqholdings.com/wp-content/uploads/2023/04/BEQ-HOLDINGS-logo-dark.png"
                    />
                    <noscript>
                      <img
                        src="https://beqholdings.com/wp-content/uploads/2023/04/BEQ-HOLDINGS-logo-dark.png"
                        alt="BEQ HOLDINGS"
                      />
                    </noscript>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="right-part right hidden md:block">
            <nav id="site-navigation" className="nav with-mobile-menu" data-mobile-menu-second-click-link="">
              <div id="mega-menu-wrap" className="nav-container">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <a href="https://beqholdings.com/" className="menu-link -undash main-menu-link item-title current-menu-item">
                        <span>Home</span>
                      </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>About</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/about-us/" className="menu-link -undash sub-menu-link">
                              BeQ Holdings
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/team/" className="menu-link -undash sub-menu-link">
                              Team
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/projects/" className="menu-link -undash sub-menu-link">
                              Projects
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/partners/" className="menu-link -undash sub-menu-link">
                              Partners
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/about-us/contact-us/" className="menu-link -undash sub-menu-link">
                              Contact us
                            </a>
                          </NavigationMenuLink>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Indexes Family</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-vietnam-vnx-indexes-family/" className="menu-link -undash sub-menu-link">
                              Vietnam VNX indexes Family
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-indexes-and-portfolios-free-and-ready-for-research/" className="menu-link -undash sub-menu-link">
                              Indexes and Portfolios free and ready for Research
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="http://www.beqholdings.com/beq-ifrc-vietnam-smart-beta-indexes/" className="menu-link -undash sub-menu-link">
                              Vietnam Smart Beta indexes Series
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="http://www.beqholdings.com/beq-ifrc-vietnam-provincial-indexes/" className="menu-link -undash sub-menu-link">
                              Vietnam Provincial indexes Series
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="menu-link -undash sub-menu-link">
                              Vietnam and International Women CEO Indexes
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-artificial-indexes-indexes/" className="menu-link -undash sub-menu-link">
                              Artificial Indexes indexes
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="menu-link -undash sub-menu-link">
                              Sentiment/Fear & Greed Indexes
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-volatility-indexes/" className="menu-link -undash sub-menu-link">
                              BeQ/IFRC Volatility indexes
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-crypto-currency-indexes/" className="menu-link -undash sub-menu-link">
                              Crypto Currency Indexes
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-currency-indexes/" className="menu-link -undash sub-menu-link">
                              Currency indexes
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/beq-ifrc-customised-indexes/" className="menu-link -undash sub-menu-link">
                              Customised indexes
                            </a>
                          </NavigationMenuLink>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Big Data</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a target="_blank" className="menu-link -undash sub-menu-link">
                              Data center
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Research</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              
                              <ul className="grid md:grid-cols-1">
                                <NavigationMenuLink asChild>
                                  <a href="http://www.ccpr.vn" className="menu-link -undash sub-menu-link">
                                    Cloud Computing Platform for Research (CCPR)
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/research-project-vietnam-ai-development-index/" className="menu-link -undash sub-menu-link">
                                    Research Project : Vietnam AI Development Index
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/research-project-asean-monetary-unit/" className="menu-link -undash sub-menu-link">
                                    Research Project : ASEAN Monetary Unit
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/research-project-market-high-volatility-risk-or-opportunities/" className="menu-link -undash sub-menu-link">
                                    Research Project : Market High Volatility, Risk or Opportunities
                                  </a>
                                </NavigationMenuLink>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuLink asChild>
                            <a href="#" className="menu-link -undash sub-menu-link">
                              Investments
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="menu-link -undash sub-menu-link">
                              Strategies
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="menu-link -undash sub-menu-link">
                              Education
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="menu-link -undash sub-menu-link">
                              Society
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/web-services/" className="menu-link -undash sub-menu-link">
                              Web Services
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              
                              <ul className="grid md:grid-cols-1">
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228972" className="menu-link -undash sub-menu-link">
                                    To schedule a direct conversation and introduction between the lender and the company (borrower)
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228977" className="menu-link -undash sub-menu-link">
                                    Legal entity name of the borrower
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228982" className="menu-link -undash sub-menu-link">
                                    Shareholding structure
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228987" className="menu-link -undash sub-menu-link">
                                    Overall information on Group Company and Business activities
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228989" className="menu-link -undash sub-menu-link">
                                    Management of the Company (the borrower)
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228997" className="menu-link -undash sub-menu-link">
                                    Briefing the big picture strategy for the year, together with growth opportunities and challenges
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=228999" className="menu-link -undash sub-menu-link">
                                    Financial reports for the last 3 years (English perferable)
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/?p=229001" className="menu-link -undash sub-menu-link">
                                    Borrower’s expectation for Loan application: Structure, amount, terms & conditions, timings,…
                                  </a>
                                </NavigationMenuLink>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Education</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/data-science-and-technology-institute-dtsi/" className="menu-link -undash sub-menu-link">
                              Data Science and Technology Institute (DTSI)
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/dsti-professional-data-analyst-certificate/" className="menu-link -undash sub-menu-link">
                              DSTI Professional Data Analyst Certificate
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/dsti-professional-data-scientist-certificate/" className="menu-link -undash sub-menu-link">
                              DSTI Professional Data Scientist Certificate
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/learning-to-conduct-and-publish-research-in-international-journals/" className="menu-link -undash sub-menu-link">
                              Learning to conduct and publish research in international journals
                            </a>
                          </NavigationMenuLink>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>News</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/category/beq-holdings-grand-opening-2025/" className="menu-link -undash sub-menu-link">
                              BeQ Holdings Grand Opening 2025
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>BeQ Financial Township Competition</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              
                              <ul className="grid md:grid-cols-1">
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/beq-financial-township-competition-kicks-off-in-ho-chi-minh-city/" className="menu-link -undash sub-menu-link">
                                    BeQ Financial Township Competition Kicks Off in Ho Chi Minh City
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/beq-holdings-successfully-organizes-week-2-competition-searching-for-strategies-to-expand-the-international-financial-market/" className="menu-link -undash sub-menu-link">
                                    BeQ Holdings successfully organizes Week 2 Financial Township Competition
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/beq-holdings-concludes-week-3-competition-of-the-12-week-journey/" className="menu-link -undash sub-menu-link">
                                    BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey
                                  </a>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                  <a href="https://beqholdings.com/beq-holdings-celebrates-unique-financial-strategies-in-week-4/" className="menu-link -undash sub-menu-link">
                                    BeQ Holdings Celebrates Unique Financial Strategies in Week 4
                                  </a>
                                </NavigationMenuLink>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/training/" className="menu-link -undash sub-menu-link">
                              Training
                            </a>
                          </NavigationMenuLink>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        
                        <ul className="grid md:grid-cols-1">
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/gallery/" className="menu-link -undash sub-menu-link">
                              Gallery
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/video/" className="menu-link -undash sub-menu-link">
                              Video
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/newsletter/" className="menu-link -undash sub-menu-link">
                              Newsletter
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="https://beqholdings.com/brochures/" className="menu-link -undash sub-menu-link">
                              Brochures
                            </a>
                          </NavigationMenuLink>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>
            <ul className="menu-optional -unlist list-none m-0 p-0 flex">
              <li className="hidden lg:block">
                {/* Empty as per HTML */}
              </li>
              <li>
                {/* Empty as per HTML */}
              </li>
            </ul>
            <div className="close-menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;