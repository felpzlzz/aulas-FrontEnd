const verificarFrete = (valor) => 
    valor > 150? "Frete Grátis":
"Cobrar Frete";
console.log(verificarFrete(200));
console.log(verificarFrete(100));