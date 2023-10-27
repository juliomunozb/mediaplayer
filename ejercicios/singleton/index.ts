import Singleton from "./Singleton";
const a = Singleton.getInstance();
const b = Singleton.getInstance();
//a es la misma instancia de b
console.log("A es igual a B?", a === b);
