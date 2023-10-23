#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput() {
  rl.question(
    'Hello. Enter 10 words or digits deviding them in spaces (or "exit" to quit): ',
    (input) => {
      if (input === "exit") {
        rl.close();
        return;
      }

      const inputArray = input.split(" ");
      processUserChoice(inputArray);
    }
  );
}

function processUserChoice(inputArray) {
  rl.question(
    "How would you like to sort values:\n" +
      "1. Words by name (from A to Z)\n" +
      "2. Show digits from the smallest\n" +
      "3. Show digits from the bigest\n" +
      "4. Words by quantity of leters\n" +
      "5. Show only unique words\n" +
      "Select (1-5) and press ENTER: ",
    (choice) => {
      switch (choice) {
        case "1":
          const sortedWords = inputArray.filter((item) => isNaN(item)).sort();
          console.log(sortedWords.join(" "));
          break;
        case "2":
          const sortedNumbersAsc = inputArray
            .filter((item) => !isNaN(item))
            .sort((a, b) => a - b);
          console.log(sortedNumbersAsc.join(" "));
          break;
        case "3":
          const sortedNumbersDesc = inputArray
            .filter((item) => !isNaN(item))
            .sort((a, b) => b - a);
          console.log(sortedNumbersDesc.join(" "));
          break;
        case "4":
          const wordsByLength = inputArray
            .filter((item) => isNaN(item))
            .sort((a, b) => a.length - b.length);
          console.log(wordsByLength.join(" "));
          break;
        case "5":
          const uniqueWordsAndNumbers = Array.from(
            new Set(inputArray.filter((item) => isNaN(item)))
          );
          console.log(uniqueWordsAndNumbers.join(" "));
          break;
        default:
          console.log("Invalid choice. Select (1-5) and press ENTER:");
          break;
      }
      getUserInput();
    }
  );
}

getUserInput();
