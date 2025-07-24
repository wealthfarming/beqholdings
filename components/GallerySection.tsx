"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface GallerySectionProps {
  subtitle: string;
  title: string;
  images: { src: string; alt: string }[];
  gridCols: string;
}

const GallerySection = ({ subtitle, title, images, gridCols }: GallerySectionProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="py-8">
      <div className="text-center mb-8">
        {subtitle && (
          <div className="subtitle text-lg">{subtitle}</div>
        )}
        <h3 className="title text-4xl font-bold text-[#BF9B30]">{title}</h3>
      </div>

      <div className={`grid ${gridCols} gap-6`}>
        {images.map((image, index) => (
        <div>
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
          {image.alt && (
                <div className="p-4">
                  <h5 className="text-sm font-medium">{image.alt}</h5>
                </div>
              )}
          </div>
        ))}
      </div>

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

export default GallerySection;