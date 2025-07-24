"use client"
import LanguageChange from "@/components/language-button"
import Image from "next/image"
import IndexesData from "@/data/indexes.json"
import { notFound } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getCustomRichTextConverters } from "@/components/rich-text/custom-rich-text-converters";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";
import Header from "@/components/header";

interface Indexes {
  title: string;
  description: any;
  cover_image: string;
  posts: any;
}
const EnIndexes = IndexesData.en as Indexes || null
const ViIndexes = IndexesData.en as Indexes || null


if (!EnIndexes) {
    notFound();
}

const indexesByLanguage: { [key: string]: Indexes | null } = {
    en: EnIndexes,
    vi: ViIndexes,
};


export default function IndexesPage() {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false)
  const [indexes, setIndexes] = useState<Indexes>(indexesByLanguage.en!);
  

  useEffect(() => {
      setIsClient(true);
    }, []);

  useEffect(() => {
    if (!isClient) return;
    const selected = indexesByLanguage[i18n.language] || indexesByLanguage.en;
    if (selected) {
      setIndexes(selected);
    } else {
      console.warn(`Không tìm thấy bài dữ liệu trang indexes trong ${i18n.language}, chuyển về tiếng Anh`);
      setIndexes(indexesByLanguage.en!);
      toast.error(t("indexes_data_not_found"));
    }
  }, [isClient, i18n.language, indexesByLanguage]);

  if (!isClient) return null;

  return (
    <div className="bg-[#111111] w-full">
        <LanguageChange/>
        <div className="relative w-full h-[35vh] lg:h-[50vh] overflow-hidden">
            <Image
                src={indexes.cover_image}
                alt="Image"
                fill
                style={{ 
                objectFit: "cover", 
                objectPosition: "top"
                }}
            />
             <div className="mt-5 flex justify-center">
                <Header />
            </div>
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                <div className="absolute inset-x-0 bottom-0 p-12 lg:p-24">
                    <h1 className="text-center font-bold text-5xl lg:text-7xl text-white">Indexes</h1>
                </div>
            </div>
        </div>
       <div className="mx-[2%] lg:mx-[10%]">
         <div className="w-fullflex flex-col justify-center lg:pt-20 pt-12">
            <h3 className="text-center text-[#BF9B30] font-bold text-[32px] lg:text-4xl py-[10px]">{indexes.title}</h3>
            <div className="">
                <RichText
                    data={indexes.description}
                    converters={({ defaultConverters }) => getCustomRichTextConverters(defaultConverters)}
                />
            </div>
        </div>
        <div className="w-full flex flex-col justify-center">
            {
                (indexes.posts).map((post: any) => (
                    <div key={post.slug} className="flex flex-col mt-18">
                        <div className="flex items-center w-full mb-20">
                            <div className="flex-grow border-t border-white"></div>
                            <Star className="mx-2 h-5 w-5 lg:h-6 lg:w-6 text-white fill-[white]" />
                            <div className="flex-grow border-t border-white"></div>
                        </div>
                        <div>
                            <div className="text-center text-[40px] text-[#BF9B30] font-bold">{post.title}</div>
                            <div className="flex max-md:flex-col justify-center gap-4 pt-15">
                                <div className="w-[407px] h-[228px] flex-shrink-0" style={{ width: '407px', height: '228px', minWidth: '407px', minHeight: '228px' }}>
                                    <Image
                                        src={`${post.cover_image}`}
                                        alt=""
                                        width={407}
                                        height={228}
                                        className="w-full h-full object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">{post.intro_title}</h3>
                                    <div className="mt-9">
                                        <RichText
                                            data={post.introduction}
                                            converters={({ defaultConverters }) => getCustomRichTextConverters(defaultConverters)}
                                        />
                                    </div>
                                    <Button className="bg-[#AD891E] hover:bg-[#AD891E] w-[78px] h-12 text-white font-bold mt-4"><Link href={post.url}>More</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
        <Footer/>
    </div>
  )
}

