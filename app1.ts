// -----------------------------------------------------------
// [0]
// -----------------------------------------------------------
// TypeScript to język programowania, który pozwala pisać
// kod JavaScript w bardziej rozbudowany i wygodny sposób.
// Kiedy już masz kod TypeScript, najpierw trzeba skompilować
// kod do JS, a potem uruchamiasz go jak zwykły kod JS.

// Można w pewnym przybliżeniu traktowac TypeScript jako
// JavaScript generator. TypeScript dostarcza wygodny sposób
// pisania kodu, a kompilowanie do kodu JavaScript pozwala
// uruchamiać go w wielu miejscach zgodnie ze standardem JS.

// Instalacja:

// 1. Zainstaluj Node.js:

// 2. Zainstaluj TS:
// >> npm install typescript --save-dev
// >> tsc -v
// Aktualizacja do najnowszej wersji:
// >> npm install -g typescript@latest

// 3. Skompiluj kod (nie musisz nic zmieniać w tsconfig.json)
//    Domyślnie przebuduje wszystkie pliku w root folderze
//    -w od razu przekompiluje wszystkie zmiany
// >> npx tsc -w

// 4. Uruchom plik wynikowy JS
// >> node app1.js

// -----------------------------------------------------------
// [1]
// Typowanie statyczne
// -----------------------------------------------------------

// ***********************
// => Typy prymitywne
// ***********************
// number, string, boolean
let age: number = 10;
let counter = 10;
// age = 'km';

// ***********************
// => Funkcje
// ***********************
const add = (n1: number, n2: number): number => n1 + n2;
add(10, 20);
// add(10, '20');

// ***********************
// => Obiekty
// ***********************

const person: {name: string, age?: number} = {
    name: 'ALA',
    age: 10
}

// ***********************
// => Funkcje + obiekty
// ***********************
const personInfo = ({name, age = 10}: {name: string, age?: number}): void => {
    console.log(`Name: ${name}`)
    console.log(`Age:  ${age}`)
}
personInfo({name: 'ADAM', age: 10})

// ***********************
// => Tablice
// ***********************

const hobbies: string[] = ['A', '10'];

// ***********************
// => Enum
// ***********************

enum PrintMedia {
    Newspaper = 1,
    Newsletter, // = 2,
    Magazine, // = 3,
    Book // = 4
}

const pm: PrintMedia = PrintMedia.Book;
console.log(PrintMedia['Magazine'])
console.log(PrintMedia[3])

// ***********************
// => Unie
// ***********************
const action1 = (x: number | string, y: number | string): number | string => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return x.toString().toUpperCase() + y.toString().toUpperCase();
}

// ***********************
// => Unie + Literal Types
// ***********************

const doOperation = (x: number, y: number, operation: 'add' | 'sub'): number => {
    switch (operation) {
        case "add": return x + y;
        case "sub": return x - y;
    }
}
console.log(doOperation(10, 20, 'add'));
console.log(doOperation(10, 20, 'sub'));

// ***********************
// => Type
// ***********************

type NumStr = number | string;
type NumStrLit = 'number' | 'string'

const action2 = (x: NumStr, y: NumStr): NumStr => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return `${x}${y}`;
}
console.log(action2('ADAM', 10));

type Person = {name: string, age: number};
const adam: Person = {name: 'ADAM', age: 30};

// ***********************
// Function Callback
// Higher Order Function
// ***********************

const doOperation2 =
    (x: number, y: number, operation: (a: number, b: number) => number): number =>
        operation(x, y);
doOperation2(10, 20, (x, y) => x + y)

// -----------------------------------------------------------
// [2]
// Programowanie obiektowe
// -----------------------------------------------------------

class Product {
    constructor(
        private readonly name: string,
        private readonly surname: string) {
    }

    info(): string {
        return `${this.name} ... ${this.surname}`
    }
}

const pr = new Product('A', 'B');
console.log(pr.info().toUpperCase());

// Klasy abstrakcyjne

abstract class Shape {
    constructor(protected x: number) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}

class Square extends Shape {
    constructor(x: number) {
        super(x);
    }
    calculateArea(): number {
        return this.x ** 2;
    }

    calculatePerimeter(): number {
        return this.x * 4;
    }
}

interface Student {
    name: string;
    age: number;
    info(): string
}

const s: Student = {
    name: 'JACEK',
    age: 29,
    info(): string {
        return "BLA"
    }
}

// Interfejsem mozesz tez okreslac postac funkcji
interface AddFunction {
    (a: number, b: number): number
}

const addFn: AddFunction = (n1: number, n2: number): number =>
    n1 + n2;
