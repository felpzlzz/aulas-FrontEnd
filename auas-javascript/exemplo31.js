const precos = [5.00, 12.50, 2.50];
const total = precos.reduce((acc, valor) => acc + valor, 0);

console.log(total); // 20