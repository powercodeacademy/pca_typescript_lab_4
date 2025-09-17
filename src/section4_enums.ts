// TASK:
// Define an enum called Direction with these values:
// - Up, Down, Left, Right
// Then, write a function move that:
// - takes a Direction as an argument
// - returns a string like "Moving Up"

// Your code here 👇
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move = (dir: Direction): string => `Moving ${Direction[dir]}`
