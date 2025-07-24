"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const TrainingProgramComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736208462_5092fdc3c933ef852feea325c0631a45.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736208717_999e908e21caa06f5080b7938ac5c7c4.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736193516_46269b6777cdfdca096d44eca80f8d6c.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4729000520479_47985bb5f1c59f5db4caeaf4ab730a28-scaled.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4729001474111_8bb57c3d692f4e02b54107a37d52fcca-scaled.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197806_29db02fc4e464d00607223e567d7a8f1.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736199240_23c7979d854f2c4d07d19545703c7dfc.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197016_a86cb8b53026b415dffc33aefffee8ed.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736217133_7a9ef549af47a40e1f5c1678967d3e0f.jpg", alt: "" },
    { src: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736214699_a587e468cb61e605dbe5ac3d39bab041.jpg", alt: "" },
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
        <div className="subtitle text-sm text-muted-foreground mb-2">13-14-15 July, 2023</div>
        <h3 className="title text-4xl font-bold text-[#BF9B30]">
          Training program: "Unlocking Business Value through capital mechanisms" organized by BeQ Holdings
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

export default TrainingProgramComponent;