const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);            
}


btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber();
    console.log('Chiffre dans le tableau: ' + randomNumber);
    // des fois il va même pas dans la boucle
    // le body style est en retard de 1  

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 

});

