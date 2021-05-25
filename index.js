/**
  1. Declaration and initialization
  2. scope
  3. Redeclartion
  4. Reinitialization for primitive data types
  5. Reinitialization for reference data types 
 */

// 1. Declaration and initialization

user = 5;
var user = 10;
// let user = 20;
// const user = 30;
// console.log(user);

// we can't redeclare let and const keywords with same if we declare with var

// 2. scope (Local,Global. Block)

var test = 10;
let test1 = 20;

// const test5 = 50;
function renderVaraibles() {
  var test = 20;
  let test1 = 30;
  if (test == 20) {
    var test4 = 40;
    const test5 = 60;
    hello = "hello";

    // console.log(hello);
  }
  // console.log(hello);
}
renderVaraibles();
hello = "hello1";
// console.log(hello);

/*Points are Noticed:
-------------------

1. if we declare with var in global we can use anywhere 
    and if we declare inside block we use it inside only not access outside

2. inside if block, if we declare a varaible with VAR u can access with in function Scope but not globally

3. but let, keyword not acccess like above

4. name="raju" --> this is global scope we can use it anywhere in the file 

5. check the order of excuting and assigning varaibles
*/

// 3. Redeclartion

var firstName = "raju";
var firstName = "asani";
// console.log(firstName);

//Note:  for var, Redeclaration is Possible

let lastName = "siddu";
// let lastName = "asani";
// console.log(lastName);

//Note:  for let, Redeclaration is not Possible

const getName = "asani raju";
// const getName = "king";
// console.log(getName);

//Note:  for Const, Redeclaration is not Possible

// 4. Reinitialization for primitive data types

var a = 10;
a = 20;
// console.log(a);

//Note:  for var, Reinitialization is Possible

let b = 30;
b = 40;
// console.log(b);
//Note:  for let, Reinitialization is Possible

const PI = 3.14;
// PI = 40;
// console.log(PI);

//Note:  for Const, Reinitialization is not Possible

//  5. Reinitialization for reference data types

const students = [1, 2, 3, 4, 5];
// const students = [1, 2];  -> we can't do this re-assign but we can modify like
students.push(6);

const users = { name: "raju" };
users.age = 20;

console.log(users);

var student = "king";
let mobile = "Poco";

// why we can modify these Objects using const ??????
// the memory allocation is happenin like below

// data_type   varaible    value
// var         student     king
// let         mobile      Poco
// const       students    10001
// const       users       10002

// seperate memory allocation for reference types

// reference_number   value
// 10001              [1,2,3,4,5]
// 10002              {name:"king", age=20}

//  if i assign same reference number to different variable

const teachers = students;

teachers.push(7); // when ever if i do like this it will change for students array as well becuase refrence number is same

// to over come this problem we can remove this conflict using   ...spread operator will create new refernce variable

const teachers1 = [...students];

teachers1.push("king");

console.log(teachers1); //[1, 2, 3, 4, 5, 6, 7, "king"]
console.log(students); //[1, 2, 3, 4, 5, 6, 7]

//for Object also will have same issue to over come that

const admins = JSON.parse(JSON.stringify(users));
admins.phno = 54564;

//JSON.stringify(users) // will convert to string
// JSON.parse(JSON.stringify(users)) // again it will convert to object but it will take new refernce number

console.log(admins); //{name: "raju", age: 20, phno: 54564}
