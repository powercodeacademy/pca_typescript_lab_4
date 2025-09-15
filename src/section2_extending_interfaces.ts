interface Person {
  name: string
  age: number
}
 interface Employee extends Person {
  jobTitle: string
  department: string
 }

 const employee1: Employee = {
  name: 'wdfwef',
  age: 43,
  jobTitle: 'jhkjhk',
  department: 'ewfwefew'
 }
