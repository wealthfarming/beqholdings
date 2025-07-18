import React from "react";
import PostCard, { PostCardProps } from "../newsItems";
import postVN from "@/data/news/vietnamese.json";
import postEN from "@/data/news/english.json";


const Url = "https://dev.be.landing.wealthfarming.org/"

const NewsSections = () => {
  const savedLanguage = typeof window !== "undefined" && localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";

  const [Postdata, setPostData] = React.useState<PostCardProps[]>([]);
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

          console.log(data);
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
          console.log(data);
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
    <section className="w-full px-8 md:px-16 py-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-5xl w-full text-left font-bold mb-8">Recent News</h2>
          <div className="grid justify-evenly justify-items-center content-evenly grid-cols-1 lg:grid-cols-4 gap-8 w-fit overflow-y-hidden max-w-[1400px]">
            {(typeof window !== "undefined" && window.innerWidth < 768
              ? Postdata.slice(0, 5)
              : Postdata
            ).map((item, index) => (
              <PostCard
                key={index}
                id={item.id}
                title={item.title}
                category={item.category}
                publicDate={item.publicDate}
                timeRead={item.timeRead}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsSections;

