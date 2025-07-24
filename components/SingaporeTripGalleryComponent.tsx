"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const SingaporeTripGalleryComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "https://beqholdings.com/wp-content/uploads/2023/05/e2001233488a97d4ce9b-1.jpg", alt: "e2001233488a97d4ce9b" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/05/a165819dd0240f7a5635-1.jpg", alt: "a165819dd0240f7a5635" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/05/abfa9a0fcbb614e84da7-1.jpg", alt: "abfa9a0fcbb614e84da7" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/05/b10ebbfbea42351c6c53-1.jpg", alt: "b10ebbfbea42351c6c53" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736193517_fe6655656ea0b20ca1c5a82894633e57.jpg", alt: "Meeting of BeQ Holdings (Singapore) with Mrs. Iris Fang, Nominee Board Director at International Finance Corporation (IFC) in Singapore" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736182046_f20ca5d2ba804330a20b022eb03d6253.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197595_3c8c8383d03eb55376b1ad40ccf495e8.jpg", alt: "Meeting of BeQ Holdings (Singapore) with Vietnam Trade Counselor in Singapore" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736176016_dbe9565ef2abca8b96efbd34b12529b7.jpg", alt: "" },
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
        <div className="text-lg text-gray-600 mb-2">Sunday 7 May, 2023</div>
        <h3 className="text-4xl font-bold text-[#BF9B30]">
          BeQ Holdings Business Trip in Singapore
        </h3>
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

export default SingaporeTripGalleryComponent;