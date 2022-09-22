import { screen, render } from '@testing-library/react';
import { SocialLink } from './index';

describe('Social Links', () => {
  const dummyLink = {
    icon: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/',
  };
  it('renders in the DOM', () => {
    const { container } = render(<SocialLink link={dummyLink} />);
    expect(container).toBeInTheDocument();
  });

  it('render a link with anchor tag pointing to url from props', () => {
    render(<SocialLink link={dummyLink} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.facebook.com/',
    );
  });
});
