// https://adventofcode.com/2018/day/2

const fs = require("fs");
const file = fs.readFileSync("input.txt");
const ids = file.toString().split("\n");

/**
 * Part 1
 */
let two = 0;
let three = 0;

ids.forEach(id => {
  const letters = id.split("");
  const lettersCount = {};

  // Set each letter count to 0.
  letters.forEach(letter => {
    lettersCount[letter] = 0;
  });

  // Increment counts for letters.
  letters.forEach(letter => {
    lettersCount[letter]++;
  });

  // Check if it has 2 letters in common.
  if (Object.values(lettersCount).includes(2)) {
    two++;
  }

  // Check if it has 3 letters in common.
  if (Object.values(lettersCount).includes(3)) {
    three++;
  }
});

console.log(`Checksum: ${two * three}`);

/**
 * Part 2
 */

const pairs = [];
const letterDifferences = [];

// Loop through IDs
ids.forEach(currentId => {
  const currentIdLetters = currentId.split("");

  // Check each ID with the rest of the IDs.
  ids.forEach(compareId => {
    const compareIdLetters = compareId.split("");
    let differences = 0;

    // While there is 1 match or less, check letters.
    // while (differences <= 1) {
    currentIdLetters.forEach((letter, index) => {
      if (letter !== compareIdLetters[index]) {
        differences++;
      }
    });
    // }

    // If there is only 1 letter difference, add it to pairs.
    if (differences === 1 && !pairs.includes(currentId)) {
      pairs.push(currentId, compareId);
    }
  });
});

console.log(`Differences: ${letterDifferences}`);
