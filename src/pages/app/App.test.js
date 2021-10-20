import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the app with one button, repositories and starred', () => {
  render(<App/>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toBeInTheDocument();
});
