// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
    constructor(opciones) {
      this.usuario = opciones['usuario'];
      this.nombre = opciones['nombre'];
      this.email = opciones['email'];
      this.password = opciones['password'];
      // también podría ser.....
      // Usuario.prototype.Saludar = () => {
      //   return `Hola, mi nombre es ${this.nombre}`;
      // }
    }
    Saludar = () => {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }
  return Usuario;
}

//--------------------------- PRUEBAS ---------------------------------------//
//console.log(crearUsuario());

// const opciones = {
//   usuario: 'inv',
//   nombre: 'Invitado',
//   email: 'algo@algo.com',
//   password: '******'
// };

// class Usuario {
//   constructor(opciones) {
//     this.usuario = opciones['usuario'];
//     this.nombre = opciones['nombre'];
//     this.email = opciones['email'];
//     this.password = opciones['password'];
//     Usuario.prototype.Saludar = () => {
//       return `Hola, mi nombre es ${this.nombre}`;
//     }
//   }
//   // ó.....
//   // Saludar = () => {
//   //   return `Hola, mi nombre es ${this.nombre}`;
//   // }
// }

// //const usuario = new Usuario(opciones);
// const usuario = new Usuario({usuario:'dlopez', nombre: 'Diego López', email:'dilopez1000@gmail.com', password: '******'});
// console.log(usuario.usuario);
// console.log(usuario.nombre);
// console.log(usuario.email);
// console.log(usuario.password);
// console.log(usuario.Saludar());
//--------------------------- PRUEBAS ---------------------------------------//



function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.Saludar = () => {
    return `Hello World!`;
  }
  //return Constructor.Saludar(); //remear
}
//--------------------------- PRUEBAS ---------------------------------------//
// obj = {};
// console.log(agregarMetodoPrototype(obj.constructor));
// console.log(obj);
// console.log(obj.constructor.Saludar());
//--------------------------- PRUEBAS ---------------------------------------//



function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:
  function reverseString() {
    return this.split("").reverse().join("");
  }
  String.prototype.reverse = reverseString;
  //return 'Hola'.reverse(); //remear
}
//--------------------------- PRUEBAS --------------------------------------//
// console.log(agregarStringInvertida());

// function reverseString() {
//   return this.split("").reverse().join("");
// }
// String.prototype.reverse = reverseString;
// console.log('Hola'.reverse());
//--------------------------- PRUEBAS ---------------------------------------//



// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona {
  //Escribir el constructor aquí:
  constructor(nombre, apellido, edad, dir) {
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Edad = edad;
    this.Domicilio = dir;
    this.Detalle = () => {
      return console.log(this);
    }
  }
  // también puede ser fuera del constructor
  // Detalle = () => {
  //  return this;
  // }
}
//--------------------------- PRUEBAS ---------------------------------------//
// const persona = new Persona('Diego', 'López', 45, 'Cucha Cucha 897');
// persona.Detalle(); 
//--------------------------- PRUEBAS ---------------------------------------//



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  //Tu código:
  const persona = new Persona(nombre, apellido, edad, dir);
  return persona;
}
//--------------------------- PRUEBAS ---------------------------------------//
//  const pers = crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123");
//  console.log(pers);
// // ó....
//  pers.Detalle();
//--------------------------- PRUEBAS ---------------------------------------//



function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  //Tu código:
  const persona = new Persona('Juan', 'Pérez', 22, 'YourCasa 123');
  
  Persona.prototype.datos = () => {
    return `${persona.Nombre}, ${persona.Edad} años`;
  }
  return Persona.prototype.datos();
}
//--------------------------- PRUEBAS ---------------------------------------//
console.log(agregarMetodo());
//--------------------------- PRUEBAS ---------------------------------------//



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
