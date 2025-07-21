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
  }[];
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
  } | string ;
  createdAt: string;
  updatedAt: string;
  related?: string[];
}

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Extract short description from post.description (first 100 characters)
  const shortDescription =
    (
      typeof post.description?.root?.children[0]?.children[0]?.text === "string"
        ? post.description.root.children[0].children[0].text.slice(0, 100)
        : "No description available"
    ) + "...";

  return (
    <div className="flex flex-col w-full h-full">
      <Image
          className="rounded-t-lg max-w-full"
          src={post.cover_image}
          alt={post.title}
          width={1280}
          height={800}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      <div className="flex flex-col gap-4 p-6 bg-[#9690A20F] rounded-b-lg h-full">
        <div className="flex gap-2 items-center">
          <div className="text-sm text-[#9690A2]">{format(parseISO(post.createdAt), "yyyy-MM-dd")}</div>
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <div className="text-sm text-[#9690A2]">5 min read</div>
        </div>
        {/* <h4 className="text-[25px] text-white font-bold">{post.title}</h4> */}
        <h4 className="text-[25px] text-white font-bold">
          <a
            href={`/${post.slug}`}
          >
            {post.title}
          </a>
        </h4>
        <p className="text-base text-[#FFFFFFBF] flex-grow">{shortDescription}</p>
        {post.category.length > 0 && (
          <div className="flex flex-wrap text-[14px] gap-[6px]">
            {post.category.map((cat, index) => (
              <a
                key={index}
                href={`/category/${cat.id}`}
                className="bg-[#9690A226] text-[#FFFFFFBF] py-1 px-2 rounded-sm"
              >
                {cat.title}
              </a>
            ))}
          </div>
        )}
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