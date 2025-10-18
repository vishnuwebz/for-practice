// document.write("<h1>Learn Javascript</h1>")

/* multi line comment */

document.write("Hello");

// varaIBLES AND DATATYPES

// String

var person = "John";
let person1 ="Smith";
document.write(person);
document.write(person1);
document.write("<br>")
document.write(typeof person);



// number
var number1 = 10;
var number2 = 10.17;

document.write("<br>")
document.write(number1);
document.write(number2);
document.write("<br>")
document.write(typeof number1);

// boolean
var js = true;
var html = false;


document.write("<br>")
document.write(js);
document.write(html);
document.write("<br>")
document.write(typeof js);

// undefined
var test1;

document.write("<br>")
document.write(test1);
document.write("<br>")
document.write(typeof test1);

// null
var test2 = null;

document.write("<br>")
document.write(null);
document.write("<br>")
document.write(typeof null);
document.write("<br> <br>")


var per = "John";
document.write(per + "<br>");

per = "Vishnu";
document.write(per + "<br>");

const pi = 3.14;
document.write(pi);
pi = "9";
document.write(pi);

// Operators



// Arithmentic Operators

var a = 90;
var b = 20;

document.write(a + b);
document.write(a - b);
document.write(a / b);
document.write(a * b);
document.write(a % b);
document.write(a ++);

// Assignment Operators

var x = 10;
document.write(x);

// add and assign
var result = x += 4;
document.write(result)

// substract and assign
var result = x -= 5;
document.write(result);

// multiply and assign
var result = x ** 3;
document.write(result)


// Comparison Operators

var a = 10;
var b = 20;

document.write(a == b);

// Identical

document.write(a === b);

 
// if else statement


/*

if(condition){
    execute code;
}

*/

var a = 10;

if(a > 0){
    document.write("Positive Number");
}


a = -10;
if(a < 0){
    document.write("Negative Number");
}

var b = -10;

if(b > 0){
    document.write("Positive Number");
} else {
    document.write("Negative Number");
}

var c = 0;

if(c > 0){
    document.write("Positive Number");
}else if (c < 0){
    document.write("Negative Number");
}else{
    document.write("Zero");
}

// Switch Statements

/*
switch(expression) {
    case1:
        code1;
        break;
    case2:
        code2;
        break;
    case3:
        code3;
        break;
    default:
        code default;
        break;
}
*/


var a = "D";

switch(a){
    case "A":
        document.write("Apple");
        break;
    case "B":
        document.write("Bat");
        break;
    case "C":
        document.write("Cat");
        break;
    default:
        document.write("Invalid Character");
        break;
}

// Loops

for(var i = 10; i <= 15; i++){
    document.write(i + "<br>");
}

document.write("Hey")


// While loop

var i = 1;
while(i<=5){
    document.write(i + "<br>");
    i++;
}



var i = 10;
while(i>=1){
    document.write(i + "<br>");
    i--;
}


//document.write("Hello")

var i = 1;
do{
    document.write("Hello" + "<br>");
    i++;
}while(i<=5);



//document.write("Hello")
document.write("Hello");

for(var i = 1; i <= 5; i++){
    document.write("Hello" + "<br>");
}

// while loop

var i = 1;
while(i<=5){
    document.write("Hello" + "<br>");
    i++
}


// do while loop
var i = 1;
do{
    document.write("Hello" + "<br>");
    i++;
}while(i<=5)


// functions

function greetings(name){
    document.write("Good morning" + name + "<br>");
}

greetings("Webz!");
greetings("Smith!")



function sum(n1, n2){
    document.write(n1 + n2);
}

sum(10, 20);

// functions

function sum(n1, n2){
    return n1 + n2;
}

var result = sum(10, 20);
document.write(result);


// Arrays

var animal = ["Lion", "Tiger", "Cat", "Dog", "Fox"];

document.write(animal  + "<br>");

animal[0] = "Elephant";
document.write(animal[0]);

var x = animal.length;
document.write(x);


for(var i=0; i<x; i++){
    document.write(
        animal[i] + "<br>"
    );
}


// Arrays

var animal = ["Lion", "Tiger", "Cat", "Dog", "Fox"];

document.write(animal  + "<br>");

animal[0] = "Elephant";
document.write(animal[0]);

var x = animal.length;
document.write(x);


for(var i=0; i<x; i++){
    document.write(
        animal[i] + "<br>"
    );
}

animal.push("Rabbit", "Zebra", "Parrot"); // used to add the elements without animals[4] = "Zebra" ,in python it is append
document.write(animal)

animal.shift(); // will deletee the first element
document.write(animal);


animal.pop(); // will delete the last element
document.write(animal);

animal.splice(0,2);  // by using the splice method we can delete our wished item
document.write(animal);

animal.sort(); // will sort in alphabetical order
document.write(animal);

var number = [20, 50, 40, 90, 10];
number.sort();
document.write("<br> <br>" + number);

document.write("<br> <br>" + number[1] + number[4]);