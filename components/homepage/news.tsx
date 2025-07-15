import React from "react";
import PostCard from "../newsItems";

const data = [
  {
    title: "Latest News",
    category: "latest",
    time: "2023-10-01T12:00:00Z",
    timeRead: "5 min read",
    image: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752231284/teamBeq_ben7nl.webp",
    link: "/news/latest-news-1",
    idPost: '3423231'
  },
  {
    title: "Technology Update",
    category: "technology",
    time: "2023-10-02T14:00:00Z",
    timeRead: "3 min read",
    image: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752231284/teamBeq_ben7nl.webp",
    link: "/news/technology-update-1",
    idPost: '3423232'
  },
  {
    title: "Environment News",
    category: "environment",
    time: "2023-10-03T16:00:00Z",
    timeRead: "4 min read",
    image: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752231284/teamBeq_ben7nl.webp",
    link: "/news/environment-news-1",
    idPost: '3423233'
  }
]
const Url = "https://dev.be.landing.wealthfarming.org/"
const NewsSections = () => {
  const [Postdata, setPostData] = React.useState(data);
  async function fetchData() {
    try {
      const response = await fetch('https://dev.be.landing.wealthfarming.org/api/posts?limit=8',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );
      const result = await response.json();
      const mapData = result.docs.map((item: any) => ({
        idPost: item.id,
        title: item.title,
        category: item.category.title,
        time: item.createdAt,
        timeRead: '5 min read', // Assuming a static read time for simplicity
        image: (item.cover_image) || 'https://res.cloudinary.com/drkr1i9yz/image/upload/v1752229365/oh__img137_mdf1iy.jpg',
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

