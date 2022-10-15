import { render, screen } from '@testing-library/react';
import App from './App'

test('renders 3 li items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
