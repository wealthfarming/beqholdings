"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { format, parseISO } from "date-fns";

interface Post {
  id: string;
  title: string;
  slug: string;
  category: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
  description: any;
  cover_image: string;
  image?: {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    createdAt: string;
    updatedAt: string;
    url: string;
    thumbnailURL: string | null;
  };
  createdAt: string;
  updatedAt: string;
  related?: string[];
}

interface Props {
  post: Post;
}

export default function PreviewPost({ post }: Props) {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="rounded-[5px] w-full h-[340px] relative overflow-hidden">
      <Image
        src={post.cover_image}
        alt={post.title}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        className="absolute inset-0 p-6 flex flex-col gap-4 hover:bg-gradient-to-r hover:from-red-500/40 hover:to-purple-500/40"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      >
        <div className="flex gap-2 items-center">
          <div className="text-[15px] text-white font-medium">{format(parseISO(post.createdAt), "yyyy-MM-dd")}</div>
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <div className="text-[15px] text-white font-medium">5 min read</div>
        </div>
        <h4 className="text-[25px] text-[#BF9B30] font-bold">{post.title}</h4>
        <div className="flex flex-wrap text-[14px] gap-2">
          <a className="bg-[#9690A280] text-[#BF9B30] py-1 px-2 rounded-sm">{post.category.title}</a>
        </div>
        <a
          className="group w-fit relative flex items-center gap-2 py-2 px-3 rounded-md transition-colors duration-300 ease-in-out hover:bg-white/10 overflow-hidden"
          href={`/${post.slug}`}
        >
          <div className="text-lg transition-colors duration-300 ease-in-out group-hover:text-[#BF9B30]">
            {t("read_more")}
          </div>
          <div className="relative flex items-center w-5 h-5">
            <ArrowRight
              size={20}
              weight="bold"
              color="#ffffff"
              className="absolute transition-all duration-300 ease-out group-hover:translate-x-full group-hover:opacity-0"
            />
            <ArrowRight
              size={20}
              weight="bold"
              color="#BF9B30"
              className="absolute -translate-x-full opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </a>
      </div>
    </div>
  );
}