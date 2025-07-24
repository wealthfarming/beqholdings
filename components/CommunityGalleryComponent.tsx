"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const CommunityGalleryComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736206768_0506b655a7a7050d3d29569cf62c7421.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736198479_443d0d3ae0e081c646773a49782cf1a1.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736198475_a4cc09f77e013f4da88042437ab0da60.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197801_30b77b449b88b669a198c6d915bf84bb.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736206769_37ddb89c6ed40f75174120d85cddef90-scaled.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736208515_1c3eb79751ba4133ef428105d195c6fc.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736201348_0eb186ec73398c457c1d065ffbd77008.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736206840_26f726dc1d1536fc78d7fba66847e70a.jpg", alt: "" },
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
        <h3 className="title text-4xl font-bold text-[#BF9B30]">
          Periodically offline community of Vietnam Kindness Business owners
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

export default CommunityGalleryComponent;