const numeros = [1, 2, 3, 4, 5];

const resultado = numeros
                    .filter(n => n % 2 === 0) // [2, 4]
                    .map(n => n * 10);       // [20, 40]

console.log(resultado); // [20, 40]