let name = prompt('Введите своё имя','');
let count = 0;

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event){
    jump();
});

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add ('jump');
        count++;
        console.log(count)
    }
    setTimeout(function() {
        dino.classList.remove('jump'); 
    }, 300);
}
let isAlive = setInterval(function() {
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusleft < 60 && cactusleft > 0 && dinotop >= 140) {
        if (count > 0) {
            alert(`Поздравляю ${name}, ты перепрыгнул ${count - 1} кактусов`);
            count = 0;
        }
    }
}, 10);