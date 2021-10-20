import { render, screen } from '@testing-library/react';
import { RepositoryItem } from './Repository-item';

const Name = 'test name';
const FullName = 'test fullname';
const LinkToRepo = 'https://github.com';

test('render repository information', () => {
  render(<RepositoryItem name={Name} linkToRepo={LinkToRepo} fullname={FullName}/>);

  const NameEl = screen.getByText(/test name/i);
  const FullNameEl = screen.getByText(/test fullname/i);
  const LinkToRepoEl = screen.getByRole('link');


  expect(NameEl).toBeInTheDocument();
  expect(FullNameEl).toBeInTheDocument();
  expect(LinkToRepoEl).toBeInTheDocument();
});