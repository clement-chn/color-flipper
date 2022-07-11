const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

let toUpper = document.getElementById('test').textContent;

document.getElementById('test').textContent = toUpper.toUpperCase();


