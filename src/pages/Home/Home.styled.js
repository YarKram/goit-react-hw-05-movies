import styled from 'styled-components';

export const HomeStyled = styled.h1`
  color: black;
  margin-left: 10px;
`;

export const HomeList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const HomeListItem = styled.li`
  display: block;
  margin-bottom: 5px;
  margin-left: 25px;

  & :hover {
    color: orangered;
  }

  & a {
    color: black;
    text-decoration: none;
  }
`;
