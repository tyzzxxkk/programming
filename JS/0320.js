// let colors = ["red", "green", "blue"]
// let [a, b, c] = colors;
// console.log(a, b, c)

// const words = ["apple", "kiwi", "banana", "cat"]
// const res = words.filter(word => word.length >= 5)
// console.log(res)

const numbers = [1, 2, 3, 4, 5, 6];
const res = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
console.log(sum);