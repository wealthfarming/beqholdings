import React from "react";
import PostCard from "../newsItems";
import data from "../../data/home_recentNew.json";
const Url = "https://dev.be.landing.wealthfarming.org/"
const NewsSections = () => {
  const [Postdata, setPostData] = React.useState(data);
  
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

