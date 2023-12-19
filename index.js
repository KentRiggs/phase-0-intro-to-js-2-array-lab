// Write your solution here!
// define the array
const cats = ["Milo", "Otis", "Garfield"]; 
// added ralph to the end of the array
function destructivelyAppendCat() {
    cats.push("Ralph");
}
// added bob to the beginning of the array
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
// removed last cat
function destructivelyRemoveLastCat() {
    cats.pop();
}
// removed first cat
function destructivelyRemoveFirstCat() {
    cats.shift()
}
// add a cat to the end of a new array
function appendCat() {
    return [...cats, "Broom"];
}
// add a cat to the beginning of a new array
function prependCat() {
    return ["Arnold", ...cats];
}
// remove last cat and create a new array
function removeLastCat() {
    return cats.slice(0, -1);
  }
// remove first cat and create a new array
function removeFirstCat() {
    return cats.slice(1)
}