'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Gallery() {
    useEffect(() => {
        document.querySelectorAll('.image-container').forEach(container => {
            const img = container.querySelector('img');
            if (img) {
                const handleMouseMove: EventListener = (e: Event) => {
                    const mouseEvent = e as MouseEvent;
                    const rect = container.getBoundingClientRect();
                    const x = mouseEvent.clientX - rect.left;
                    const y = mouseEvent.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    let rotateX = (y - centerY) / 45; // Giảm độ nhạy để giới hạn nghiêng nhẹ
                    let rotateY = (x - centerX) / -45; // Giảm độ nhạy để giới hạn nghiêng nhẹ

                    rotateX = Math.max(-50, Math.min(50, rotateX)); // Giới hạn từ -1 đến 1 độ
                    rotateY = Math.max(-50, Math.min(50, rotateY)); // Giới hạn từ -1 đến 1 độ

                    img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                };

                const handleMouseLeave: EventListener = (e: Event) => {
                    if (img) {
                        img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                    }
                };

                container.addEventListener('mousemove', handleMouseMove);
                container.addEventListener('mouseleave', handleMouseLeave);

                // Cleanup event listeners
                return () => {
                    container.removeEventListener('mousemove', handleMouseMove);
                    container.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        });
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="w-[1300px] h-[731px]">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/dyavs1cdn/video/upload/v1752830633/VIDEO_DOWNLOAD_1699361669633_1699503230588_spukt4.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex w-full p-5 space-x-5">
                <div className="relative overflow-hidden p-5 image-container">
                    <Image width={595} height={595} alt="" src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1753237992/processed-d4d7b2aa-0ed5-41ef-a1cf-b359e5c13f28_stFFQvoA_wpg6dt.webp" className="transition-transform duration-500 ease-in-out transform" />
                </div>
                <div className="relative overflow-hidden p-5 image-container">
                    <Image width={595} height={595} alt="" src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1753237992/processed-d4d7b2aa-0ed5-41ef-a1cf-b359e5c13f28_stFFQvoA_wpg6dt.webp" className="transition-transform duration-500 ease-in-out transform" />
                </div>
                <div className="relative overflow-hidden p-5 image-container">
                    <Image width={595} height={595} alt="" src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1753237992/processed-d4d7b2aa-0ed5-41ef-a1cf-b359e5c13f28_stFFQvoA_wpg6dt.webp" className="transition-transform duration-500 ease-in-out transform" />
                </div>
            </div>
        </div>
    );
}