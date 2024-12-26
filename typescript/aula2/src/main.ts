// class Entity {
//     constructor(private id: number) { }
// }
//
// class Person extends Entity {
//     constructor(public name: string, public age: number, readonly email: string) {
//         super(100);
//     }
// }
//
// const person = new Person("Bob Martin", 70, "bobo@gmail.com")
// console.log(person)
// console.log(person.name)
// console.log(person.email)


//------------------------------------------------------------------------------
// function go(steps: number, callback: (i: number) => (i: number) => () => number) {
//     let i = 0;
//     while (i < steps) {
//         const fn = callback(i);
//         const fn2 = fn(i);
//         console.log(fn2());
//         i++;
//     }
// }
//
// go(10, function(i: number) {
//     return function(i: number) {
//         return function() {
//             return 100 * i;
//         }
//     }
// });
//------------------------------------------------------------------------------

