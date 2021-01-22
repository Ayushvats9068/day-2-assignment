// What will the code below output to the console and why ?
console.log(1 + "2" + "2"); // output: 122 because it cancatenates the string format.
console.log(1 + +"2" + "2"); // output: 32 beacuse it has 1 + + "2" it add perform addition operation.
console.log(1 + -"1" + "2"); // output: 02 because it perform minus operation.
console.log(+"1" + "1" + "2"); // output: 112 because it perform cancatenation of a string.
console.log("A" - "B" + "2"); // output: NaN2 because string can't be perform delete operation and it add "2" as cancatenate the string.
console.log("A" - "B" + 2); //output: NaN because string can't be perform delete operation and it not add "2"  because its a integer.