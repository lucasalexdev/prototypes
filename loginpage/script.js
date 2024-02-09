// Obtém a referência ao elemento container pelo seu ID
const container = document.getElementById('container');

// Obtém a referência aos botões de registro e login pelo seus IDs
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Adiciona um ouvinte de evento para o clique no botão de registro
registerBtn.addEventListener('click', () => {
    // Adiciona a classe "active" ao elemento container
    container.classList.add("active");
});

// Adiciona um ouvinte de evento para o clique no botão de login
loginBtn.addEventListener('click', () => {
    // Remove a classe "active" do elemento container
    container.classList.remove("active");
});