import styled from 'styled-components';

export const Buttons = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  padding: 5px;
  appearance: none;
  border-radius: 10px;
  margin-right: 30px;
  margin-bottom: 20px;
  background-color: grey;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    color: grey;
    background-color: black;
  }
`;
