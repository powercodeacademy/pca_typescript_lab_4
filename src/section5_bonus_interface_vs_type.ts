// BONUS TASK:
// Create a variable called shapeA using an interface and another variable called shapeB using a type alias:
// - Each should define a Shape with width: number and height: number
// Add a comment explaining when you might use one over the other.

// Your code here 👇

interface ShapeInterface {
  width: number
  height: number
}

const shapeA: ShapeInterface = {
  width: 20,
  height: 50,
}

type ShapeType = {
  width: number
  height: number
}

const shapeB: ShapeType = {
  width: 20,
  height: 50,
}

// Should use Interface if you may need to extend it later since Type can't be extended.
// It can also describe unions and merge declarations while Type cannot.
