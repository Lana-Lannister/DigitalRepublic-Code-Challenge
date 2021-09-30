import { Container } from './styles';

interface Props {
  resultado: {
    size: string;
    volume: number;
    quantity: number;
  }[];
}

export const Result = ({ resultado }: Props) => {
  return (
    <Container>
      <p>
        {' '}
        <strong>Resultado: </strong> O cliente necessita adquirir uma das opções
        abaixo:
      </p>

      <ul>
        {resultado.map(item => (
          <li key={item.size}>
            {item.quantity} lata(s) de {item.size}
          </li>
        ))}
      </ul>
    </Container>
  );
};
