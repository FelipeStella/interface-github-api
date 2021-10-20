import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';

test('renders profile information with username, company, and localization with repository indicators', () => {
  render(<Profile/>);

  const ImageEl = screen.getByRole('img');
  const UserameEl = screen.getByText(/Username/i);
  const CompanyEl = screen.getByText(/Company/i);
  const LocalizationEl = screen.getByText(/Localization/i);
  const FollowersEl = screen.getByText(/Followers/i);  
  const FollowingEl = screen.getByText(/Following/i);

  expect(ImageEl).toBeInTheDocument();
  expect(UserameEl).toBeInTheDocument();
  expect(CompanyEl).toBeInTheDocument();
  expect(LocalizationEl).toBeInTheDocument();
  expect(FollowersEl).toBeInTheDocument();
  expect(FollowingEl).toBeInTheDocument();
});