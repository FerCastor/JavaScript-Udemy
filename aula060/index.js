// Funções recursivas - é uma função que se chama de volta. A preocupação do programador deve ser quando a função recursiva irá parar a execução.

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);