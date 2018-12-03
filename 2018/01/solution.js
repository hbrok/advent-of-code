// https://adventofcode.com/2018/day/1

const fs = require("fs");
const data = fs.readFileSync("input.txt");

// Part 1
const numbers = data
  .toString()
  .split("\n")
  .map(Number)
  .reduce((prev, current) => prev + current);

console.log(numbers);

// Part 2
// https://adventofcode.com/2018/day/1#part2
