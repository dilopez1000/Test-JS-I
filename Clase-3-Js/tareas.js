// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return typeof x === 'number' && typeof x === 'number' ?
    (x > y ? x : y) :
    undefined;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return typeof edad === 'number' ?
    (edad >= 18 ? 'Allowed' : 'Not allowed') :
    undefined;
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  let estadoConexion = 'Offline';

  if (typeof status === 'number') {
    switch (status) {
      case 1:
        estadoConexion = 'Online';
        break;
      case 2:
        estadoConexion = 'Away';
        break;
    }    
  }
  return estadoConexion;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  let saludoRetorno = 'Hola!'

  switch (idioma) {
    case 'aleman':
      saludoRetorno = 'Guten Tag!';
      break;
    case 'mandarin':
      saludoRetorno = 'Ni Hao!';
      break;
    case 'ingles':
      saludoRetorno = 'Hello!';
      break;
  }
  return saludoRetorno;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
  let colorRetorno = 'Color not found';
  switch (color) {
    case 'blue':
      colorRetorno = `This is ${color}`;
      break;
    case 'red':
      colorRetorno = `This is ${color}`;;
      break;
    case 'green':
      colorRetorno = `This is ${color}`;
      break;
    case 'orange':
      colorRetorno = `This is ${color}`;
      break;
  }
  return colorRetorno;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return typeof numero === 'number' ?
    (numero === 10 || numero === 5 ? true : false) :
    undefined;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return typeof numero === 'number' ?
    (numero < 50 && numero > 20 ? true : false) :
    undefined;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return typeof numero === 'number' ?
    Number.isInteger(numero) :
    undefined;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let retorno;
  if (typeof numero === 'number') {
    if (numero % 5 === 0 && numero % 3 === 0)
      retorno = 'fizzbuzz';
    else if (numero % 3 === 0)
      retorno = 'fizz';
    else if (numero % 5 === 0)
      retorno = 'buzz';
    else
      retorno = numero;
  }
  return retorno;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:
  let retorno = false;
  if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
    if (Math.sign(num1) === -1 || Math.sign(num2) === -1 || Math.sign(num3) === -1)
      retorno = "Hay negativos";
    else if (num1 === 0 || num2 === 0 || num3 === 0)
      retorno = "Error";
    else if (num1 > num2 && num1 > num3 && Math.sign(num1) === 1)
      retorno = "Número 1 es mayor y positivo";
    else if (num3 > num1 && num3 > num2)
      retorno = ++num3;

    return retorno;
  }
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí:  
  return typeof valor === 'boolean' ?
    (valor === true ? 'Soy verdadero' : 'Soy falso') :
    undefined;
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:
  let retorno = false;
  let i = 0;
  if (typeof numero === 'number' && Number.isInteger(numero)) {
    while (numero >= 1) {
      i++;
      numero = numero / 10;
      i === 3 ? retorno = true : retorno = false;
    }
    return retorno;
  }
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
  if (typeof numero === 'number') {
    if (numero <= 1)      
      return false; //return 'Ingrese un valor válido';
    for (let i = 2; i <= numero - 1; i++) {
      if (numero % i == 0)
        return false;
    }
    return true;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:
  if (typeof numero === 'number') {
    let contador = 0;
    do {
      numero += 5;
      contador++;

    } while (contador < 8);
    return numero;
  }
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};