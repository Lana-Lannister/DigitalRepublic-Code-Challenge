import { FormEvent, useState } from 'react';
import { CardWall } from '../components/CardWall';
import { Result } from '../components/ResultsOfCansPaint';

import dataSizeOfCansPaint from '../data/sizeOfCanPaint';

import { Container, Form, WrapperCardWalls, Button, Title } from './styles';

interface CanOfPain {
  size: string;
  volume: number;
  quantity: number;
}

const Home = () => {
  const [areaWall1, setAreaWall1] = useState(0);
  const [areaWall2, setAreaWall2] = useState(0);
  const [areaWall3, setAreaWall3] = useState(0);
  const [areaWall4, setAreaWall4] = useState(0);
  const [sizeOfCansPaint, setSizeOfCansPaint] = useState<CanOfPain[]>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const totalArea = areaWall1 + areaWall2 + areaWall3 + areaWall4;
    const totalLitro = totalArea / 5;

    const sizeOfCans = dataSizeOfCansPaint.map((item: CanOfPain) => {
      return {
        ...item,
        quantity: Math.ceil(totalLitro / item.volume),
      };
    });

    setSizeOfCansPaint(sizeOfCans);
  };

  return (
    <Container>
      <Title>Cálculo de latas de tintas</Title>

      <Form onSubmit={handleSubmit}>
        <WrapperCardWalls>
          <CardWall name="Parede 1" setAreaToPaint={setAreaWall1} />
          <CardWall name="Parede 2" setAreaToPaint={setAreaWall2} />
          <CardWall name="Parede 3" setAreaToPaint={setAreaWall3} />
          <CardWall name="Parede 4" setAreaToPaint={setAreaWall4} />
        </WrapperCardWalls>
        <Button type="submit">Calcular</Button>

        {!!sizeOfCansPaint && <Result resultado={sizeOfCansPaint} />}
      </Form>
    </Container>
  );
};

export default Home;
