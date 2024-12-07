// Elementos
const loginBtn = document.getElementById('loginBtn'); // Botão de login
const loginLi = document.getElementById('loginLi'); // Li que contém o botão de login
const loginModal = document.getElementById('loginModal'); // Modal de login/cadastro
const closeModalBtn = document.querySelector('.close-btn'); // Botão para fechar o modal

const loginTab = document.getElementById('loginTab'); // Aba de Login
const registerTab = document.getElementById('registerTab'); // Aba de Cadastro
const loginForm = document.getElementById('loginForm'); // Formulário de Login
const registerForm = document.getElementById('registerForm'); // Formulário de Cadastro

// Criar o menu suspenso para "Sair"
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.innerHTML = '<button id="logoutButton">Sair</button>';
dropdownMenu.style.display = 'none'; // Oculto inicialmente
document.body.appendChild(dropdownMenu);

// Função para verificar se o usuário está logado e atualizar o botão de login
function updateLoginState() {
  const loggedInUser = localStorage.getItem('username'); // Verifica se o nome está salvo
  if (loggedInUser) {
    loginLi.textContent = loggedInUser; // Substitui o texto do li pelo nome do usuário
    loginLi.style.cursor = 'pointer'; // Adiciona cursor pointer

    // Exibir menu suspenso ao clicar no botão de login
    loginBtn.addEventListener('click', function () {
      if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block'; // Exibe o menu suspenso
        const rect = loginBtn.getBoundingClientRect();
        dropdownMenu.style.position = 'absolute';
        dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
        dropdownMenu.style.left = `${rect.left}px`;
      } else {
        dropdownMenu.style.display = 'none'; // Oculta o menu suspenso
      }
    });

    // Logout (remover o usuário do localStorage)
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function () {
      localStorage.removeItem('username'); // Remove o nome do usuário
      dropdownMenu.style.display = 'none'; // Oculta o menu suspenso
      location.reload(); // Recarrega a página
    });
  }
}

// Função para exibir o modal
function showModal() {
  loginModal.style.display = 'flex'; // Exibe o modal
}

// Função para fechar o modal
function closeModal() {
  loginModal.style.display = 'none'; // Esconde o modal
}

// Função para salvar o nome de usuário no localStorage e atualizar a interface
function saveUserAndRedirect(username) {
  localStorage.setItem('username', username); // Salva o nome no localStorage
  loginLi.textContent = username; // Atualiza o li com o nome do usuário
  closeModal(); // Fecha o modal
  updateLoginState(); // Atualiza o estado de login
}

// Registrar usuário
registerForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o comportamento padrão do formulário
  const username = document.getElementById('register-username').value.trim();
  if (username) {
    saveUserAndRedirect(username);
  } else {
    alert('Por favor, insira um nome de usuário.');
  }
});

// Login: Capturar Nome de Usuário
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o comportamento padrão do formulário
  const username = document.getElementById('username').value.trim();
  if (username) {
    saveUserAndRedirect(username);
  } else {
    alert('Por favor, insira um nome de usuário.');
  }
});

// Alternar entre login e cadastro
loginTab.addEventListener('click', function () {
  loginTab.classList.add('active'); // Aba de login ativa
  registerTab.classList.remove('active'); // Remove a classe ativa do cadastro
  loginForm.classList.add('active'); // Exibe o formulário de login
  registerForm.classList.remove('active'); // Esconde o formulário de cadastro
});

registerTab.addEventListener('click', function () {
  registerTab.classList.add('active'); // Aba de cadastro ativa
  loginTab.classList.remove('active'); // Remove a classe ativa do login
  registerForm.classList.add('active'); // Exibe o formulário de cadastro
  loginForm.classList.remove('active'); // Esconde o formulário de login
});

// Fechar o modal ao clicar no botão de fechar
closeModalBtn.addEventListener('click', closeModal);

// Fechar o modal ao clicar fora dele
window.addEventListener('click', function (e) {
  if (e.target === loginModal) {
    closeModal();
  }
});

// Exibir o modal ao clicar no botão de login (se não estiver logado)
loginBtn.addEventListener('click', function () {
  const loggedInUser = localStorage.getItem('username');
  if (!loggedInUser) {
    showModal();
  }
});

// Verificar estado do login ao carregar a página
window.addEventListener('DOMContentLoaded', updateLoginState);
