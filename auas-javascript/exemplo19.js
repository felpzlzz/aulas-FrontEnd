const pessoa = { nome: 'Ana', idade: 20 };

for (const chave in pessoa) {
  console.log(chave, ':', pessoa[chave]);
}