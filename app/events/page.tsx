"use client" // Ensure this is a client component

import { useState } from "react"
import eventsData from "@/data/events.json"
import Image from "next/image"
import ImageDialog from "@/components/images-dialog"

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

  const openDialog = (images: ImageItem[], initialIndex: number) => {
    setDialogImages(images)
    setDialogInitialIndex(initialIndex)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setDialogImages([])
    setDialogInitialIndex(0)
  }

  return (
    <div className="bg-[#111111]">
      <div className="flex flex-col gap-15 justify-center px-4 md:px-8 lg:px-16">
        <h2 className="text-center font-bold text-[52px]">Events</h2>
        <div className="flex flex-col gap-10">
          {events.map((event, eventIndex) => (
            <div key={eventIndex} className="flex flex-col items-center gap-2 mb-20">
              <div className="font-medium text-[15px] text-[#FFFFFFBF]">{event.timestamp}</div>
              <div className="text-4xl text-[#BF9B30] font-bold text-center">{event.title}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 w-full">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-[690px] h-[388px] rounded-sm cursor-pointer"
                    onClick={() => openDialog(event.images, index)}
                  >
                    <Image
                      className="rounded-sm transition-transform duration-300 ease-in-out group-hover:scale-105"
                      src={image.url}
                      alt={image.alt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
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
      />
    </div>
  )
}
