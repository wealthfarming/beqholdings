"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import { motion, AnimatePresence, type Variants } from "framer-motion" // Import 'type Variants'

interface ImageItem {
  alt: string
  url: string
}

interface ImageDialogProps {
  images: ImageItem[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
  clickedLayoutId: string | null
}

export default function ImageDialog({ images, initialIndex, isOpen, onClose, clickedLayoutId }: ImageDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0) // 0: initial, 1: next, -1: prev
  const [isInitialLayoutAnimationDone, setIsInitialLayoutAnimationDone] = useState(false)

  // Update current index when initialIndex changes (e.g., new image clicked)
  useEffect(() => {
    setCurrentIndex(initialIndex)
    setDirection(0) // Reset direction when a new image is clicked to open the dialog
    setIsInitialLayoutAnimationDone(false) // Reset for new initial animation
  }, [initialIndex])

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setIsInitialLayoutAnimationDone(true) // Disable layout animation after first interaction
  }, [images.length])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setIsInitialLayoutAnimationDone(true) // Disable layout animation after first interaction
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
  const prevImage = images[(currentIndex - 1 + images.length) % images.length]
  const nextImage = images[(currentIndex + 1) % images.length]

  // Variants for the main image transition (slide and scale)
  const mainImageVariants: Variants = {
    // Explicitly type as Variants
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%", // Enter from right if next, from left if prev
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 150, damping: 20 }, // Added 'as const'
        opacity: { duration: 0.5 }, // Slower fade
        scale: { duration: 0.5 }, // Slower scale
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%", // Exit to right if prev, to left if next
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring" as const, stiffness: 150, damping: 20 }, // Added 'as const'
        opacity: { duration: 0.5 }, // Slower fade
        scale: { duration: 0.5 }, // Slower scale
      },
    }),
  }

  // Variants for the side images (remainders)
  const sideImageVariants: Variants = {
    // Explicitly type as Variants
    hidden: { opacity: 0, scale: 0.7 }, // Hidden on mobile or when not active
    visible: { opacity: 0.7, scale: 0.7, transition: { duration: 0.5 } }, // Visible on large screens, slower transition
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/98"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Slower dialog fade
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 left-12 text-white transition-colors duration-200 z-50"
        aria-label="Close image dialog"
      >
        <X size={24} weight="bold" />
      </button>

      {/* Main Image Display Area - Contains all three images */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Previous Image Remainder (Conditional Rendering) */}
        {images.length > 1 && currentIndex > 0 && (
          <motion.div
            key={`prev-remainder-${currentIndex}`}
            className="absolute -left-70 h-full overflow-hidden hidden lg:block" // Hidden on mobile, block on lg
            style={{ width: "30vw" }} // Visible portion width (20% of viewport width)
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sideImageVariants}
          >
            <motion.div
              className="relative h-full"
              style={{ width: "100%", left: "0" }} // Reverted to previous smaller size and offset
            >
              <Image
                src={prevImage.url || "/placeholder.svg"}
                alt={prevImage.alt}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Center Image */}
        <div className="relative w-[90vw] lg:w-[60vw] h-full flex items-center justify-center p-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute w-full h-full flex items-center justify-center"
              custom={direction}
              variants={mainImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              // Apply layoutId only for the initial image when the dialog opens
              layout={!isInitialLayoutAnimationDone && clickedLayoutId ? true : undefined}
              layoutId={!isInitialLayoutAnimationDone && clickedLayoutId ? clickedLayoutId : undefined}
              onAnimationComplete={() => {
                if (!isInitialLayoutAnimationDone && clickedLayoutId) {
                  setIsInitialLayoutAnimationDone(true) // Mark initial animation as complete
                }
              }}
            >
              <Image
                src={currentImage.url || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Image Remainder (Conditional Rendering) */}
        {images.length > 1 && currentIndex < images.length - 1 && (
          <motion.div
            key={`next-remainder-${currentIndex}`}
            className="absolute -right-70 h-full overflow-hidden hidden lg:block" // Hidden on mobile, block on lg
            style={{ width: "30vw" }} // Visible portion width (20% of viewport width)
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sideImageVariants}
          >
            <motion.div
              className="relative h-full"
              style={{ width: "100%", right: "0" }} // Reverted to previous smaller size and offset
            >
              <Image
                src={nextImage.url || "/placeholder.svg"}
                alt={nextImage.alt}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 right-4 flex gap-4 z-50">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-none hover:bg-white/10 text-white transition-colors duration-200"
          aria-label="Previous image"
          disabled={currentIndex === 0} // Disable if at first image
        >
          <ArrowLeft size={24} weight="bold" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-none hover:bg-white/10 text-white transition-colors duration-200"
          aria-label="Next image"
          disabled={currentIndex === images.length - 1} // Disable if at last image
        >
          <ArrowRight size={24} weight="bold" />
        </button>
      </div>
    </motion.div>
  )
}



