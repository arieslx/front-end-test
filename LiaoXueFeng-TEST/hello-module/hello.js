'use strict';

var welcome = 'hello world';
var aboutQuestion = 'how to ask a question, to ask';
function helloWorld(name){
    console.log(welcome +　',' + name + '!');
}

function toAsk(question) {
    console.log(aboutQuestion + question + '!');
}

module.exports = {
    helloWorld : helloWorld,
    toAsk : toAsk
};