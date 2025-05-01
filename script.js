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
// caixa.style.backgroundColor = 'lightgreen';
// caixa.style.border = '10px solid black';

// caixa.classList.add('oculta');

const botao = document.getElementById('meuBotao');
botao.addEventListener('click', () => {
    caixa.classList.toggle('oculta');
});

const novoItem = document.createElement('li');

novoItem.textContent = 'Novo item';

document.querySelector('ul').appendChild(novoItem);
