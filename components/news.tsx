"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getCustomRichTextConverters } from "@/components/rich-text/custom-rich-text-converters";
import PostCard from "./post-card";
import PreviewPost from "./preview-post";
import Footer from "./footer";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";
import LanguageChange from "./language-button";
import Image from "next/image";
import Header from "./header";

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
  };
  createdAt: string;
  updatedAt: string;
  related?: string[];
}

interface Props {
  postsByLanguage: { [key: string]: Post | null };
  recentPosts: { [key: string]: Post[] };
  previewPosts: { [key: string]: Post[] };
  slug: string;
}

export default function News({ postsByLanguage, recentPosts, previewPosts, slug }: Props) {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [post, setPost] = useState<Post>(postsByLanguage.en!);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const selectedPost = postsByLanguage[i18n.language] || postsByLanguage.en;
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      console.warn(`Không tìm thấy bài post với slug ${slug} trong ${i18n.language}, chuyển về tiếng Anh`);
      setPost(postsByLanguage.en!);
      toast.error(t("post_not_found"));
    }
  }, [isClient, i18n.language, slug, postsByLanguage]);
  
  const selectedRecentPosts = recentPosts[i18n.language] || recentPosts.en;
  const selectedPreviewPosts = previewPosts[i18n.language] || previewPosts.en;

  if (!isClient) return null;

  return (
    <>
      <div className="mt-5 flex justify-center">
        <Header />
      </div>
      <LanguageChange />
      <div className=" mx-[17%] max-lg:mx-[5%] pb-4">
        <div className="flex flex-col gap-6 py-16 max-lg:py-12">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              {post.category.length > 0 && (
                <div className="flex gap-1">
                  {post.category.map((cat, index) => (
                    <span key={index} className="text-[#BF9B30] text-base">
                      {cat.title}
                      {index < post.category.length - 1 && ","} 
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            <div className="text-base">10 min read</div>
          </div>
          <div className="text-[70px] font-bold tracking-[-3.24px] leading-[72px] max-lg:text-5xl max-lg:leading-[48px] max-lg:tracking-[-2.16px]">{post.title}</div>
          <div className="text-lg pl-8 max-lg:text-base">{format(parseISO(post.createdAt), "yyyy-MM-dd")}</div>
        </div>

        <div className="flex flex-col gap-4 px-4 pt-15 max-lg:pt-5">
          <RichText
              data={post.description}
              converters={({ defaultConverters }) => getCustomRichTextConverters(defaultConverters)}
          />
        </div>

        {selectedPreviewPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-15 max-lg:pt-5 ">
            {selectedPreviewPosts.map((previewPost, index) => (
              <PreviewPost key={index} post={previewPost} />
            ))}
          </div>
        )}

        {selectedRecentPosts.length > 0 && (
          <div className="">
            <h4 className="text-[25px] font-bold pb-6 pt-25 lg:pt-32">{t("recent_posts")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
              {selectedRecentPosts.map((recentPost, index) => (
                <PostCard key={index} post={recentPost} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}