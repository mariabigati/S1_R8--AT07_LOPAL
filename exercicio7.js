console.log("Exercício 7 (For e While)");
let primeiroValor = parseInt(prompt("Digite o primeiro valor da contagem."));
let ultimoValor = parseInt(prompt("Digite o último valor da contagem."));
let incremento = parseInt(prompt("Digite o incremento da contagem."));
if (isNaN(primeiroValor) || isNaN(ultimoValor) || isNaN(incremento)) {
    alert("ERRO! Valor inválido!");
} else {
    let contagem = primeiroValor;
    if (primeiroValor > ultimoValor) {
        for (contagem; contagem >= ultimoValor; contagem -= incremento) {
            console.log(contagem);

        } 
        contagem = primeiroValor;
        console.log("FIM");
        while(contagem >= ultimoValor) {
            console.log(contagem);
            contagem -= incremento;
        }
        console.log("FIM");

    } else {
        for (contagem; contagem <= ultimoValor; contagem += incremento) {
            console.log(contagem);
        }
        contagem = primeiroValor;
        console.log("FIM");
        while(contagem <= ultimoValor) {
            console.log(contagem);
            contagem += incremento;
        }
    }
    
}


