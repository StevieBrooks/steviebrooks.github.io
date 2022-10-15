let userName = "";
let userQuestion = "";

let uNameNum = Math.ceil(Math.random() * 5);
switch (uNameNum) {
  case 1: 
    userName = "Bill";
    break;
  case 2:
    userName = "Ben";
    break;
  case 3:
    userName = "Molly";
    break;
  case 4:
    userName = "Teddy";
    break;
  case 5:
    userName = "Frank";
    break;
}

let uQuesNum = Math.ceil(Math.random() * 3);
switch (uQuesNum) {
  case 1:
    userQuestion = "How can I achieve success?";
    break;
  case 2:
    userQuestion = "When will I die?";
    break;
  case 3:
    userQuestion = "Am I good looking?";
    break;
}

let answerBot = "Answer Bot";
let botAnswer = "";
let botAnswerSuc = "";
let botAnswerDie = "";
let botAnswerLook = "";

let replySuc = Math.ceil(Math.random() * 3);
switch (replySuc) {
  case 1:
    botAnswerSuc = "By working very hard.";
    break;
  case 2:
    botAnswerSuc = "By sponging off family.";
    break;
  case 3: 
    botAnswerSuc = "By getting a good education.";
    break;
}

let replyDie = Math.ceil(Math.random() * 3);
switch (replyDie) {
  case 1:
    botAnswerDie = "When you are very old.";
    break;
  case 2:
    botAnswerDie = "When you have lost the will to live.";
    break;
  case 3:
    botAnswerDie = "You will never die because you are invincible!";
    break;
}

let replyLook = Math.ceil(Math.random() * 3);
switch (replyLook) {
  case 1:
    botAnswerLook = "You are more attractive than a winning lottery ticket!";
    break;
  case2:
    botAnswerLook = "Hell yes, you are one in a million!";
    break;
  case 3:
    botAnswerLook = "You truly are a sight for sore eyes!";
    break;
}

if(userQuestion.includes("success")) {
  botAnswer = botAnswerSuc;
}
else if(userQuestion.includes("die")) {
  botAnswer = botAnswerDie;
}
else if(userQuestion.includes("looking")) {
  botAnswer = botAnswerLook;
}
else {
  botAnswer = "Sorry, that does not compute!";
}




console.log(`${userName} asks: ${userQuestion}
            ${answerBot} replies: ${botAnswer}`);