enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move = (input: Direction): string => `Moving ${Direction[input]}`;
