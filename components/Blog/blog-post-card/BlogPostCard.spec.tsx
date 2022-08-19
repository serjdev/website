import { BlogPostCard } from "./BlogPostCard";
import { render, screen } from "@testing-library/react";

describe("Blog Post Card", () => {
  const post = {
    title: "Test Title",
    slug: "test-title",
    headerImgId: "test-header-img-id",
  };
  it("renders in the DOM", () => {
    const { container } = render(<BlogPostCard post={post} />);
    expect(container).toBeInTheDocument();
  });
});
