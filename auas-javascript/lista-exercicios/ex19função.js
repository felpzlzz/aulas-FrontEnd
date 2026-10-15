function andar (distanciaParede) {
    let passos = 0;
    while(true) {
    passos++;

    if (passos == distanciaParede) {
        console.log("Bateu e parou!");

        break;

        }
    }
}

andar(5);