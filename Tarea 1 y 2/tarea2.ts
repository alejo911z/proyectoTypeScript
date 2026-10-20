let op1: number = 10;
let op2: number = 15;

console.log(`Mis variables iniciales son ${op1} y ${op2}`);

op1++;
op2+=4

console.log(`Mis variables finales son ${op1} y ${op2}`);

let resultado: number = op1 / op2;
console.log(`El resultado de la division es: ${resultado}`);
console.log(`El resultado de la division es: ${resultado.toPrecision(2)}`);

let varTipoDesconocido: any;

console.log(`El valor de varTipoDesconocido es: ${varTipoDesconocido} y su tipo es: ${typeof varTipoDesconocido}`);
varTipoDesconocido = "Ahora soy un string";
console.log(`El valor de varTipoDesconocido es: ${varTipoDesconocido} y su tipo es: ${typeof varTipoDesconocido}`);
varTipoDesconocido = 2.8;
console.log(`El valor de varTipoDesconocido es: ${varTipoDesconocido} y su tipo es: ${typeof varTipoDesconocido}`);

let vatTipoInferido = undefined;
varTipoDesconocido = null;
let varVoid: void = undefined;
console.log(`El valor de varVoid es: ${varVoid} y su tipo es: ${typeof varVoid}`);


function imprimirMensajes(): void {
    console.log("Mensaje generico");
}

function imprimirMensajesConParametro(msj: string): void {
    console.log(`Mensaje con parametro: ${msj}`);
}

imprimirMensajes();
imprimirMensajesConParametro("Hola mundo con parametro");

function sumarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

var fSumar = sumarNumeros;
console.log(`El resultado de la suma es: ${fSumar(10, 15)}`);
console.log(`El resultado de la suma es: ${sumarNumeros(20, 25)}`);