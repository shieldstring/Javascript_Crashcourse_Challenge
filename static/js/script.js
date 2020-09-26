function ageInDays(){
    var birthyear = prompt('what year were you born?');
    var ageInDayss = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// challenge 2: cat generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src ="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}


// chanllenge 3: Rock, papper and scissor
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    // humanChoice = yourChoice.id; 
    // botChoice
    // results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won. versa
    // message = finalMessage(results); // {'message': you won', 'color':'green' }
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
 