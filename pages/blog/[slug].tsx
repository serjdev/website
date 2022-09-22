import { Layout } from '@/components/Layout/Layout';
import { getAllPaths, getPost } from 'blog-api/mdUtils';
import { IPost } from 'blog-api/types';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import React from 'react';
import { Meta } from 'seo/Meta/Meta';
import Link from 'next/link';

interface BlogPageProps {
  mdx: MDXRemoteSerializeResult;
  post: IPost;
}

function BlogPostsPage({ mdx, post: { title } }: BlogPageProps) {
  return (
    <>
      <Meta title={title} description={title} />
      <Layout noImage>
        <div className='py-12'>
          <div className='lg:px-64 lg:py-12 max-w-none rounded-b-xl lg:prose-xl px-12 prose'>
            <h1>{title}</h1>
            <MDXRemote {...mdx} />
          </div>
          <Link href='/blog'>
            <div className='hover:text-accent lg:px-24 flex items-center px-12 mt-10 text-white transition-colors cursor-pointer'>
              <ArrowLeftIcon className='w-8 h-8 mr-3' />
              <span>back</span>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPaths();

  return {
    fallback: false,
    paths,
  };
};

interface IParams extends URLSearchParams {
  params: {
    slug: string;
  };
}
export const getStaticProps = async ({ params: { slug } }: IParams) => {
  const post = getPost(slug);

  const mdxSource = await serialize(post.htmlContent);

  return {
    props: {
      mdx: mdxSource,
      post,
    },
  };
};

export default BlogPostsPage;
