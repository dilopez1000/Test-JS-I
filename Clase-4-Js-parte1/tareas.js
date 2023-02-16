// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  if (Array.isArray(array)) {
    let primero;
    [primero] = array;
    return primero;
  }
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return Array.isArray(array) ? array[array.length - 1] : undefined;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return Array.isArray(array) ? array.length : undefined;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  if (Array.isArray(array)) {
    return array.map((elemento) => {
      return elemento + 1
    });
  }
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  if (Array.isArray(array)) {
    array.push(elemento);
    return array;
  }
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  if (Array.isArray(array)) {
    array.unshift(elemento);
    return array;
  }
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:l
  let frase = '';
  if (Array.isArray(palabras)) {
    palabras.forEach(palabra => {
      frase += `${palabra} `;
    });
    return frase.substring(0, frase.length - 1);
  }
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (Array.isArray(array)) {
    return array.includes(elemento);
  }
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:  
  if (Array.isArray(numeros) && numeros.length > 0) {
    return numeros.reduce((acumulador, numero) => {
      return acumulador + numero;
    }, 0);
  }
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let acumulado = 0;
  let i = 0;
  if (Array.isArray(resultadosTest) && resultadosTest.length > 0) {
    const acumulado = resultadosTest.reduce((acumulador, numero) => {
      i++;
      return acumulador + numero;
    }, 0);
    return acumulado / i;
  }
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let masGrande;
  if (Array.isArray(numeros)) {
    numeros.forEach((numero) => {
      masGrande > numero ? masGrande : masGrande = numero;
    });
    return masGrande;
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let i = 0;
  if (Array.isArray(arreglo) && arreglo.length > 0) {
    arreglo.forEach(numero => {
      numero > 19 ? i++ : numero;
    })
    return i;
  }
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if (typeof numeroDeDia === 'number') {
    return numeroDeDia === 1 || numeroDeDia === 7 ? "Es fin de semana" : "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (typeof n === 'number')
    return n.toString()[0] === '9';
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  if (Array.isArray(arreglo) && arreglo.length > 0) {
    const arrFiltrado = arreglo.filter((elemento, index) => {
      return elemento === arreglo[index === 0 ? index : index - 1];
    });
    return arrFiltrado.length === arreglo.length ? true : false;
  }

}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  if (Array.isArray(array) && array.length > 0) {
    let arrFiltrado = array.filter(mes => {
      return mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre';
    });
    //elimina duplicados si los hubiere
    arrFiltrado = [...new Set(arrFiltrado)]
    //si no repite mes buscado
    return arrFiltrado.length === 3 ? arrFiltrado : 'No se encontraron los meses pedidos';  
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  if (Array.isArray(array)) {
    return array.filter((numero) => {
      if (numero > 100)
        return numero;
    });
  }
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
