// Arrays (básico) -- No JS é possível alterar o tipo da array para qualquer outro tipo a qualquer momento
const alunos = ['Luiz', 'Maria', 'João']

console.log(alunos instanceof Array) // Verifica se a variável é um array


console.log(alunos);


// console.log(alunos.slice(0, 3)) // Retorna os valores que estão dentro do range declarado (no caso vai do primeiro até o terceiro item)
// console.log(alunos.slice(0, -1)) // Retorna os valores que estão dentro do range declarado (no caso vai do primeiro até o penúltimo item [pode aumentar o valor negativo])

// delete alunos[1]; // Remove o valor e deixa a posição vazia

// const removido = alunos.pop() // Salva o valor removido do array na variável;
// const removido = alunos.shift() // Salva o valor removido do array na variável;

// alunos.shift(); // Remove o primeiro item do array
// alunos.pop(); // Remove o último item do array

// alunos.push('Fernanda'); // Adiciona o valor ao final do array
// alunos.unshift('Jorge'); // Adiciona ao início do array

// alunos[alunos.length] = 'Luiza'; // Adiciona o valor ao final do array
// alunos[0] = 'Eduardo'; // Altera o valor da posição declarada