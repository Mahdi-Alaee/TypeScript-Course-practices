//* Decorator Class *//

// function Logger(logtext: string) {
//   return (_: Function) => {
//     console.log(logtext);
//   };
// }

//! WithTemplate 1
// function WithTemplate(hookId: string, template: string) {
//   const hookElem = document.getElementById(hookId);

//   return (_: any) => {
//     console.log('WithTemplate');

//     if (hookElem) {
//       hookElem.innerHTML = template;
//     }
//   };
// }

//! WithTemplate 2
// function WithTemplate(hookId: string, template: string) {
//   const hookElem = document.getElementById(hookId);

//   return (constructor: any) => {

//     if (hookElem) {
//       const instance = new constructor();
//       hookElem.innerHTML = `<h1>${instance.name}</h1>`;
//     }
//   };
// }

// @Logger('Person Class - Decorator')
// @WithTemplate(
//   "app",
//   "<h1 style='color: white; background-color: black'>Hello! I'm Person Class WithTemplate Decorator</h1>"
// )
// class Person {
//   name: string;

//   constructor(name: string = "mahdi") {
//     console.log(`${name} added ...`);
//     this.name = name;
//   }
// }

// const user1 = new Person("Ali");

//* Property Decorators *//

//! the Decoration of class properties
function Log(targetClass: any, propertyName: string | Symbol) {
  console.log("Property Decorator. . . .");
  console.log(targetClass, propertyName);
}

//! the Decoration of class accessors
function Log2(
  targetClass: any,
  accessorName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("accessors Decorator. . . .");
  console.log(targetClass);
  console.log(accessorName);
  console.log(descriptor);
}

//! the Decoration of class methods
function Log3(
  targetClass: any,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("method Decorator. . . .");
  console.log(targetClass);
  console.log(methodName);
  console.log(descriptor);
}

//! the Decoration of class methods properties
function Log4(
  targetClass: any,
  methodName: string | Symbol,
  propertyPosition: number
) {
  console.log("method Property Decorator. . . .");
  console.log(targetClass);
  console.log(methodName);
  console.log(propertyPosition);
}

class Product {
  @Log
  title: string;

  @Log2
  set price(price: number) {
    if (price > 0) this._price = price;
  }

  constructor(title: string, private _price: number) {
    this.title = title;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price + tax;
  }

  setPrice(newPrice: number) {
    this.price = newPrice;
  }
}
