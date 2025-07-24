'use client'
import Image from "next/image";
import { useEffect } from "react";
import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchGalleryComponent from "@/components/SearchGalleryComponent"
import OfficeVisitComponent from "@/components/OfficeVisitComponent"
import CommunityGalleryComponent from "@/components/CommunityGalleryComponent"
import TrainingProgramComponent from "@/components/TrainingProgramComponent"
import WhiteGroupGalleryComponent from "@/components/WhiteGroupGalleryComponent"
import SingaporeTripGalleryComponent from "@/components/SingaporeTripGalleryComponent"
import EventGalleries from "@/components/EventGalleries"

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
            <div className="mt-5 flex justify-center">
                <Header />
            </div>
            <SearchGalleryComponent />
            <OfficeVisitComponent />
            <CommunityGalleryComponent />
            <TrainingProgramComponent />
            <WhiteGroupGalleryComponent />
            <SingaporeTripGalleryComponent />
            <EventGalleries />
            <Footer />
        </div>
    );
}