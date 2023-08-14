// For Each - disponível somente para percorrer array

const a1 = [10, 20, 30]

// a1.forEach(valor => console.log(valor))

let total = 0;
a1.forEach(valor => {
    total += valor
})

console.log(total)




/* for (let valor of a1) {
    console.log(valor)
} */