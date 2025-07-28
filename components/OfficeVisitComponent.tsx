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

const OfficeVisitComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogImages, setDialogImages] = useState<ImageItem[]>([])
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0)
  const [dialogClickedLayoutId, setDialogClickedLayoutId] = useState<string | null>(null)

  const images = [
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181456.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181435.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181631.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181876.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181550.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181890.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/processed-bd844643-1c5a-4e1e-a26e-d561e0e2d871_zdGKsBfs.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503212930.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/1699503181538.jpeg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/11/processed-8f8cbbf7-bde3-4be7-9129-b4a44fc54974_1JCXS8Sk.jpeg", alt: "" },
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
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="subtitle text-sm text-muted-foreground mb-2">23-24-25 Oct, 2023</div>
        <h3 className="title text-4xl font-bold text-[#BF9B30]">Welcome to our office Mr. Olivier Jacquot</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const currentLayoutId = `office-visit-image-${index}`
          return (
            <motion.div 
              key={index}
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

export default OfficeVisitComponent;