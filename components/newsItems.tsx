
type PostCardProps = {
    id: string;
    title: string;
    category: string;
    publicDate: string;
    timeRead: string;
    image: string;
};


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
            onClick={() => window.location.href = `/posts/${id}`}
            key={id}
            className="relative w-full lg:w-[260px] h-[50vh] lg:h-[270px] rounded-md cursor-pointer overflow-hidden text-white shadow-lg"
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


export default PostCard;
export type { PostCardProps };