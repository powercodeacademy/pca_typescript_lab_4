// BONUS TASK:
// Create a variable called shapeA using an interface and another variable called shapeB using a type alias:
// - Each should define a Shape with width: number and height: number
// Add a comment explaining when you might use one over the other.

// Your code here 👇

// For modeling objects
interface ShapeInterface {
  width: number;
  height: number;
}

// For creating flexible types
type ShapeType = {
  width: number;
  height: number;
};

const shapeA: ShapeInterface = {
  width: 5,
  height: 5,
};

const shapeB: ShapeType = {
  width: 10,
  height: 10,
};
