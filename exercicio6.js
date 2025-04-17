console.log("Exercício 6 (For)")

for (contador = 30 ; contador >= 1 ; contador--) {
    if (contador % 4 == 0) {
        console.log(`[${contador}]`);
    } else {
        console.log(contador);
    }
}

console.log("Exercício 6 (While)")

contador = 30;
while (contador >= 1) {
    if (contador % 4 == 0) {
        console.log(`[${contador}]`);
        contador--;
    } else {
        console.log(contador);
        contador--;
    }
} 

console.log("Exercício 6 (Do-While)")

contador = 30;
do {
    if (contador % 4 == 0) {
        console.log(`[${contador}]`);
        contador--;
    } else {
        console.log(contador);
        contador--;
    }
} while (contador >= 1)
