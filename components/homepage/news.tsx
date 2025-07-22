// components/homepage/news.tsx
import Image from 'next/image';
import Link from 'next/link';

const recentPosts = [
  {
    id: 1,
    title: 'Appreciation & Strategic Collaboration Statement',
    date: '2025-07-08',
    readTime: '4 min read',
    categories: ['Events Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2025/07/75ac9994e99c5fc2068d-1024x753.jpg',
    slug: 'appreciation-and-strategic-collaboration-statement',
  },
  {
    id: 2,
    title: 'BEQ Group Foundation Announcement',
    date: '2025-04-08',
    readTime: '5 min read',
    categories: ['Events Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2025/04/c7e0bec0aea11dff44b0-1024x683.jpg',
    slug: 'beq-group-foundation-announces-30-million-guarantee-from-the-uk-a-commitment-to-legal-integrity-and-financial-transparency',
  },
  {
    id: 3,
    title: 'BeQ Holdings Grand Opening 2025',
    date: '2025-02-07',
    readTime: '10 min read',
    categories: ['BeQ Holdings Grand Opening 2025', 'Events Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2025/02/HKL_9926-2-1024x683.jpg',
    slug: 'beq-holdings-grand-opening-2025',
  },
  {
    id: 4,
    title: 'BeQ Holdings Celebrates Unique Financial Strategies in Week 4',
    date: '2024-11-01',
    readTime: '9 min read',
    categories: ['BeQ Financial Township Competition', 'Weekly Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2024/11/4X4A6489-1024x719.jpg',
    slug: 'beq-holdings-celebrates-unique-financial-strategies-in-week-4',
  },
  {
    id: 5,
    title: 'BeQ Holdings Concludes Week 3 Competition of the 12-Week Journey',
    date: '2024-10-23',
    readTime: '9 min read',
    categories: ['BeQ Financial Township Competition', 'Weekly Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2024/10/f8299f4f6517dd498406-1024x718.jpg',
    slug: 'beq-holdings-concludes-week-3-competition-of-the-12-week-journey',
  },
  {
    id: 6,
    title: 'BeQ Holdings successfully organizes Week 2 Financial Township Competition',
    date: '2024-10-17',
    readTime: '6 min read',
    categories: ['BeQ Financial Township Competition', 'Weekly Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2024/10/d6e40cec4fabf7f5aeba-1024x683.jpg',
    slug: 'beq-holdings-successfully-organizes-week-2-competition-searching-for-strategies-to-expand-the-international-financial-market',
  },
  {
    id: 7,
    title: 'BeQ Financial Township Competition Kicks Off in Ho Chi Minh City',
    date: '2024-10-10',
    readTime: '6 min read',
    categories: ['BeQ Financial Township Competition', 'Weekly Recap'],
    image: 'https://beqholdings.com/wp-content/uploads/2024/10/82f56bb2-b8b9-45f9-9a0c-b44616a37117-1024x768.jpg',
    slug: 'beq-financial-township-competition-kicks-off-in-ho-chi-minh-city',
  },
  {
    id: 8,
    title: 'Tổng hợp hàng tuần - Phân tích chuyên sâu về thị trường tài chính toàn cầu và Việt Nam',
    date: '2024-08-11',
    readTime: '20 min read',
    categories: ['Marketing', 'Media', 'Weekly Recap - vi'],
    image: 'https://beqholdings.com/wp-content/uploads/2024/08/454898081_122167999136193401_8264655970848285157_n-1024x1024.jpg',
    slug: 'tong-hop-hang-tuan-phan-tich-chuyen-sau-ve-thi-truong-tai-chinh-toan-cau-va-viet-nam',
  },
];

const NewsSections = () => {
  return (
    <section className="py-16 bg-black text-white w-full">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12">Recent News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 brightness-50"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
              </div>
              <div className="absolute top-4 left-4 text-sm opacity-90">
                <span>{post.date} · {post.readTime}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-2xl font-bold leading-tight mb-2">
                  <Link href={`https://beqholdings.com/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((cat, index) => (
                    <span key={index} className="bg-gray-600/70 text-white px-3 py-1 text-xs rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSections;