// Abrir o modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.querySelector('.close-btn');

// Abas de Login/Cadastro
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Exibir modal
loginBtn.addEventListener('click', function () {
  loginModal.style.display = 'flex';
});

// Fechar modal
closeModalBtn.addEventListener('click', function () {
  loginModal.style.display = 'none';
});

// Fechar ao clicar fora do modal
window.addEventListener('click', function (e) {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Alternar entre login e cadastro
loginTab.addEventListener('click', function () {
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
});

registerTab.addEventListener('click', function () {
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
});
