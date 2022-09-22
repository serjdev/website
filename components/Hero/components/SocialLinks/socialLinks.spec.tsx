import { render } from '@testing-library/react';
import { SocialLinks } from './index';

describe('Social Links', () => {
  it('renders in the DOM', () => {
    const { container } = render(<SocialLinks />);
    expect(container).toBeInTheDocument();
  });
});
