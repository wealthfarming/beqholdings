"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const NewsletterComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "https://beqholdings.com/wp-content/uploads/2021/12/jDFdP23o-oh__img8.jpeg", alt: "oh__img8" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8">
        <div className="text-center mb-8 mt-5">
          <h2 className="title text-5xl font-bold">Newsletter</h2>
        </div>
      </section>

      <div className="h-8"></div> {/* Spacer */}

      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="title text-5xl font-bold text-[#BF9B30]">Coming soon</h2>
        </div>
      </section>

      <div className="h-8"></div> {/* Spacer */}

      <div className="grid grid-cols-1 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 m-0 rounded-none"
            onClick={() => openLightbox(index)}
          >
            <CardContent className="p-0">
              <div className="relative h-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="100vw"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Popup */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="close-bar absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-300"
              aria-label="close"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>
          </div>
          <div className="clb-popup-holder relative w-full max-w-4xl p-4">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] w-auto mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterComponent;