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

const TrainingProgramComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogImages, setDialogImages] = useState<ImageItem[]>([])
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0)
  const [dialogClickedLayoutId, setDialogClickedLayoutId] = useState<string | null>(null)

  const images = [
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736208462_5092fdc3c933ef852feea325c0631a45.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736208717_999e908e21caa06f5080b7938ac5c7c4.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736193516_46269b6777cdfdca096d44eca80f8d6c.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4729000520479_47985bb5f1c59f5db4caeaf4ab730a28-scaled.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4729001474111_8bb57c3d692f4e02b54107a37d52fcca-scaled.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197806_29db02fc4e464d00607223e567d7a8f1.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736199240_23c7979d854f2c4d07d19545703c7dfc.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736197016_a86cb8b53026b415dffc33aefffee8ed.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736217133_7a9ef549af47a40e1f5c1678967d3e0f.jpg", alt: "" },
    { url: "https://beqholdings.com/wp-content/uploads/2023/09/z4704736214699_a587e468cb61e605dbe5ac3d39bab041.jpg", alt: "" },
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
        <div className="subtitle text-sm text-muted-foreground mb-2">13-14-15 July, 2023</div>
        <h3 className="title text-4xl font-bold text-[#BF9B30]">
          Training program: "Unlocking Business Value through capital mechanisms" organized by BeQ Holdings
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const currentLayoutId = `training-program-image-${index}`
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

export default TrainingProgramComponent;