import { render } from '@testing-library/react';
import { ICardPost } from 'blog-api/types';
import { BlogPostCard } from './BlogPostCard';

describe('Blog Post Card', () => {
  const post: ICardPost = {
    headerImgId: 'test-header-img-id',
    publishedAt: '2021-01-01',
    slug: 'test-title',
    title: 'Test Title',
  };
  it('renders in the DOM', () => {
    const { container } = render(<BlogPostCard post={post} />);
    expect(container).toBeInTheDocument();
  });
});
