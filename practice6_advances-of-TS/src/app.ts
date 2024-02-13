//* intersection types *//

//! example 1
// type Admin = {
//   name: string;
//   departments: string[];
// };

// type Employee = {
//   name: string;
//   functions: string[];
// };

// type ElevatedEmployee = Admin & Employee;

// let person1: ElevatedEmployee;

// person1 = {
//   name: "mahdi",
//   departments: ["courses", "managment"],
//   functions: ["developer", "team-lead"],
// };

//! example 2

// type StrAndNum = string | number;
// type NumAndBool = number | boolean

// type StrAndNumAndBool = StrAndNum | NumAndBool;

// let variable1: StrAndNumAndBool;
// variable1 = 12;

// let variable2: StrAndNumAndBool;
// variable2 = 'test';

// let variable3: StrAndNumAndBool;
// variable3 = false;

//* type gaurds *//

//! example 1
// type UnknownEmployee = Admin | Employee;

// function employeeLogger(emp: UnknownEmployee) {
//   if ("departments" in emp) console.log(emp.departments);
//   if ("functions" in emp) console.log(emp.functions);
// }

// employeeLogger({
//   name: "soheil",
//   departments: ["courses", "support"],
//   functions: ["supporter"],
// });

//! example 2
// class Car {
//   drive() {
//     console.log("car is driving ...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("truck is driving ...");
//   }

//   setCargo(amount: number) {
//     console.log(`${amount} cargo seted`);
//   }
// }

// type Vehicle = Car | Truck;

// function vehicleHandler(vehicle: Vehicle) {
//   if (vehicle instanceof Truck) vehicle.setCargo(12);
//   vehicle.drive();
// }

// vehicleHandler(new Car());
// vehicleHandler(new Truck());

//* Discriminated Unions *//

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   switch (animal.type) {
//     case "bird":
//       console.log("flying speed is " + animal.flyingSpeed);
//       break;
//     case "horse":
//       console.log("running speed is " + animal.runningSpeed);
//       break;
//   }
// }

// moveAnimal({type: 'horse', runningSpeed: 30});

//* Casting Types *//

// const inputElem = <HTMLInputElement>document.getElementById('input-elem');
// const inputElem = document.getElementById('input-elem') as HTMLInputElement;
const inputElem = document.getElementById("input-elem");

(inputElem as HTMLInputElement).value = "hey man";
