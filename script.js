const titulo = document.querySelector('h1');

titulo.textContent = 'Novo Título'; // Altera o texto interno

console.log(titulo)

const div = document.querySelector('#container');

div.innerHTML = '<h1>Novo parágrafo com HTML</h1>';

const imagem = document.querySelector('img');

// src="images/avatar.jpg"

imagem.setAttribute('src', 'images/avatar.jpg');

imagem.alt = 'Avatar de Usuário';

const caixa = document.querySelector('.box');
caixa.style.backgroundColor = 'lightgreen';
caixa.style.border = '10px solid black';

caixa.classList.add('oculta');

const botao = document.getElementById('meuBotao');
botao.addEventListener('click', () => {
    caixa.classList.toggle('oculta');
});

const novoItem = document.createElement('li');

novoItem.textContent = 'Novo item';

document.querySelector('ul').appendChild(novoItem);


localStorage.setItem('nome', 'Daniel')

const nome = localStorage.getItem('nome')

console.log(nome)

const tagNome = document.querySelector('#nome')

tagNome.textContent = nome

localStorage.removeItem('nome');

const usuario = { nome: 'Lucas', idade: 25 };
localStorage.setItem('usuario', JSON.stringify(usuario));

const recuperado = localStorage.getItem('usuario');
console.log(recuperado);
console.log(JSON.parse(localStorage.getItem('usuario')));
console.log(recuperado.nome);