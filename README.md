# TypeScript Lesson 4: Interfaces, Tuples & Enums

Welcome to your fourth TypeScript lab! In the previous lessons, you learned about basic types, objects, arrays, type aliases, and union types. Now we're going to explore some of TypeScript's most powerful tools for modeling structured data: **interfaces**, **tuples**, and **enums**.

You already know how to create objects in JavaScript, but what if you want to ensure that every object of a certain type has the same structure? What if you need a fixed-length array where each position has a specific type? Or what if you want to define a set of named constants that work together? That's where these TypeScript features come in—they let you create precise, predictable data structures.

Think of it like this: in JavaScript, you might create objects and hope they have the properties you expect. In TypeScript, you can define exactly what shape your data should have, and TypeScript will help you catch mistakes before they become bugs.

## Learning Objectives

By the end of this lab, you'll be comfortable with:

- Defining object shapes with `interface` declarations
- Extending interfaces to build complex type hierarchies
- Using tuples for fixed-length, typed arrays
- Creating enums for named sets of related values
- Understanding when to use interfaces vs type aliases

## Getting Started

First, fork and clone the repository and let's set up your environment:

```bash
npm install
npm test
```

The tests will guide you through each concept. Don't worry if they fail initially—that's how you'll learn what TypeScript expects!

---

## Interfaces: Defining Object Shapes

In JavaScript, you might create objects like this:

```javascript
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
}
```

But what if you want to ensure that every book object has these exact properties? What if you want TypeScript to catch errors when you forget a property or use the wrong type? That's where **interfaces** come in.

An interface defines the shape of an object—what properties it should have and what types those properties should be:

```typescript
interface Book {
  title: string
  author: string
  pages: number
}

// Now TypeScript knows exactly what a Book should look like
let myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
}
```

The interface acts like a contract. Any object that claims to be a `Book` must have exactly these properties with these types. If you try to create a book without a `title` or with a `pages` property that's a string instead of a number, TypeScript will catch the error.

**Try it yourself:** Open `src/section1_interfaces.ts` and define a `Book` interface with `title`, `author`, and `pages` properties. Then create a `myBook` variable that follows this interface.

---

## Extending Interfaces: Building Type Hierarchies

Sometimes you want to build on top of existing interfaces. Maybe you have a `Person` interface, but you also need an `Employee` interface that has all the same properties plus some additional ones. Instead of duplicating code, you can **extend** the interface:

```typescript
interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  jobTitle: string
  department: string
}

// An Employee has all Person properties PLUS the new ones
let employee: Employee = {
  name: "Alice Johnson",
  age: 28,
  jobTitle: "Software Engineer",
  department: "Engineering",
}
```

The `extends` keyword tells TypeScript that `Employee` inherits all the properties from `Person` and adds its own. This is incredibly useful for building complex type systems where you have base types and specialized versions.

You can extend multiple interfaces too:

```typescript
interface Flyable {
  altitude: number
}

interface Swimmable {
  depth: number
}

interface Duck extends Flyable, Swimmable {
  name: string
}
```

**Your turn:** In `src/section2_extending_interfaces.ts`, create a `Person` interface with `name` and `age`, then create an `Employee` interface that extends `Person` and adds `jobTitle` and `department`.

---

## Tuples: Fixed-Length Typed Arrays

Regular arrays in TypeScript can hold any number of elements, all of the same type. But what if you need an array with exactly two numbers (like coordinates), or exactly three strings (like RGB color values)? That's where **tuples** come in.

A tuple is like an array, but with a fixed length and specific types for each position:

```typescript
// A tuple for 2D coordinates
type Point = [number, number]

let origin: Point = [0, 0]
let destination: Point = [10, 20]

// TypeScript knows exactly what each position should be
let x = origin[0] // number
let y = origin[1] // number
```

Tuples are perfect for:

- Coordinates: `[number, number]`
- RGB colors: `[number, number, number]`
- Key-value pairs: `[string, any]`
- Function results: `[boolean, string]` (success flag + message)

