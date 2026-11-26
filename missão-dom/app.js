console.log('Missão iniciada!');
console.log(document);


//PASSO 3 - Por ID (#)

const titulo = document.querySelector('#titulo');
titulo.textContent ='Aula de DOM';
titulo.style.color = 'red';

//PASSO 4 - Por clase (.)

const p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';

const textos = document.querySelectorAll('.texto');
textos.forEach(p => p.style.color = 'green');

//PASSO 5 - Por tag e combinação

const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '20px';

const campoNome = document.querySelector(
    '.container input[type="text]'
);
campoNome.value = 'Maria';

//PASSO 6 - Texto, HTML e atributos

textos[1].innerHTMl = 'Segundos com <em>ênfase</em>';

const campoEmail = document.querySelector(
    'input[type="email"]'
);
campoEmail.setAttribute('placeholder', 'seu@gmail.com');