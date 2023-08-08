/*
    Primitivos (imutáveis) - String, Number, Boolean, Undefined, Null, (bigint, symbol) -> Valores copiados
    Podemos mudar o valor dentro da variável, mas não declarar a variável mais de uma vez

    Referência (mutável) - array, object, function -> Valores passados por referência
    */

    let a = [1, 2, 3];
    let b = a; // É a mesma coisa que dizer que o b olha para o mesmo lugar que a
    // let b = [...a] // Pega os valores de b e colocam dentro de a, criando um novo espaço na memória para b, que será independente de a
    let c = b

    console.log(a, b);

    a.push(4)
    console.log(a, b);
    
    b.pop();
    console.log(a, b);
    console.log(c);

