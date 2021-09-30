import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperCardWalls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 150px;
  height: 40px;
  border: 0;
  background-color: #21ba45;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;

  &:hover {
    background-color: #40dd65;
  }
`;
