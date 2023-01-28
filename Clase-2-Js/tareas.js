// En los próximos ejercicios, deberás completar las funciones con tu resolución.
// Todo tu código irá dentro de las llaves de la función.
// Recuerda que una función siempre devuelve un valor. (return)

// Nota: No modificar los nombres de las funciones y no utilizar console.log
// Caso contrario, no correrán los test!

// En estas primeras consignas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
// Tip: borrar el dato 'null' antes de poner el dato tipo string.
const nuevaString = 'JavaScript';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 77;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// ----------------------------------

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:  
  //return str.toString();
  return typeof str === 'string' ? str : undefined; // o null también aplicaría
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return typeof x === 'number' && typeof y === 'number' ? x + y : undefined;  // o NaN también podría ser...
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return typeof x === 'number' && typeof y === 'number' ? x - y : undefined;  
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return typeof x === 'number' && typeof y === 'number' ? x * y : undefined;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return typeof x === 'number' && typeof y === 'number' ? x / y : undefined;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:

  //NOTA:
  //La declaración no especifica los tipos, por lo tanto no hago
  // comprobación de los mismos.
  return x === y ? true : false
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código: 
  if (typeof str1 === 'string' && typeof str2 === 'string')
    return str1.length === str2.length ? true : false
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    return typeof num === 'number' ?  num < 90 ? true : false: undefined;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return typeof num === 'number' ?  num > 50 ? true : false: undefined;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  if (typeof x === 'number' && typeof y === 'number')
    return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return typeof num === 'number' ? num % 2 === 0 ? true : false : undefined;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return typeof num === 'number' ? num % 2 === 0 ? false : true : undefined;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  if (typeof num === 'number')
    return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  if (typeof num === 'number')
    return Math.pow(num, 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  if (typeof num === 'number' && typeof exponent === 'number')
    return Math.pow(num, exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return typeof num === 'number' ? Math.round(num) : undefined;  
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:    
  return typeof num === 'number' ? Math.ceil(num) : undefined;  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    return Math.random();
}

function esPositivo(numero) {
  // La función va a recibir un entero.
  // Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  // Si el número es positivo, devolver ---> "Es positivo"
  // Si el número es negativo, devolver ---> "Es negativo"
  // Si el número es 0, devuelve false
  // Tu código:
  let retorno = undefined;  
  if (typeof numero === 'number') {
    switch (Math.sign(numero)) {
      case -1:
        retorno = "Es negativo";
        break;
      case 1:
        retorno = "Es positivo";
        break;
      case 0:
        retorno = false;
        break;
    }
  }
  return retorno;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return typeof str === 'string' ? str + '!' : undefined; //o null también aplica
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Cristian" -> "Soy Cristian"
  // Tu código:
  return typeof nombre === 'string' && typeof apellido === 'string' ?
    `${nombre} ${apellido}` : undefined;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Nahuel" -> "Hola Nahuel!"
  // Tu código:
  return typeof nombre === 'string' && nombre.length > 0 ? `Hola ${nombre}!` : undefined;
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí:
  //return typeof euro === 'number' ? `${euro * 1.2} €` : NaN;
  return typeof euro === 'number' ? euro * 1.2 : undefined;
}

// ---------- Puntos extra ----------

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  if(typeof alto === 'number' && typeof ancho === 'number')
    return alto * ancho; //área
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí  
  return typeof lado === 'number' ? lado * 4 : undefined;
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return typeof base === 'number' && typeof altura === 'number' ? base * altura /2 : undefined; //o null también aplicable...  
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  let retorno = 'Dato incorrecto';
  if (typeof letra === 'string' && letra.length === 1)
    letra.match(/[aeiou]/) ? retorno = 'Es vocal' : retorno;
  return retorno;
}

// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
