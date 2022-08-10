import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = "posts";

export const getAllPosts = () => {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
};

export const getAllPaths = () => {
  const files = getAllPosts();

  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(/\.md$/, ""),
      },
    };
  });

  return paths;
};

export const getPost = (slug: string) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join(postsDirectory, slug + ".md"),
    "utf8"
  );

  return matter(markdownWithMetadata);
};
