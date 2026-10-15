const procurarNome = (nomes, nomeBuscado) => {
    for (let nome of nomes) {
        if (nome === nomeBuscado)
        {
            return true;
        }

    }
    return false;
}

console.log(procurarNome(["João", "Maria", "Pedro"], "Maria"));