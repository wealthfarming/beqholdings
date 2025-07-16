"use client"
import { useState } from "react"
import eventsData from "@/data/events.json"
import Image from "next/image"
import ImageDialog from "@/components/images-dialog"
import { motion } from "framer-motion"

interface ImageItem {
  alt: string
  url: string
}

interface Event {
  timestamp: string
  title: string
  images: ImageItem[]
}

export default function EventsPage() {
  const events: Event[] = eventsData
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogImages, setDialogImages] = useState<ImageItem[]>([])
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0)
  const [dialogClickedLayoutId, setDialogClickedLayoutId] = useState<string | null>(null) // New state for layoutId

  const openDialog = (images: ImageItem[], initialIndex: number, clickedLayoutId: string) => {
    setDialogImages(images)
    setDialogInitialIndex(initialIndex)
    setDialogClickedLayoutId(clickedLayoutId) // Store the specific layoutId of the clicked image
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setDialogImages([])
    setDialogInitialIndex(0)
    setDialogClickedLayoutId(null) // Clear layoutId on close
  }

  return (
    <div className="bg-[#111111]">
      <div className="flex flex-col gap-15 justify-center px-10 lg:px-16 py-12">
        <h2 className="text-center font-bold text-[38px] lg:text-[52px] text-white mb-12">Events</h2>
        <div className="flex flex-col gap-10">
          {events.map((event, eventIndex) => (
            <div key={eventIndex} className="flex flex-col items-center gap-2 mb-20">
              <div className="font-medium text-center text-sm lg:text-[15px] text-[#FFFFFFBF]">{event.timestamp}</div>
              <div className="text-[32px] lg:text-4xl text-[#BF9B30] font-bold text-center">{event.title}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 w-full">
                {event.images.map((image, index) => {
                  const currentLayoutId = `event-image-${eventIndex}-${index}`
                  return (
                    <motion.div 
                      key={index}
                      className="relative w-full aspect-[16/9] rounded-sm cursor-pointer"
                      onClick={() => openDialog(event.images, index, currentLayoutId)}
                    >
                      <motion.div layoutId={currentLayoutId} className="relative w-full h-full">
                        <Image
                          className="rounded-sm"
                          src={image.url || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image Dialog Component */}
      <ImageDialog
        images={dialogImages}
        initialIndex={dialogInitialIndex}
        isOpen={isDialogOpen}
        onClose={closeDialog}
        clickedLayoutId={dialogClickedLayoutId} // Pass the specific clicked layoutId
      />
    </div>
  )
}

