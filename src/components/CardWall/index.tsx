import { useState } from 'react';
import {
  getAreaDoors,
  getAreaWall,
  getAreaWindow,
  validadeDimensionWall,
  validatePutDoorOnWall,
} from '../../utils/getInfoWall';

import { Input } from '../Input';

import {
  Container,
  WrapperWall,
  InputGroup,
  InfoWall,
  AlertMessage,
  InfoWallDescription,
} from './styles';

interface WallProps {
  name: string;
  setAreaToPaint: (x: number) => void;
}

export const CardWall = ({ name, setAreaToPaint }: WallProps) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [doors, setDoors] = useState(0);
  const [window, setWindow] = useState(0);

  const [heightError, setHeightError] = useState(false);
  const [widthtError, setWidthtError] = useState(false);
  const [doorsError, setDoorsError] = useState(false);

  const areaWall = getAreaWall(width, height);
  const areaWindows = getAreaWindow(window);
  const areaDoors = getAreaDoors(doors);

  const PERCENTUAL_WALL_AND_DOORS_WINDOWS = 50;

  const handleHeightWall = (heightWall: number) => {
    if (validadeDimensionWall(heightWall)) {
      setHeightError(true);
      setHeight(0);
    } else {
      setHeightError(false);
      setHeight(heightWall);
    }
  };

  const handleWidthtWall = (widthWall: number) => {
    if (validadeDimensionWall(widthWall)) {
      setWidthtError(true);
      setWidth(0);
    } else {
      setWidthtError(false);
      setWidth(widthWall);
    }
  };

  const handleDoorsWall = (quantityDoors: number) => {
    if (validatePutDoorOnWall(height) || quantityDoors === 0) {
      setDoorsError(false);
      setDoors(quantityDoors);
    } else {
      setDoorsError(true);
      setDoors(0);
    }
  };

  const isAvailableWall = () => {
    const areaDoorsAndWindows = parseFloat(areaDoors) + parseFloat(areaWindows);

    const percentual = (areaDoorsAndWindows / parseFloat(areaWall)) * 100;

    if (percentual > PERCENTUAL_WALL_AND_DOORS_WINDOWS) {
      setAreaToPaint(0);
      return false;
    } else {
      const areaFinal = parseFloat(areaWall) - areaDoorsAndWindows;
      setAreaToPaint(areaFinal);
      return true;
    }
  };

  return (
    <Container>
      <h2>{name}</h2>

      <WrapperWall>
        <InputGroup>
          <Input
            label="Altura:"
            name="height"
            type="number"
            required
            onChange={event => {
              handleHeightWall(event.target.valueAsNumber);
            }}
          />

          {heightError && (
            <AlertMessage>Altura deve ter entre 1m a 15m</AlertMessage>
          )}

          <Input
            label="Largura:"
            name="width"
            type="number"
            required
            onChange={event => {
              handleWidthtWall(event.target.valueAsNumber);
            }}
          />

          {widthtError && (
            <AlertMessage>Largura deve ter entre 1m a 15m</AlertMessage>
          )}

          <Input
            label="Qtd de Janelas:"
            name="window"
            type="number"
            required
            onChange={event => {
              setWindow(event.target.valueAsNumber);
            }}
          />

          <Input
            label="Qtd de Portas:"
            name="door"
            type="number"
            required
            onChange={event => {
              handleDoorsWall(event.target.valueAsNumber);
            }}
          />

          {doorsError && (
            <AlertMessage>
              A porta não respeita o tamanho mínimo da altura da parede de 2,2m
            </AlertMessage>
          )}

          {!isAvailableWall() && (
            <AlertMessage>
              O total de área das portas e janelas deve ser no máximo 50% da
              área de parede. Favor verificar
            </AlertMessage>
          )}
        </InputGroup>

        <InfoWall>
          <InfoWallDescription className="InfoWall-">
            <strong>Área da Parede: </strong>
            {areaWall} m²
          </InfoWallDescription>

          <InfoWallDescription>
            <strong>Área da Janela: </strong>
            {areaWindows} m²
          </InfoWallDescription>

          <InfoWallDescription>
            <strong>Área da Porta: </strong>
            {areaDoors} m²
          </InfoWallDescription>

          <InfoWallDescription>
            <strong>Area (Porta + Janela): </strong>
            {(parseFloat(areaDoors) + parseFloat(areaWindows)).toFixed(2)} m²
          </InfoWallDescription>

          <InfoWallDescription>
            <strong>Área útil a ser pintada:</strong>{' '}
            {(
              parseFloat(areaWall) -
              parseFloat(areaWindows) -
              parseFloat(areaDoors)
            ).toFixed(2)}{' '}
            m²
          </InfoWallDescription>
        </InfoWall>
      </WrapperWall>
    </Container>
  );
};
