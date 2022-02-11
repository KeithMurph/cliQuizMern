#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

import { createSpinner } from "nanospinner";

// faster console.log
let c = console.log.bind();

let playerName;

// used in welcome function as a timeout
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

// welcome function
async function welcome() {
  const rainbowText = chalkAnimation.glitch("So you think you know MERN? \n ");
  await sleep();
  rainbowText.stop();

  // How to play presented after welcome function
  c(`${chalk.white.bgBlue("HERES THE THING")}
    Lets see if you are ready to work today.
    Some basic questions to start your day.
    If you get any question wrong you will have to  ${chalk.white.bgRed(
      "START OVER"
    )}
    ${chalk.underline.white("good luck <3")}
    `);
}

// ask name function
async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });
  playerName = answers.player_name;
}

// confirm you're ready
async function confirm() {
  const answers = await inquirer.prompt({
    name: "confirm",
    type: "list",
    message: "Are you ready?",

    choices: ["Yes", "No"],
  });
  return handleConfirm(answers.confirm == "Yes");
}

// double confirm
async function confirm1() {
  const answers = await inquirer.prompt({
    name: "confirm1",
    type: "list",
    message: "Are you SURE?",

    choices: ["Yes", "No"],
  });
  return handleConfirm(answers.confirm1 == "Yes");
}

// handles confirm
async function handleConfirm(isCorrect) {
  await sleep();

  if (isCorrect) {
  } else {
    process.exit(1);
  }
}

// question  basic js Q1
async function question() {
  const answers = await inquirer.prompt({
    name: "question",
    type: "list",
    message:
      "Which of the following object functions returns the value of the number? \n",
    choices: ["valueOf()", "toString()", "toInt()", "toLocaleString()"],
  });

  return handleAnswer(answers.question == "valueOf()");
}

// question 1 basic js Q2
async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message:
      "Which method adds one or more elements to the end of an array and returns the new length of the array? \n",
    choices: ["last()", "put()", "push()", "pop()"],
  });

  return handleAnswer(answers.question_1 == "push()");
}

//  Question 2  react Q1
async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What is the command to create a new React project \n",
    choices: [
      "npx create-react-app newApp",
      "npx create-react-app",
      "npm create-react-app newApp",
      "npm hail-zuck",
    ],
  });
  return handleAnswer(answers.question_2 == "npx create-react-app newApp");
}

// Question 3   Node Q1
async function question3() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "Node Js is____? \n",
    choices: ["Asynchronous", "Synchronous"],
  });
  return handleAnswer(answers.question_3 == "Asynchronous");
}

// Question 4 Node Q2
async function question4() {
  const answers = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "What does npm stand for? \n",
    choices: [
      "Node Project Manager ",
      "New Package Manager",
      "Node Package Manager",
      "New Project Manager",
    ],
  });
  return handleAnswer(answers.question_4 == "Node Package Manager");
}

// Question 5  Mongo Q1
async function question5() {
  const answers = await inquirer.prompt({
    name: "question_5",
    type: "list",
    message: "What kind of database is MongoDB? \n",
    choices: [
      "Graph Oriented",
      "Document Oriented",
      "Key Value Pair",
      "Column Based",
    ],
  });
  return handleAnswer(answers.question_5 == "Document Oriented");
}

// Question 6  Mongo Q2
async function question6() {
  const answers = await inquirer.prompt({
    name: "question_6",
    type: "list",
    message: "What Language is MongoDB written in? \n",
    choices: ["C++", "JavaScript", "C", "All of the above"],
  });
  return handleAnswer(answers.question_6 == "All of the above");
}

// Question 7  React Q2
async function question7() {
  const answers = await inquirer.prompt({
    name: "question_7",
    type: "list",
    message: "In a React component how many elements can be returned? \n",
    choices: [
      "Unlimited",
      "2",
      "0",
      "1",
    ],
  });
  return handleAnswer(answers.question_7 == "1");
}

// express Q1
async function question8() {
    const answers = await inquirer.prompt({
      name: "question_8",
      type: "list",
      message: "The method of using values is called? \n",
      choices: [
        "Filters",
        "Inheritance",
        "Interpolation",
        "Includes",
      ],
    });
    return handleAnswer(answers.question_8 == "Interpolation");
  }

  // express Q2
async function question9() {
    const answers = await inquirer.prompt({
      name: "question_9",
      type: "list",
      message: "To use Mongo with Express.js, we need a client API for node? \n",
      choices: [
        "True",
        "False",
      ],
    });
    return handleAnswer(answers.question_9 == "True");
  }

// handles the outcome answers
async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That is correct!` });
  } else {
    spinner.error({ text: `💀 💀 💀 Your not ready  ${playerName}....` });
    process.exit(1);
  }
}

// winner! ASCII art generated with figlet
function winner() {
  console.clear();
  const msg = `CONGRATS ${playerName} !! \n  `;

  figlet(msg, (err, data) => {
    c(gradient.mind.multiline(data));
  });
}

await welcome();
await askName();
await confirm();
await confirm1();
c("chill");
await question();
await question1();
await question7();
await question2();
await question3();
await question4();
await question5();
await question6();
await question8();
await question9();
await winner();
