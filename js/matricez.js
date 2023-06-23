
// //1
// let matriz = [
//     [1, 3, 5],
//     [8, 9, 6],
//     [2, 4, 7],
// ];
// console.log("matriz")
// for (let i = 0; i < matriz.length; i++) {
//     console.log(matriz[i].join("\t"))
// }

// //2
// function suma(matriz1, matriz2) {
//     let resultado = [];
//     for (let i = 0; i < matriz1.length; i++) {
//         let fila = [];
//         for (let j = 0; j < matriz1[i].length; j++) {
//             fila.push(matriz1[i][j] + matriz2[i][j]);
//         }
//         resultado.push(fila);
//     }
//     return resultado;
// }
// let matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matriz2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
// let sumar = suma(matriz1, matriz2);
// console.log(sumar);

// //3
// function sumaV(vectorA, vectorB) {
//     let resultado = [];
//     for (let i = 0; i < vectorA.length; i++) {
//         resultado.push(vectorA[i] + vectorB[i]);
//     }
//     return resultado;
// }
// vectorA = [1, 2, 3]
// vectorB = [3, 2, 1]
// let sumas = sumaV(vectorA, vectorB)
// console.log(sumas)

// //4
// function matrizDiagonal(matrizD) {
//     for (let i = 0; i < matrizD.length; i++) {
//         for (let j = 0; j < matrizD[i].length; j++) {
//             if (i !== j && matrizD[i][j] !== 0) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// let matrizD = [[1, 0, 0], [0, 2, 0], [0, 0, 9]]
// console.log(matrizDiagonal(matrizD))
// let = otraMatriz = [[1, 2, 5], [6, 5, 3], [7, 8, 9]]
// console.log(matrizDiagonal(otraMatriz))

//5
function crearMatriz(n) {

    let matriz = [];
    for (let i = 0; i < n; i++) {

        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]`));
        }
    }
    return matriz;

}
let n = parseInt(prompt(`ingrese la longitud de la matriz`))
let miMatriz = crearMatriz(n);
let matriz2 = crearMatriz(n)
console.log(miMatriz);
console.log(matriz2);

function sumarM(miMatriz, matriz2) {
    let resultado = [];
    for (let i = 0; i < miMatriz.length; i++) {
        let fila = []
        for (let j = 0; j < miMatriz[i].length; j++) {
            fila.push(miMatriz[i][j] + matriz2[i][j])

        }
        resultado.push(fila)
    }
    return resultado
}

let sumar = sumarM(miMatriz, matriz2);
console.log(sumar)

