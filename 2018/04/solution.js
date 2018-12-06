// https://adventofcode.com/2018/day/4

const fs = require("fs");
const file = fs.readFileSync("input.txt");
const logs = file.toString().split("\n");

const sortedLogs = logs.sort((a, b) => {
  // Compare timestamps.
  return a.slice(1, 17) < b.slice(1, 17) ? -1 : 1;
});

const readLog = log => {
  const timestamp = log.slice(1, 17);
  const message = log.slice(19);

  return { timestamp, message };
};

const guards = {};

let currentGuard;

sortedLogs.forEach(l => {
  const log = readLog(l);

  if (log.message.includes("Guard #")) {
    currentGuard = log.message.split(" ")[1].slice(1);
    guards[currentGuard] ? null : (guards[currentGuard] = []);
  }

  guards[currentGuard].push(log);
});

console.log(guards);
