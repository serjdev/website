import { Layout } from "@/components/Layout/Layout";
import { getAllPaths, getPost } from "blog-api/mdUtils";

import React from "react";

const BlogPostsPage = () => {
  return (
    <Layout>
      <div className="text-center">Comming soon...</div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPaths();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends URLSearchParams {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({ params: { slug } }: IParams) => {
  const post = getPost(slug);

  return {
    props: {
      post,
    },
  };
};

export default BlogPostsPage;
