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
