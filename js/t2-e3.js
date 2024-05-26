// 3. En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.

//     ```
//         const corrales = [
//             [ 'oveja', 'oveja', '', 'oveja', '' ],
//             [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
//             [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
//         ]
//    ```

//     La siguiente lista `corrales` representa los corrales. 
    
//     Cada posición en la lista contiene un string que indica el estado de un animal:
//     - `oveja`: Oveja sana y salva.
//     - `muerta`: Oveja que necesita ser removida del corral.
//     - `lobo`: ¡Un peligro para las ovejas!
//     - `''`: Un espacio libre en el corral.
   

//    Objetivos:

//    Usando funciones deberás realizar las siguientes tareas:

//     1. **Contar las ovejas vivas:** Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.

//     2. **Contar los espacios libres:** Identifica cuántos espacios vacíos hay en los corrales, considerando que los espacios con animales muertos también deben ser liberados.

//     3. **Neutralizar al lobo:** Si encuentras un lobo en algún corral, elimínalo (imagina que lo conviertes en una útil chaqueta de piel) y cuenta el espacio que deja libre como si estuviera vacío.

//     4. **Incorporar nuevas ovejas:** Utiliza el dinero obtenido por eliminar lobos para comprar 2 nuevas ovejas por cada uno. Busca espacios libres en los corrales para colocarlas y aumentar la población ovina.

const corrales = [
    ['oveja', 'oveja', '', 'oveja', ''],
    ['oveja', 'oveja', 'oveja', 'oveja', ''],
    ['oveja', 'muerta', 'lobo', '', 'muerta']
];

function contarOvejasVivas(corrales) {
    let count = 0;
    corrales.forEach(corral => {
        corral.forEach(animal => {
            if (animal === 'oveja') {
                count++;
            }
        });
    });
    return count;
}

function contarEspaciosLibres(corrales) {
    let count = 0;
    corrales.forEach(corral => {
        corral.forEach(animal => {
            if (animal === '' || animal === 'muerta') {
                count++;
            }
        });
    });
    return count;
}

function neutralizarLobo(corrales) {
    corrales.forEach(corral => {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === 'lobo') {
                corral[i] = '';
            }
        }
    });
}

function incorporarNuevasOvejas(corrales) {
    const precioPorLobo = 2; 
    let countLobos = 0;

    corrales.forEach(corral => {
        for (let i = 0; i < corral.length; i++) {
            if (corral[i] === 'lobo') {
                countLobos++;
                corral[i] = ''; 
            }
        }
    });

    const nuevasOvejas = countLobos * precioPorLobo * 2; 
    let espaciosLibres = contarEspaciosLibres(corrales);
    if (nuevasOvejas <= espaciosLibres) {
        for (let i = 0; i < corrales.length; i++) {
            for (let j = 0; j < corrales[i].length; j++) {
                if (corrales[i][j] === '' && nuevasOvejas > 0) {
                    corrales[i][j] = 'oveja';
                    nuevasOvejas--;
                }
            }
        }
    }
}

console.log("Estado inicial:");
console.log(corrales);

console.log("Ovejas vivas:", contarOvejasVivas(corrales));

console.log("Espacios libres:", contarEspaciosLibres(corrales));

neutralizarLobo(corrales);

incorporarNuevasOvejas(corrales);

console.log("Estado final:");
console.log(corrales);
