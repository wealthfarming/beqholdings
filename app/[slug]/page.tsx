import newsData from '@/data/news.json';
import News from '@/components/news';
import { notFound } from 'next/navigation';

// Define the type for the news data
interface Post {
  id: string;
  title: string;
  slug: string;
  category: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
  description: any;
  image: {
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
}

// Export generateStaticParams for static site generation
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Ensure newsData is treated as an array
  return (newsData as Post[]).map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the post with the matching slug
  const post = (newsData as Post[]).find((p: Post) => p.slug === slug);

  // If no post is found, return 404
  if (!post) {
    notFound();
  }

  return <News post={post} />;
}
