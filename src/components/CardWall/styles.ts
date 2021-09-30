import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;

  border-radius: 8px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);
    border: 1px solid #cedee7;
  }
`;

export const WrapperWall = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;

export const InputGroup = styled.div`
  flex: 1;
  max-width: 350px;
`;

export const InfoWall = styled.div`
  flex: 1;
  min-width: 280px;
`;

export const AlertMessage = styled.div`
  margin: 10px 0;
  max-width: 300px;
  font-size: 14px;
  color: #cc0000;
`;

export const InfoWallDescription = styled.span`
  font-size: 16px;
  display: block;

  & + span {
    margin-top: 10px;
  }

  > strong {
    font-weight: bold;
  }
`;
