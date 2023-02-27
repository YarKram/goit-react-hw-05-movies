import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin: 10px;
  font-size: large;
  & a {
    text-decoration: none;
  }
`;

export const NavLinkButton = styled(NavLink)`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  margin-bottom: 10px;

  &:hover {
    background-color: orangered;
    color: #fff;
    border: 1px solid orangered;
  }

  &.active {
    color: orangered;
    border: 1px solid orangered;
  }

  &:hover {
    color: white;
  }
`;
