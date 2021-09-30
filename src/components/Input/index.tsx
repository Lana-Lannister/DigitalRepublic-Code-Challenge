import { Container } from './styles';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </Container>
  );
};
