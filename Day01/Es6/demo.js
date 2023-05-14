/*============================*
 * Es6
  

    let ,, var ,, const
    ----------------------------
     == String API `${} hello`
     == spread operator --> Done
     == destructring --> Done
     == arrow function  // done 
     == default values 
     == array API (filter , map, every , some , foreach) -->
    ------------------------------------------------------------------------
     == Promises --> then .. catch , async await
     == classes , inhertance 
     == modulrity .. import, export 
    
 *
 ==============================*/

/***
 * primitvate datatype
 *
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 *  == symbol
 *
 *
 * refence datatype
 *
 */

// let arr1 = [10, "ali", "ahmed"];

// let arr2 = [11, 20, ...arr1];

// // arr1.push("true");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let arr = [20, 10, 3, 66, 11];

// console.log(Math.max(...arr));

// let person1 = {
//   fname: "Ali",
//   age: 11,
// };

// let person2 = { ...person1, color: "red" }; // new location

// console.log("person 1 ", person1);
// console.log("person 2 ", person2);

/** destructring */

// function useArr(state) {
//   return [
//     state,
//     function () {
//       console.log(state + 1);
//     },
//   ];
// }

// let [x, z] = useArr(0); // [10,all,30]

// console.log(x);

// z();

// let person = { fname: "ali", age: 11, color: "red", products: [10, 20, 30] };

// // let { fname: fname, color: color } = person;

// // let { fname, color } = person; // syntax suger
// // console.log(fname);
// // console.log(color);

// let { products } = person;
// console.log(products[0]);

//
/**
 * functions
 *      -- built in function
 *              == parseInt()
 *  -- user defined
 *      -- function statement {Hosting}
 *      -- function expression can't be Hoisting
 *
 */

// statement
// function add(x, y) {
//   return x + y;
// }

// expression . anynmous function
// let add = function (x, y) {
//   return x + y;
// };

// let result = add(5, 8);
// console.log(result);
// let result = x(3, 6);
// console.log(result);

// line by line

// console.log(fname); // error
// //var fname = "ali";

// console.log(fname);

// console.log(fname);
// var fname = "Ali";

// var result = 10;

// console.log(fname)

// let fname = "ali";
// console.log(fname);

// console.log(fname);
// // var fname = "Ali";
// console.log(fname);

// add(3, 4);
// function add(x, y) {
//   console.log("Add function");
// }

// add(4, 5);
// let add = function (x, y) {
//   console.log(x + y);
// };

// arrow function

// let add = (x, y) => console.log("Hello");
// add(6, 5);

// console.log(result);

// import sayHello, { add, square } from "./main.js";
// import * as all from "./main.js";
// import sayHello from "./main";

// function operation() {
//   return add(4, 6) + 10;
// }

// all.add(2, 3);

// all.square();
// all.fname;

// all.default();
// // all.default

// let all = {
//     add,
//     square,
//     default:sayHello
// }
/**====================== */