You can also use tuples in function parameters and return types:

```typescript
function move(
  point: [number, number],
  delta: [number, number]
): [number, number] {
  return [point[0] + delta[0], point[1] + delta[1]]
}
```

**Challenge:** In `src/section3_tuples.ts`, create a `Point` tuple type and a `destination` variable set to `[0, 0]`.

---

## Enums: Named Sets of Values

Sometimes you have a fixed set of related values that you want to use throughout your code. Instead of using magic strings or numbers, you can create an **enum** to give these values meaningful names:

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Now you can use these values by name
let playerDirection = Direction.Up
let enemyDirection = Direction.Down
```

By default, enums assign numeric values starting from 0, but you can customize them:

```typescript
enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error",
}

enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}
```

Enums are incredibly useful for:

- Game directions: `Up`, `Down`, `Left`, `Right`
- API status codes: `Success`, `Error`, `Loading`
- User roles: `Admin`, `User`, `Guest`
- Configuration options: `Development`, `Staging`, `Production`

You can use enums in functions to create type-safe APIs:

```typescript
function move(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Moving up"
    case Direction.Down:
      return "Moving down"
    case Direction.Left:
      return "Moving left"
    case Direction.Right:
      return "Moving right"
  }
}
```

**Your turn:** In `src/section4_enums.ts`, create a `Direction` enum with `Up`, `Down`, `Left`, and `Right`, then write a `move` function that takes a `Direction` and returns a string message.

---

## Bonus: Interfaces vs Type Aliases

You've now seen both interfaces and type aliases. When should you use which?

**Use interfaces when:**

- Defining object shapes (like `Book`, `Person`, `Employee`)
- You might need to extend them later
- Working with classes (interfaces can be implemented by classes)
- Building complex object hierarchies

**Use type aliases when:**

- Creating unions (`string | number`)
- Defining function types
- Creating tuples
- Working with primitive types
- Creating complex type transformations

Here's a practical example:

```typescript
// Interface for object shapes
interface User {
  id: number
  name: string
}

// Type alias for unions
type UserId = string | number

// Type alias for function types
type EventHandler = (event: Event) => void

// Interface for extending
interface AdminUser extends User {
  permissions: string[]
}
```

**Bonus challenge:** In `src/section5_bonus_interface_vs_type.ts`, create the same shape using both an interface and a type alias, then add a comment explaining when you'd choose each approach.

---

## Why This Matters

Interfaces, tuples, and enums are fundamental to writing maintainable TypeScript code. They let you:

- **Define clear contracts** - Know exactly what shape your data should have
- **Catch errors early** - TypeScript will warn you about missing or incorrect properties
- **Build complex systems** - Extend interfaces to create hierarchies
- **Work with structured data** - Use tuples for fixed-length arrays
- **Avoid magic values** - Use enums for meaningful, type-safe constants

These concepts are especially important when working with APIs, databases, or any situation where you need to ensure data consistency across your application.

---

## Ready to Start?

Open `src/section1_interfaces.ts` and begin! The tests will guide you through each concept. Remember: TypeScript is here to help you write better code by catching errors early. Embrace the red squiggly lines—they're your friends! 🚀

### Common Troubleshooting

**"Property 'X' is missing in type 'Y'"**

- Check that your interface includes all required properties
- Make sure you're providing values for every property in your object

**"Type 'X' is not assignable to type 'Y'"**

- Verify that your property types match the interface definition
- Check that you're using the correct types (string vs number, etc.)

**"Index signature is missing in type 'Y'"**

- Make sure you're using the interface correctly
- Check that your object literal matches the interface shape exactly

**"Cannot find name 'Direction'"**

- Make sure you've defined your enum before using it
- Check that you're using the enum name correctly (e.g., `Direction.Up`)

**Tests failing?**

- Make sure you're using explicit type annotations (the `: Type` syntax)
- Check that your interfaces, tuples, and enums are defined correctly
- Verify that your variable assignments match the expected types
- Ensure your function return types match what the tests expect
