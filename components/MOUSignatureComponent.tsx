"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageDialog from "@/components/images-dialog";

interface ImageItem {
  alt: string
  url: string
}

const MOUSignatureComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogImages, setDialogImages] = useState<ImageItem[]>([])
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0)
  const [dialogClickedLayoutId, setDialogClickedLayoutId] = useState<string | null>(null)

  const images = [
    { url: "https://beqholdings.com/wp-content/uploads/2023/04/OJ_001_1600.jpg", alt: "Mrs. Ta Thi My Phuong, CEO of BeQ Holings and Mr. Olivier JACQUOT" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/04/OJ_002_1600.jpg", alt: "Mr. MAI Huu Minh, Founder BeQ Holdings and Mr. Olivier JACQUOT" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/04/OJ_003_1600.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/04/imgpsh_fullsize_anim-1-1.png", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/04/imgpsh_fullsize_anim-2.png", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/04/imgpsh_fullsize_anim-3.png", alt: "" },
  ];

  const openDialog = (images: ImageItem[], initialIndex: number, clickedLayoutId: string) => {
    setDialogImages(images)
    setDialogInitialIndex(initialIndex)
    setDialogClickedLayoutId(clickedLayoutId)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setDialogImages([])
    setDialogInitialIndex(0)
    setDialogClickedLayoutId(null)
  }

  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <div className="subtitle text-lg">Wednesday 12 April, 2023</div>
        <h3 className="title text-4xl font-bold text-[#BF9B30]">
          MOU signature All Sports Business with BeQ Holdings business
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const currentLayoutId = `mou-signature-image-${index}`
          return (
            <div key={index}>
              <motion.div 
                className="relative w-full aspect-[16/9] rounded-sm cursor-pointer"
                onClick={() => openDialog(images, index, currentLayoutId)}
              >
                <motion.div layoutId={currentLayoutId} className="relative w-full h-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 m-0 rounded-none h-full">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-64">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105 rounded-sm"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              {image.alt && (
                <div className="p-4">
                  <h5 className="text-sm font-medium">{image.alt}</h5>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Image Dialog Component */}
      <ImageDialog
        images={dialogImages}
        initialIndex={dialogInitialIndex}
        isOpen={isDialogOpen}
        onClose={closeDialog}
        clickedLayoutId={dialogClickedLayoutId}
      />
    </section>
  );
};

export default MOUSignatureComponent; 