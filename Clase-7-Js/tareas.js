// Asincronia y Stack

// ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADORS
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? Piensa primero cual será el resultado y escribelo. Luego prueba ver la respuesta usando la siguiente pagina: https://jsconsole.com/  y presioná enter, asi obtendras el resultado automaticamente)

function imprimir() {
    console.log(1);
    setTimeout (function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log (4);
}

imprimir();

//RESPUESTA:
// Se ejecutan en orden secuencial (por ser instrucciones síncronas) las sentencias console.log(1); y luego console.log (4);
// Luego la función retorna "undefined" por ser una función con retorno void.

// Luego de ello se ejecutan las sentencias asíncronas en el siguiente orden:
// 1° setTimeout(function() {console.log(3); }, 0);
// 2° setTimeout (function() {console.log(2); }, 1000); // esta se ejecuta en segundo orden debido a que el intévalo de ms. es mayor