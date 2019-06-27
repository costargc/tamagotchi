var inquirer = require("inquirer");
const CFonts = require('cfonts');

function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function () {
        if (this.hungry == true) {
            CFonts.say('That was yummy!');
            // console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            CFonts.say("No thanks! I'm full.");
            // console.log("No thanks! I'm full.");
            this.bored = true;
        }

    }

    this.sleep = function () {
        if (this.sleepy == true) {
            CFonts.say("Zzzzzzzz");
            // console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            CFonts.say("No way! Not tired.");
            // console.log("No way! I'm not tired.");
            this.bored = true;
        }

    }

    this.play = function () {
        if (this.bored == true) {
            CFonts.say("Yay! Let's play!");
            // console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            CFonts.say("Not right now. Later?");
            // console.log("Not right now. Later?");
        }
    }

    this.increaseAge = function () {
        this.age++;
        
        if (this.age >= 5) {
            CFonts.say("Today is a sad day - your tamagotchi just died. #sad");
            process.exit()
            // console.log("Today is a sad day - your tamagotchi just died. #sad");
        }

        CFonts.say("Its my B-Day! " + this.age + "y old!");
        // console.log("Happy Birthday to me! I am " + this.age + " old!");

    }

}


var tamagotchi = new DigitalPal(false, false, false, 0);


askQuestionagain();
function askQuestionagain() {


    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: "Hi I'm TamagoTchi! What are we going to do?",
                choices: [
                    'feed',
                    'play',
                    'sleep'
                ]
            }
        ])
        .then(answers => {

            switch (answers.selection) {
                case 'feed':
                    console.log('\033[2J');
                    tamagotchi.feed();
                    askQuestionagain();
                    break;

                case 'play':
                    console.log('\033[2J');
                    tamagotchi.play();
                    askQuestionagain();
                    break;

                case 'sleep':
                    console.log('\033[2J');
                    tamagotchi.sleep();
                    askQuestionagain();
                    break;

                default:
                    text = "I don't even know how you got here! That is definetly a bug...";
            }

        })

}
