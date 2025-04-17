console.log("Exercício 5 (For)")

numFinal = parseInt(prompt("Digite um número inteiro, e contarei até ele."));

if (isNaN(numFinal)) {
    alert("ERRO! Valor inválido!");
} else {

    for (contador = 1; contador <= numFinal; contador++) {
        console.log(contador);
    }
    console.log("FIM")

    console.log("Exercício 5 (While)")

    contador = 1;
    while (contador <= numFinal) {
        console.log(contador);
        contador++;
    }
    console.log("FIM")

    console.log("Exercício 5 (Do-While)")

    contador = 1;
    do {
        console.log(contador);
        contador++;
    } while (contador <= numFinal)
    console.log("FIM");
}
