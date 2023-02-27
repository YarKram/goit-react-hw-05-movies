import styled from 'styled-components';

export const MoviesStyled = styled.h1`
  color: black;
  margin-left: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  font-size: large;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: orangered;
    border: 1px solid orangered;
    color: white;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MoviesListItem = styled.li`
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
