#! /usr/bin/env node


import inquirer from "inquirer"

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: "What is the correct way to check if two values are not equal in Typescript?",
    choices: ["a == b", "a === b", "a = b", "a !== b"]

  },
  {
    name: "question_2",
    type: "list",
    message: "Which of the following characters is commonly allowed in variable names in Typescript?",
    choices: ["$", "@", "#", "&"]

  },
  {
    name: "question_3",
    type: "list",
    message: "Which operator is commonly used for string concatenation in Typescript?",
    choices: ["+", "-", "*", "/"]

  },
  {
    name: "question_4",
    type: "list",
    message: "What is the extension used for compiling ts file into js?",
    choices: ["tt", ".tf", "tsc", "npm"]

  },
  {
    name: "question_5",
    type: "list",
    message: "Which method of Inquirer.js is used to start the prompt interface and recieve user input?",
    choices: ["start()", "prompt()", "init()", "run()"]

  }

])

let score: number = 0

switch(quiz.question_1) {
    case "a !== b":
     console.log("1. Correct");
     ++score;
     break;
     default: 
     console.log("1. Incorrect");
    
}

switch(quiz.question_2) {
    case "$":
     console.log("2. Correct");
     ++score;
     break;
     default: 
     console.log("2. Incorrect");
    
}

switch(quiz.question_3) {
    case "+":
     console.log("3. Correct");
     ++score;
     break;
     default: 
     console.log("3. Incorrect");
    
}

switch(quiz.question_4) {
    case "tsc":
     console.log("4. Correct");
     ++score;
     break;
     default: 
     console.log("4. Incorrect");
    
}

switch(quiz.question_5) {
    case "prompt()":
     console.log("5. Correct");
     ++score;
     break;
     default: 
     console.log("5. Incorrect");
    
}

console.log(`Score: ${score} `);

