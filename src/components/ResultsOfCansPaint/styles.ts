import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  padding: 20px;
  background: #def1f4;
  color: #397480;
  border: 1px solid #def1f4;
  border-radius: 8px;
  font-size: 18px;

  ul {
    margin-top: 10px;
    li {
      margin-left: 30px;

      & + li {
        margin-top: 10px;
      }
    }
  }
`;
