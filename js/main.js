// Controle do menu ícone (hambúrguer)
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

// Função de pesquisa
function search() {
    const query = document.querySelector('.search input').value;
    alert('Você pesquisou por: ' + query);
}

// Controle do carrossel de imagens automático
var radio = document.querySelector('.manual-btn');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;
    if (cont > 4) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
}

// Função de rolar carrossel manualmente
function scrollEsquerda() {
    const carrossel = document.getElementById('carrossel');
    carrossel.scrollBy({
        left: -400,
        behavior: 'smooth',
    });
}

function scrollDireita() {
    const carrossel = document.getElementById('carrossel');
    carrossel.scrollBy({
        left: 400,
        behavior: 'smooth',
    });
}

// Efeito no menu do departamento
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

// Controle de carrossel de produtos
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');
const totalItems = document.querySelectorAll('.product-service-item').length;
let currentIndex = 0;

function updateCarousel() {
    const offset = -(currentIndex * 220); // Ajuste o valor conforme necessário
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Controle de login com menu suspenso
document.addEventListener('DOMContentLoaded', () => {
    const userArea = document.getElementById('loginBtn');
    const dropdownMenu = document.getElementById('userMenu');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginButton = document.getElementById('loginButton');
    let isLoggedIn = false; // Simulação de estado de login

    // Mostra ou esconde o menu suspenso ao clicar na área do usuário
    userArea.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita conflitos com outros eventos de clique
        if (isLoggedIn) {
            dropdownMenu.style.display =
                dropdownMenu.style.display === 'block' ? 'none' : 'block';
        } else {
            alert('Você precisa estar logado!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        }
    });

    // Fecha o menu ao clicar fora
    window.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });

    // Botão de logout
    logoutBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita fechar o menu ao clicar em "Sair"
        isLoggedIn = false; // Define o estado como deslogado
        alert('Você saiu com sucesso!');
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
});

// Modal de agendamento
function checkLogin() {
    if (isLoggedIn) {
        openModal();
    } else {
        alert('Você precisa estar logado para realizar um agendamento.');
        window.location.href = 'login.html'; // Redireciona para a página de login
    }
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
