import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';

// Has valid JSX content
// Passes content as children
// JSX content equals specific content

describe('Home', () => {
  it('renders title', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'Your Daily Podcast',
    });

    expect(heading).toBeInTheDocument();
  });
});
