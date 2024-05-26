// 1. Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

//     | Calificación | Equivalente en letras |
//     | ---  | --- |
//     | Entre 4.8 <= 5.0 | E = Excelente |
//     | Entre 4.5 < 4.8 | MB = Muy bueno |
//     | Entre 4.0 < 4.4 | B = Bueno |
//     | Entre 3.5 < 4.0 | A = Aprobado |
//     | Entre 0 < 3.5 | R = Reprobado |

function calcular (nota1,nota2,nota3){
    let promedio = (nota1,nota2,nota3)/3;

    let letra;

    if(promedio >= 4.8 && promedio <= 5.0){
        letra = 'E = Exelente'
    }
    else if(promedio >= 4.5 && promedio <= 4.8){
        letra = 'MB = Muy Bueno'
    } 
    else if(promedio >= 4.0 && promedio <= 4.5){
        letra = 'B = Bueno'
    } 
    else if(promedio >= 3.5 && promedio <= 4.0){
        letra = 'A = Aprobado'
    } 
    else if(promedio >= 0 && promedio <= 3.5){
        letra = 'R = Reprobado'
    } 
    else{
        letra = 'nota invalida'
    }
    return letra;
    
    
}
let resultado = calcular(4.5, 3.8, 4.2);
    console.log(resultado)