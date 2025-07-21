import React from "react";
import PostCard from "../newsItems";
import data from "@/data/news.json";
const Url = "https://dev.be.landing.wealthfarming.org/"
interface PostData {
  idPost: string;
  title: string;
  category: string;
  time: string;
  timeRead: string;
  image: string;
}

const NewsSections = () => {
  const [Postdata, setPostData] = React.useState<PostData[]>([]);
  async function fetchData() {
    try {
      // Using local data from news.json
      const result = data;
      // Mapping the fetched data to the PostData structure
      const mapData = result.map((item: any) => ({
        idPost: item.id,
        title: item.title,
        category: item.category.title,
        time: item.createdAt,
        timeRead: '5 min read', // Assuming a static read time for simplicity
        image: (item.cover_image),
      }));
      setPostData(mapData);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="w-full px-8 md:px-16 py-8 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-5xl w-full text-left font-bold mb-8">Recent News</h2>
          <div className="grid justify-evenly justify-items-center content-evenly grid-cols-1 lg:grid-cols-4 gap-8 w-fit overflow-y-hidden max-w-[1400px]">
            {(typeof window !== "undefined" && window.innerWidth < 768
              ? Postdata.slice(0, 5)
              : Postdata
            ).map((item) => (
              <PostCard
                key={item.idPost}
                id={item.idPost}
                title={item.title}
                category={item.category}
                publicDate={new Date(item.time).toLocaleDateString()}
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

