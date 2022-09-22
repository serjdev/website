import { BlogPostCard } from '@/components/Blog/blog-post-card/BlogPostCard';
import { Layout } from '@/components/Layout/Layout';
import { getAllPosts } from 'blog-api/mdUtils';
import { ICardPost } from 'blog-api/types';
import React from 'react';
import { Meta } from 'seo/Meta/Meta';

interface BlogPostsListProps {
  posts: Array<ICardPost>;
}

function BlogPostsList({ posts }: BlogPostsListProps) {
  return (
    <>
      <Meta title="Sergiu's Blog" description='Sergiu Grisca blog posts page' />
      <Layout>
        <div className='lg:px-24 sm:grid-cols-2 lg:grid-cols-4 lg:py-20 grid px-10'>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default BlogPostsList;
