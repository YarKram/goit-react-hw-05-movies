import styled from 'styled-components';

export const Button = styled.button`
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
  margin-left: 10px;

  &:hover {
    background-color: orangered;
    color: #fff;
    border: 1px solid orangered;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddLinfoList = styled.ul`
  gap: 15px;
  margin-left: 20px;
  list-style: none;
  display: flex;
  padding: 0;
`;

export const AddLinfoLink = styled.li`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  text-align: center;
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  margin-bottom: 10px;

  min-width: 50px;

  a {
    text-decoration: none;
    color: black;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    &:hover {
      color: white;
    }
  }

  &:hover {
    color: white;
    background-color: orangered;
    border: 1px solid orangered;
  }
`;
