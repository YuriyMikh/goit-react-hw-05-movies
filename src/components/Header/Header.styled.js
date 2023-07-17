import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  min-height: 100px;
  position: relative;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  margin-bottom: 20px;
`;

export const NavList = styled.ul`
  list-style: none;
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  &.active {
    color: red;
  }
`;
