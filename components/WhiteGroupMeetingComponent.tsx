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

const WhiteGroupMeetingComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogImages, setDialogImages] = useState<ImageItem[]>([])
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0)
  const [dialogClickedLayoutId, setDialogClickedLayoutId] = useState<string | null>(null)

  const images = [
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/4be767be3d07e259bb16.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/7d1e54420efbd1a588ea.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/1141e275b8cc67923edd.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/220666ef3756e808b147.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/3b4ee7acb615694b3004.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/05/c7a79974c8cd17934edc.jpg", alt: "" },
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
        <h3 className="title text-4xl font-bold text-[#BF9B30]">
          Meeting at the residence of the Chairman & CEO of White Group
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const currentLayoutId = `white-group-meeting-image-${index}`
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

export default WhiteGroupMeetingComponent; 