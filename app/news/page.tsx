'use client';
import PageHeader from "@/components/header";
import Image from "next/image";
import dataVN from '@/data/news/vietnamese.json';
import dataEN from '@/data/news/english.json';
import PostCard, { PostCardProps } from "@/components/newsItems";
import React, { useState } from "react";
import postVN from "@/data/news/vietnamese.json";
import postEN from "@/data/news/english.json";
import LanguageChange from "@/components/language-button";


const NewsPage = () => {
    const savedLanguage = typeof window !== "undefined" && localStorage.getItem("language")
        ? localStorage.getItem("language")
        : "en";

    const [Postdata, setPostData] = useState<PostCardProps[]>([]);
    React.useEffect(() => {
        const updateData = async () => {
            try {
                if (savedLanguage === "vi") {
                    const data: PostCardProps[] = postVN.map((item) => ({
                        id: item.id,
                        title: item.title,
                        category: Array.isArray(item.category)
                            ? item.category.map(cat => ({
                                id: cat.id,
                                title: cat.title,
                            }))
                            : [{
                                id: item.category.id,
                                title: item.category.title,
                            }],
                        publicDate: new Date(item.createdAt).toLocaleDateString(),
                        timeRead: (item.description.root.children.length) + " min read",
                        image: item.cover_image,
                    }));
                    setPostData(data);
                }
                else {
                    const data: PostCardProps[] = postEN.map((item) => ({
                        id: item.id,
                        title: item.title,
                        category: Array.isArray(item.category)
                            ? item.category.map(cat => ({
                                id: cat.id,
                                title: cat.title,
                            }))
                            : [{
                                id: item.category.id,
                                title: item.category.title,
                            }],
                        publicDate: new Date(item.createdAt).toLocaleDateString(),
                        timeRead: (item.description.root.children.length) + " min read",
                        image: item.cover_image,
                    }));
                    setPostData(data);
                }
            }
            catch (error) {
                console.error("Error fetching news data:", error);
            }
        };
        updateData();
    }, [savedLanguage]);
    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <div className="w-full flex relative h-[25vh] md:h-[40vh]">
                <div className="w-full flex flex-col items-center justify-center absolute top-0 z-20">
                    <PageHeader />
                </div>
                <div className="w-full h-[25vh] md:h-[40vh] absolute top-0 left-0 z-10">
                    <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752805060/oh__img93_yyltcz.jpg" alt="News Banner" width={1920} height={500} className="object-cover w-full h-full" />
                </div>
                <h1 className="absolute top-[70%] md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold z-20">
                    News
                </h1>
            </div>
            <div className="w-full mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-10 py-8">
                {
                    (Postdata).map((item,index) => (
                        <PostCard
                            key={index}
                            id={item.id}
                            title={item.title}
                            category={item.category}
                            publicDate={item.publicDate}
                            timeRead={item.timeRead}
                            image={item.image}
                        />
                    ))

                }
            </div>
            <LanguageChange />
        </div>
    );
}
export default NewsPage;