import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

// Has valid JSX content
// Passes content as children
// JSX content equals specific content

describe('Home', () => {
  it('renders title with text', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'Your Daily Podcast',
    });

    expect(heading).toBeInTheDocument();
  });

  it('button subscribe text', () => {
    render(<Home />);

    const button = screen.getByRole('button', {
      name: 'Subscribe',
    });

    expect(button).toBeInTheDocument();
  });
});
