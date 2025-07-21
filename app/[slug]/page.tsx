import News from '@/components/news';
import { notFound } from 'next/navigation';
import EnPostData from '@/data/news/english.json';
import ViPostData from '@/data/news/vietnamese.json'

interface Post {
  id: string;
  title: string;
  slug: string;
  category: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  }[];
  description: any;
  cover_image: string;
  image?: {
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
  related?: string[];
}

// Export generateStaticParams for static site generation
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Ensure newsData is treated as an array
  return (EnPostData as Post[]).map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const enPost = (EnPostData as Post[]).find((p: Post) => p.slug === slug) || null;
  const viPost = (ViPostData as Post[]).find((p: Post) => p.slug === slug) || null;

  if (!enPost) {
    notFound();
  }

  const postsByLanguage: { [key: string]: Post | null } = {
    en: enPost,
    vi: viPost,
  };

  const sortPosts = (posts: Post[]) =>
    [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 2);

  const recentPosts = {
    en: sortPosts(EnPostData as Post[]),
    vi: sortPosts(ViPostData as Post[]),
  };

  const previewPostSlugs = enPost.related || [];

  const getPreviewPosts = (posts: Post[]) =>
    previewPostSlugs
      .map((slug) => posts.find((p) => p.slug === slug))
      .filter((post): post is Post => !!post);

  const previewPosts = {
    en: getPreviewPosts(EnPostData as Post[]),
    vi: getPreviewPosts(ViPostData as Post[]),
  };

  return <News postsByLanguage={postsByLanguage} recentPosts={recentPosts} previewPosts={previewPosts} slug={slug} />;
}
