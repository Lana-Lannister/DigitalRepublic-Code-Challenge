import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & + div {
    margin-top: 10px;
  }

  label {
    width: 100px;
  }

  input {
    background: #fff;
    border: 1px solid #ddd;
    outline: 0;
    padding: 0 16px;
    border-radius: 4px;
    height: 30px;

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`;
