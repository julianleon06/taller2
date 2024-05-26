// 2. Completa la función `operation` para que realice las 4 operaciones básicas: suma, resta, multiplicacion y division. Dicha funcion debe tomar 3 argumentos: el operador, el primer valor y el segundo valor, además debe retornar el resultado.

//     ```
//     function operation( operator, firstValue, secondValue ) {
//         // Escribe la lógica de tu solución aquí
        
//         return result;
//     }
//     ```

//     Al invocar la funcion `operation` condiferentes argumentos los resultados deberían ser los siguientes:

//     ```
//     ('+', 3, 6) --> 9
//     ('-', 7, 3) --> -4
//     ('*', 9, 9) --> 81
//     ('/', 15, 3) --> 5
//     ```

function operation(operator, firstValue, secondValue) {
    let result;

    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            if (secondValue !== 0) {
                result = firstValue / secondValue;
            } else {
                result = "Error: División por cero";
            }
            break;
        default:
            result = "Operador no válido";
    }

    return result;
}

console.log(operation('+', 3, 6));  
console.log(operation('-', 7, 3));  
console.log(operation('*', 9, 9));  
console.log(operation('/', 15, 3)); 
