"use client"
import { useEffect, useState } from "react"
import { RichText } from "@payloadcms/richtext-lexical/react"
import { getCustomRichTextConverters } from "@/components/rich-text/custom-rich-text-converters"
import RecentPost from "./recent-post"
import PreviewPost from "./preview-post"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Plus, Minus } from "@phosphor-icons/react"
import Footer from "./footer"
import { format, parseISO } from 'date-fns';


interface Props {
  post: any
}

export default function News({ post }: Props) {
  const [isClient, setIsClient] = useState(false)
  const [openCollapsible, setOpenCollapsible] = useState<"english" | "vietnamese" | null>("english")

  // mark as client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // fetch post data when client and slug or language changes
  if (!isClient) return null

  const handleCollapsibleChange = (collapsible: "english" | "vietnamese") => {
    setOpenCollapsible((prev) => (prev === collapsible ? null : collapsible))
  }

  return (
    <>
    <div className="py-[100px] px-[17%]">
      <div className="flex flex-col gap-6 py-16">
        <div className="flex gap-4 items-center">
          <div className="text-[#BF9B30] text-base">{post.category.title}</div>
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          <div className="text-base">9 min read</div>
        </div>
        <div className="text-[70px] font-bold tracking-[-3.24px] leading-[72px]">{post.title}</div>
        <div className="text-lg pl-8">{format(parseISO(post.createdAt), "yyyy-MM-dd")}</div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-20">
        <Collapsible open={openCollapsible === "english"} onOpenChange={() => handleCollapsibleChange("english")}>
          <div className="w-full h-[58px] bg-[#9690A214] flex justify-between items-center py-3 px-5 rounded-[5px]">
            <div className="text-[#BF9B30] text-base">English</div>
            <CollapsibleTrigger className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
              <div
                className={`absolute transition-transform duration-300 ease-in-out ${
                  openCollapsible === "english" ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                }`}
              >
                <Minus size={16} weight="bold" />
              </div>
              <div
                className={`absolute transition-transform duration-300 ease-in-out ${
                  openCollapsible === "english" ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Plus size={16} weight="bold" />
              </div>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="px-4">
              <RichText
                data={post.description}
                converters={({ defaultConverters }) => getCustomRichTextConverters(defaultConverters)}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="flex flex-wrap gap-4 pb-32">
        <PreviewPost/>
        <PreviewPost/>
        <PreviewPost/>
      </div>

      <div>
        <h4 className="text-[25px] text-bold pb-6">Recent Posts</h4>
        <div className="flex flex-wrap gap-8">
          <RecentPost />
          <RecentPost />
          <RecentPost />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
