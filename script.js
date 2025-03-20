const botaoNao = document.getElementById('nao');
const botaoSim = document.getElementById('sim');
const modal = document.getElementById('myModal');
const conteiner = document.querySelector('.conteiner');        

function moveButton() {
    const containerRect = conteiner.getBoundingClientRect();
    const buttonWidth = botaoNao.offsetWidth;
    const buttonHeight = botaoNao.offsetHeight;
    const simRect = botaoSim.getBoundingClientRect();
    
    let newX, newY;
    
    do{
        newX = Math.random() * (containerRect.width - buttonWidth);
        newY = Math.random() * (containerRect.height - buttonHeight);
    } while (   
        newX < simRect.left - containerRect.left + simRect.width &&
        newX + botaoNao.offsetWidth > simRect.left - containerRect.left &&
        newY < simRect.top - containerRect.top + simRect.height &&
        newY + botaoNao.offsetHeight > simRect.top - containerRect.top
    );
    botaoNao.style.left = `${newX}px`;
    botaoNao.style.top = `${newY}px`;
}   

botaoSim.addEventListener('click', () => {
    modal.style.display = 'flex';
});
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
botaoNao.addEventListener('mouseover', moveButton);
botaoNao.addEventListener('mousemove', moveButton);