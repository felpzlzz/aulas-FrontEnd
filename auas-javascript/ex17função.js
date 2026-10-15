function mostrarBissextos(anoFinal) {
    for (let ano = 2000; ano <= anoFinal; ano++) {
        if (ano % 4 === 0) {
            console.log(ano);
        }
    }
}

mostrarBissextos(2024);