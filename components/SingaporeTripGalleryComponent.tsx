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

const SingaporeTripGalleryComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogImages, setDialogImages] = useState<ImageItem[]>([])
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0)
  const [dialogClickedLayoutId, setDialogClickedLayoutId] = useState<string | null>(null)

  const images = [
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/e2001233488a97d4ce9b-1.jpg", alt: "e2001233488a97d4ce9b" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/a165819dd0240f7a5635-1.jpg", alt: "a165819dd0240f7a5635" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/abfa9a0fcbb614e84da7-1.jpg", alt: "abfa9a0fcbb614e84da7" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/b10ebbfbea42351c6c53-1.jpg", alt: "b10ebbfbea42351c6c53" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736193517_fe6655656ea0b20ca1c5a82894633e57.jpg", alt: "Meeting of BeQ Holdings (Singapore) with Mrs. Iris Fang, Nominee Board Director at International Finance Corporation (IFC) in Singapore" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736182046_f20ca5d2ba804330a20b022eb03d6253.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197595_3c8c8383d03eb55376b1ad40ccf495e8.jpg", alt: "Meeting of BeQ Holdings (Singapore) with Vietnam Trade Counselor in Singapore" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736176016_dbe9565ef2abca8b96efbd34b12529b7.jpg", alt: "" },
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
        <div className="text-lg mb-2">Sunday 7 May, 2023</div>
        <h3 className="text-4xl font-bold text-[#BF9B30]">
          BeQ Holdings Business Trip in Singapore
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const currentLayoutId = `singapore-trip-image-${index}`
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

export default SingaporeTripGalleryComponent;