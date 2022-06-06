import { render } from '@testing-library/react';
import Navigation from './components/shared/Navbar';

test('renders learn react link', () => {
  const { getByText } = render(<Navigation />);
  const Nav = getByText("Home");
  expect(Nav).toBeTruthy()
});
