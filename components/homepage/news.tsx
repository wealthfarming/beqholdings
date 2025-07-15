import React from "react";


type PostCardProps = {
  id: string;
  title: string;
  category: string;
  publicDate: string;
  timeRead: string;
  image: string;
};

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
      const response = await fetch('https://dev.be.landing.wealthfarming.org/api/posts?limit=10',
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
        <h2 className="text-5xl font-bold mb-8">Recent News</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-6 ">
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
    </section>
  );
}
export default NewsSections;


const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  category,
  publicDate,
  timeRead,
  image,
}) => {
  return (
    <div
      key={id}
      className="relative w-full md:w-[260px] h-[50vh] md:h-[270px] rounded-md overflow-hidden text-white shadow-md"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-50"></div>

      {/* Content */}
      <div className="absolute  inset-0 flex flex-col justify-between p-4">
        {/* Date & Read Time */}
        <div className="text-sm text-gray-300">
          {publicDate} • {timeRead} read
        </div>

        <div>
          {/* Title */}
          <h3 className="text-[1.5rem] font-semibold leading-snug line-clamp-3 ">
            {title}
          </h3>

          {/* Category */}
          <div className="text-sm text-white/80 bg-gray-100/20 rounded p-2 w-fit">
            {category}
          </div>
        </div>


      </div>
    </div>
  );
};
