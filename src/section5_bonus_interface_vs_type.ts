// BONUS TASK:
// Create a variable called shapeA using an interface and another variable called shapeB using a type alias:
// - Each should define a Shape with width: number and height: number
// Add a comment explaining when you might use one over the other.

// Your code here 👇
interface ShapeInterface {
  width: number;
  height: number;
}

type ShapeType = {
  width: number;
  height: number;
};

const shapeA: ShapeInterface = { width: 14, height: 6 };
const shapeB: ShapeType = { width: 45, height: 25 };
