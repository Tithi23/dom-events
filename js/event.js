// handle red button
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function  name

const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);
// just set the of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle green button 
const greenButton = document.getElementById('make-green-button');
// console.log(greenButton);
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'Green';
}
// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'Green';
}


// handle by using add eventlisenter
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


// handle hotpink button
const pinkButton = document.getElementById('make-hotpink');
pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shotcut handle lightblue button 
// direct shortcut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})