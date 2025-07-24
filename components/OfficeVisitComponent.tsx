"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const OfficeVisitComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181456.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181435.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181631.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181876.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181550.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181890.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/processed-bd844643-1c5a-4e1e-a26e-d561e0e2d871_zdGKsBfs.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503212930.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181538.jpeg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/11/processed-8f8cbbf7-bde3-4be7-9129-b4a44fc54974_1JCXS8Sk.jpeg", alt: "" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="subtitle text-sm text-muted-foreground mb-2">23-24-25 Oct, 2023</div>
        <h3 className="title text-4xl font-bold text-[#BF9B30]">Welcome to our office Mr. Olivier Jacquot</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 m-0 rounded-none"
            onClick={() => openLightbox(index)}
          >
            <CardContent className="p-0">
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    </section>
  );
};

export default OfficeVisitComponent;