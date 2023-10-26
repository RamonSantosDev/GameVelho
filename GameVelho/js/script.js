const velho = document.querySelector('.velho')
const pipe = document.querySelector('.pipe')
let score = 0;

const updateScore = () => {
  score++;
  document.getElementById('score').innerText = `Pontuação: ${score}`;
};

const resetScore = () => {
    score = 0;
    document.getElementById('score').innerText = `Pontuação: ${score}`;
  };

const jump = () => {
    velho.classList.add('jump')

    setTimeout(() =>{
    velho.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const velhoPosition = +window.getComputedStyle(velho).bottom.replace('px', '');

    if(pipePosition <= 110 && pipePosition > 0 && velhoPosition < 110) {

        pipe.style.animation = 'none';  
        pipe.style.left = '${pipePosition}px'; 
        
        velho.style.animation = 'none';  
        velho.style.bottom = '${velhoPosition}px';

        velho.src = "./images/velhocaiu.png";
        velho.style.width = '350px'
        velho.style.marginLeft = '50px'

        clearInterval(loop);

    }
    
    if (pipePosition < 0) {
        updateScore(); // Incrementar a pontuação quando o personagem passar pelo cano
      }
}, 10);

document.addEventListener('keydown', jump)