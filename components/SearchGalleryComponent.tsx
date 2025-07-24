"use client";

import { Button } from "@/components/ui/button";
import { X, MagnifyingGlass } from "@phosphor-icons/react";

const SearchGalleryComponent = () => {
  return (
    <>
      {/* Search Popup */}
      <div className="clb-popup search-popup fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden" id="searchPopup">
        <div className="relative w-full max-w-md rounded-lg shadow-lg">
          <div className="close-bar flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="icon-button-light text-muted-foreground hover:text-foreground"
              aria-label="close"
              onClick={() => document.getElementById("searchPopup")?.classList.add("hidden")}
            >
              <X size={14} />
            </Button>
          </div>
          <div className="holder">
            <form role="search" className="search search-form" action="https://beqholdings.com/" method="GET">
              <label>
                <span className="screen-reader-text">Search for</span>
                <input
                  autoComplete="off"
                  type="text"
                  className="search-field w-full p-2 border rounded"
                  name="s"
                  placeholder="Search..."
                  value=""
                />
              </label>
              <Button
                type="submit"
                variant="link"
                className="button -text search search-submit mt-2 text-foreground hover:text-primary flex items-center"
                aria-label="search"
              >
                <MagnifyingGlass size={18} className="mr-1" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content with Video and Gallery */}
      <div id="content" className="site-content">
        <div className="header-cap header-2 h-16"></div>
        <div className="page-container-full-w">
          <div id="primary" className="content-area">
            <div className="page-content">
              <main id="main" className="site-main">
                <article id="post-766" className="post-766 page type-page status-publish hentry">
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="elementor elementor-766">
                        {/* Video Section */}
                        <div className="elementor-element e-flex e-con-boxed e-con e-parent">
                          <div className="e-con-inner">
                            <div className="elementor-widget-video">
                              <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                                <video
                                  className="elementor-video w-full"
                                  src="https://beqholdings.com/wp-content/uploads/2023/11/VIDEO_DOWNLOAD_1699361669633_1699503230588.mp4"
                                  autoPlay
                                  controls
                                  muted
                                  playsInline
                                  controlsList="nodownload"
                                ></video>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Gallery Section */}
                        <section className="elementor-section elementor-top-section elementor-element elementor-section-boxed mt-8">
                          <div className="elementor-container elementor-column-gap-custom">
                            <div className="elementor-column elementor-col-100">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-widget-spacer h-8"></div>
                                <div className="elementor-widget-ohio_gallery">
                                  <div className="ohio-widget clb-gallery -center" data-gallery="ohio-gallery-687a100db8b42">
                                    <div className="vc_row ohio-masonry grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-lazy-container="gallery">
                                      {[
                                        {
                                          id: "0",
                                          imageSrc: "https://beqholdings.com/wp-content/uploads/2023/11/processed-d4d7b2aa-0ed5-41ef-a1cf-b359e5c13f28_stFFQvoA.jpeg",
                                          alt: "",
                                        },
                                        {
                                          id: "1",
                                          imageSrc: "https://beqholdings.com/wp-content/uploads/2023/11/processed-ac6f4fe7-a528-4b40-bf21-cd97f28d14a7_ZdvgBewC.jpeg",
                                          alt: "",
                                        },
                                        {
                                          id: "2",
                                          imageSrc: "https://beqholdings.com/wp-content/uploads/2023/11/processed-cd4d2f80-589c-4b6e-b91d-ec7459e03f3d_JzyqTJC0.jpeg",
                                          alt: "",
                                        },
                                      ].map((item) => (
                                        <div
                                          key={item.id}
                                          className="masonry-block gallery-item card cursor-as-pointer -img-overlay -metro"
                                          data-gallery-item={item.id}
                                          data-lazy-item=""
                                          data-lazy-scope="gallery"
                                        >
                                          <div className="image-holder cursor-plus relative" data-cursor-class="cursor-link" data-tilt="true" data-tilt-perspective="6000">
                                            <img
                                              decoding="async"
                                              className="gimg hidden-image w-full h-64 object-cover"
                                              src={item.imageSrc}
                                              alt={item.alt}
                                              loading="lazy"
                                            />
                                          </div>
                                          <div className="card-details p-4">
                                            <div className="heading">
                                              <h5 className="title text-lg font-semibold"></h5>
                                              <p className="caption -unspace -small-t text-sm text-muted-foreground"></p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* Spacer */}
                        <div className="elementor-widget-spacer h-8"></div>
                      </div>
                    </section>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <div className="clb-popup clb-gallery-lightbox fixed inset-0 bg-black bg-opacity-90 z-50 hidden" id="ohio-gallery-687a100db8b42">
        <div className="close-bar flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            className="icon-button -light text-white hover:text-gray-300"
            aria-label="close"
            onClick={() => document.getElementById("ohio-gallery-687a100db8b42")?.classList.add("hidden")}
          >
            <X size={14} />
          </Button>
        </div>
        <div className="clb-popup-holder flex items-center justify-center h-full">
          {/* Lightbox content can be dynamically populated with images */}
        </div>
      </div>
    </>
  );
};

export default SearchGalleryComponent;