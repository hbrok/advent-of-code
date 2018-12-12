// https://adventofcode.com/2018/day/4
// Strategy 1: Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?

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
  const minute = parseInt(timestamp.slice(14), 10);

  // console.log(minute);

  return { timestamp, minute, message };
};

const guards = {};
const guardMinutes = {};

// Hold the current guard record so we can sort non-giard hou
let currentGuard;
let asleepMinute;

sortedLogs.forEach(l => {
  const { timestamp, minute, message } = readLog(l);

  // If this log is a guard
  if (message.includes("Guard #")) {
    currentGuard = message.split(" ")[1].slice(1);

    // Init minutes asleep.
    if (!guards[currentGuard]) {
      guards[currentGuard] = 0;
      guardMinutes[currentGuard] = 0;
    }
  }

  if (message.includes("falls asleep")) {
    asleepMinute = minute;
  }

  if (message.includes("wakes up")) {
    for (let i = asleepMinute; i < minute; i++) {
      guards[currentGuard] += 1;

      if (!guardMinutes[currentGuard]) {
        guardMinutes[currentGuard] = {};
      }

      if (!guardMinutes[currentGuard][i]) {
        guardMinutes[currentGuard][i] = 0;
      }

      guardMinutes[currentGuard][i] += 1;
    }
  }
});

const mostAsleep = 0;
let guardIndex = 0;

const maxMinutesAsleep = Object.values(guards).reduce(
  (max, n) => Math.max(parseInt(max), parseInt(n)),
  0
);

function getKeyByValue(object, value) {
  return Object.keys(guards);
}
console.log(Object.keys(guards).find(key => (guardIndex = guards[key])));

// guards.forEach(log => {});

// console.log(sortedLogs);
// console.log(guards);
// console.log(JSON.stringify(guardMinutes));
