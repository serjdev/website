import { render, screen } from '@testing-library/react';
import { Hero } from './index';

describe('Hero', () => {
  it('renders in the DOM', () => {
    const { container } = render(<Hero />);
    expect(container).toBeInTheDocument();
  });

  it('renders an h1', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
