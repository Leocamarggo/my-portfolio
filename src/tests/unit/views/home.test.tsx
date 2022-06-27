import '@testing-library/jest-dom';
import Home from '../../../views/Home';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(cleanup);

it('First test', () => {
  render(<Home />);

  expect(screen.getByText('init')).toBeInTheDocument();
});
