import { ICardPost } from "blog-api/types";
import Link from "next/link";
import React from "react";

interface BlogPostCardProps {
  post: ICardPost;
}

export const BlogPostCard = ({ post: { title, slug } }: BlogPostCardProps) => {
  return <Link href={`/blog/${slug}`}>{title}</Link>;
};
