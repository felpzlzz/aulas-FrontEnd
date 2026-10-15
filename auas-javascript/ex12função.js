const aprovados = (notas) => {
    for (let nota of notas){
        if (nota >= 7){
            console.log(nota);
        }
    }
}
aprovados([5, 8 ,6 ,9 ,7]);