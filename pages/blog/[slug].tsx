import { Layout } from "@/components/Layout/Layout";
import { getAllPaths, getPost } from "blog-api/mdUtils";
import { IPost } from "blog-api/types";

import React from "react";
import { Meta } from "seo/Meta/Meta";

const BlogPostsPage = ({ title }: IPost) => {
  return (
    <>
      <Meta title={title} description={title} />
      <Layout>
        <div className="lg:px-24 px-10">
          <div className="text-center text-yellow-200">
            Blog Page In progress...
          </div>
          <h1>{title}</h1>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPaths();

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
      ...post,
    },
  };
};

export default BlogPostsPage;
