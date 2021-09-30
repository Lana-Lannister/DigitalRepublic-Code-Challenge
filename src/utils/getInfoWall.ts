const WINDOW_WIDTH = 2.0;
const WINDOW_HEIGHT = 1.2;

const DOOR_WIDTH = 0.8;
const DOOR_HEIGHT = 1.9;
const DOOR_TO_WALL_RELATION = 0.3;

const DIMENSION_MIN_WALL = 1.0;
const DIMENSION_MAX_WALL = 15.0;

export const getAreaWindow = (window: number) => {
  const area = window * WINDOW_WIDTH * WINDOW_HEIGHT;
  return isNaN(area) ? '0' : area.toFixed(2);
};

export const getAreaDoors = (doors: number) => {
  const area = doors * DOOR_WIDTH * DOOR_HEIGHT;
  return isNaN(area) ? '0' : area.toFixed(2);
};

export const getAreaWall = (height: number, width: number) => {
  const area = width * height;
  return isNaN(area) ? '0' : area.toFixed(2);
};

export const validatePutDoorOnWall = (height: number) => {
  if (height >= DOOR_HEIGHT + DOOR_TO_WALL_RELATION) {
    return true;
  }
  return false;
};

export const validadeDimensionWall = (dimensionWall: number) => {
  if (
    dimensionWall < DIMENSION_MIN_WALL ||
    dimensionWall > DIMENSION_MAX_WALL
  ) {
    return true;
  }
  return false;
};
