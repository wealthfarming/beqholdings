"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react"

// Define the interface for an image item
interface ImageItem {
  alt: string
  url: string
}

interface ImageDialogProps {
  images: ImageItem[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function ImageDialog({ images, initialIndex, isOpen, onClose }: ImageDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev()
      } else if (event.key === "ArrowRight") {
        handleNext()
      } else if (event.key === "Escape") {
        onClose()
      }
    },
    [handleNext, handlePrev, onClose],
  )

  // Update current index when initialIndex changes (e.g., new image clicked)
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden" // Prevent scrolling when dialog is open
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "" // Restore scrolling
      window.removeEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/98">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 left-12 text-white transition-colors duration-200 z-50"
        aria-label="Close image dialog"
      >
        <X size={24} weight="bold" />
      </button>

      {/* Main Image */}
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center p-4">
        <Image
          src={currentImage.url}
          alt={currentImage.alt}
          fill
          style={{ objectFit: "contain" }} // Ensure image fits within bounds
          className="rounded-lg"
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 right-4 flex gap-4 z-50">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-none hover:bg-white/10 text-white transition-colors duration-200"
          aria-label="Previous image"
        >
          <ArrowLeft size={24} weight="bold" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-none hover:bg-white/10 text-white transition-colors duration-200"
          aria-label="Next image"
        >
          <ArrowRight size={24} weight="bold" />
        </button>
      </div>
    </div>
  )
}
