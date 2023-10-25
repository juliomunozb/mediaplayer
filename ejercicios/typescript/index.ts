//Boolean
let muted: boolean = true;
muted = false;

//Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String
let nombre: string = "Julio";
let saludo = `Me llamo ${nombre}`;

//Arreglos
// Se puede definir si es de algun tipo especifico, que sean diversos o que sea una combinación
let people: string[] = [];
people = ["Pedro", "Juan", "Milena"];
people.push("100");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Oliva");
peopleAndNumbers.push(1001);

//Enum
//permiten definir un conjunto de constantes con nombre

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es: ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = { type: "Pepe" };

/** Funciones **/
/*
  Se puede indicar el tipo de dato en argumentos 
  Se puede indicar el tipo de dato de retorno de la función
*/

//Retornando un valor
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);
console.log(`Suma: ${sum}`);

//Retornando una función
//: (number) => number -> esta indicando el valor de retorno cuando retorna una función
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(5);
console.log(`Suma: ${fourPlus6}`);

//Con argumentos opcionales
// lasName?: -> para indicar que un argumento es opcoinal se incluye el signo ? al final de la varible
//lasName?:string = "Lopez" -> para incluir valor por defecto
function fullName(firstName: string, lastName: string = "Lopez"): string {
  return `${firstName} ${lastName}`;
}

const juan = fullName("Juan", "Gomez");
const miguel = fullName("Miguel");
console.log(`Hola ${juan}`);
console.log(`Hola ${miguel}`);
