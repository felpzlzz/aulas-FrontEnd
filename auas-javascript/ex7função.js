const diminuirEnergia = 
function(energia)  {
    while (energia > 0){
        console.log(energia);
        energia = energia - 10;
    }
}
diminuirEnergia(50);