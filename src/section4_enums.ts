// TASK:
// Define an enum called Direction with these values:
// - Up, Down, Left, Right
// Then, write a function move that:
// - takes a Direction as an argument
// - returns a string like "Moving Up"

// import { NumberLiteralType } from "typescript";

// Your code here 👇

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function move(direction: Direction): string {
  return "Moving ".concat(direction);
}
