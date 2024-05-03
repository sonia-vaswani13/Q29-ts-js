//Q29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favoritevtFruits = ["apple", "banana", "strawberry",];
if (favoritevtFruits.includes("banana")) {
    console.log("you really like banana!");
}
if (favoritevtFruits.includes("strawberry")) {
    console.log("you relly like strawberry!");
}
if (favoritevtFruits.includes("kiwi")) {
    console.log("you really like kiwi!");
}
else {
    console.log("kiwi is not in your favourite list.");
}
if (favoritevtFruits.includes("cherry")) {
    console.log("you really like cherry!");
}
else {
    console.log("cherry is not in your favourite list");
}
if (favoritevtFruits.includes("apple")) {
    console.log("you really like apple");
}
