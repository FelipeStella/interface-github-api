import { render, screen } from '@testing-library/react';
import { Repositories } from './Repositories';

test('render one TabPanel for all repositories and one for starred', () => {
  render(<Repositories/>);

  const TabPanelEl = screen.getByRole('tabpanel');
  const TabListEl = screen.getByRole('tablist');
  const RepositoryEl = screen.getByText(/Repositories/i);
  const StarredEl = screen.getByText(/Starred/i);

  expect(TabPanelEl).toBeInTheDocument();
  expect(TabListEl).toBeInTheDocument();
  expect(RepositoryEl).toBeInTheDocument();
  expect(StarredEl).toBeInTheDocument();
});