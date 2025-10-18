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

