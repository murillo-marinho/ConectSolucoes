var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
        document.body.classList.remove('no-scroll'); 
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
        document.body.classList.add('no-scroll');
    }
});




function search() {
    const query = document.querySelector('.search input').value;
    alert('Você pesquisou por: ' + query);
}

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++
    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

function scrollEsquerda() {
    const carrossel = document.getElementById('carrossel');
    carrossel.scrollBy({
        left: -400,
        behavior: 'smooth'
    });
}

function scrollDireita() {
    const carrossel = document.getElementById('carrossel');
    carrossel.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const departamentoMenu = document.querySelector('.departamento-menu');
    const departamentoIcon = document.querySelector('.departamento-icon');

    departamentoMenu.addEventListener('mouseenter', () => {
        departamentoIcon.src = 'img/menu-verde.png'; // Ícone que aparece ao passar o mouse
        departamentoMenu.querySelector('a').style.color = '#003b31'; // Muda a cor do texto
    });

    departamentoMenu.addEventListener('mouseleave', () => {
        departamentoIcon.src = 'img/menu-branco.png'; // Ícone original
        departamentoMenu.querySelector('a').style.color = 'white'; // Muda a cor do texto de volta
    });
});


