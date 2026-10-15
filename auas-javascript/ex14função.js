const totalCompra = (precos) => {
    let total = 0;

    for (let preco of precos) {
        total = total + preco;
    }
    return total;
}

console.log(totalCompra([10, 30]));