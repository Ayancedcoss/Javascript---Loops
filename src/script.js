// -----------------Array exercise -1 -----------
const cars = ["saab", "volvo", "BMW"];
console.log(cars[1]);

// ----------------Array exercise - 2 -----------
const fruits = ["banana", "mango", "apple"];
console.log(fruits.pop());
document.getElementById('demo').innerHTML = fruits.pop();

// ----------------Array exercise - 3---------
const fruits_1 = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits_1.sort());

// ----------------date exercise - 4---------
const d = new Date();
// alert(d);

// ----------------date exercise - 5---------
var d1 = new Date();
year = d.getFullYear();
console.log(year);

// ----------------date exercise - 6---------
var d2 = new Date();
month = d.getMonth();
console.log(month);

// ----------------date exercise - 7---------
var d3 = new Date();
console.log(d.getFullYear(2022));

// ----------------date exercise - 8---------
const d4 = new Date();
console.log(d.setFullYear(2020));

// ----------------Math Method exercise - 9---------
let r = Math.random();
console.log(r);
// ----------------Math Method exercise - 10---------
let x = Math.max(10, 20);
console.log(x);
// ----------------Math Method exercise - 11---------
let y = Math.round(5.3);
console.log(y);
// ----------------Math Method exercise - 12---------
let z = Math.sqrt(9);
console.log(z);
// ----------------Comparison exercise - 13---------
var m  = 10;
var n = 5;
// alert(m>n);
// ----------------Comparison exercise - 14---------
var m  = 10;
var n = 10;
// alert(m == n);
// ----------------Comparison exercise - 15---------
x = 10;
y = 5;
// alert(x != y);
// ----------------Comparison exercise - 16---------
var age = n;
var voteable = (age <18)?"Too young":"Old enough";
// alert(voteable);

// ----------------if else exercise - 17---------
if (x > y){
// alert("Hello World");
}

// ----------------if else exercise - 18---------
if(x >y) {
//   alert("Hello World");
} else
 {
//   alert("Goodbye");
}
// ----------------Switch exercise - 19---------

switch(fruits) {
  case"Banana":
    // alert("Hello");
    break;
  case"Apple":
    // alert("Welcome");
    break;    
}
// ----------------Switch exercise - 20---------
switch(fruits) {
    case "Banana":
    //   alert("Hello")
      break;
    case "Apple":
    //   alert("Welcome")
      break;
    default:
//    alert("Neither");
  }
// ---------------- for loop exercise - 21---------
let i;
for(i=0; i<10; i++){
  console.log(i);
}
// ---------------- for loop exercise - 22---------
const fruitss = ["Apple", "Banana", "Orange"];
for(x of fruitss){
  console.log(x);
}

// ----------------  while loop exercise - 23---------
// let l = 0;
// while(l<10) {
//   console.log(l);
//   i++
// }
// ----------------  while loop exercise - 24---------
let j = 0;
while (j < 10) {
  console.log(j);
j = j + 2;
}
// ----------------  break loop exercise - 25---------
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}
// ----------------  break loop exercise - 26---------
for (i = 0; i < 10; i++) {
  if (i == 5) {
    
continue
;
  }
  console.log(i);
}
// ----------------  break loop exercise - 27---------

document.getElementById("demo1").innerHTML = "Hello";