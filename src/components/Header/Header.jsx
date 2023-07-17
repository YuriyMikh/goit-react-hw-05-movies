import { HeaderLink, Navigation, NavList } from './Header.styled';

export const Header = () => {
  return (
    <Navigation>
      <NavList>
        <li>
          <HeaderLink to="/">Home</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </li>
      </NavList>
    </Navigation>
  );
};
