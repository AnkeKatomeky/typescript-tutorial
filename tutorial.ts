///vars and const
let one = 1;//func scope
var two = 2;//block scope
const three = 3;//block scope

///block scope include loops and ifs
function funcscopetest() {
    console.log(one); //default acces
    if (true) {
        let ifone = 11;
        var iftwo = 22;
        console.log(ifone);
        console.log(iftwo);
    }
    //console.log(ifone); error - ifone don't exist here
    console.log(iftwo);// good - iftwo exist here
}
funcscopetest();

///primitive types
let nameS = 'name';
let age = 20;
let isRich = false;
///explicid typing
let nameE: string;
let ageE: number;
let isRichE: boolean;

///arrays
let names = ['me', 'keks', 'shpeks'];
let ages = [1, 2, 3];
let ifRiches = [false, false, true];
//Explisid typing
let namesE: Array<string>;
let namesEE: string[];//array<T> and T[] interexchangable
let agesE: Array<number>;
let ifRichesE: Array<boolean>;

//namesE.push('anke'); cantdo - need init
namesE = ['anke'];
namesE.push('anke the second');
namesE[2] = 'kekus';
console.log(namesE);

///objects
//all feelds needed to be initet in object
let person = {
    name: "anke",
    age: 28,
    isRich: false
};

person = {
    age: 30,
    isRich: true,
    name: "Shpekus"
    //money: 300 -error - neded to be consisted object
}
person.name = "Anke";

//explisit object
let secondObject: {
    name: string,
    money: number,
    age: number
}

///union types
let mix: (string | number | boolean);
let mixthesecond: (string | number | boolean | string[]);

///custom types
type stringnumber = string | number;
type personType = {
    name: string,
    money: number,
    age: number
}

///functions
let greetFunc: Function;

//default value(b) and optional (c) and return type like none(void)
greetFunc = (a: number, b: number = 10, c?: stringnumber): void => {
    console.log(a + b);
    console.log(c);
}
greetFunc(4);
let personone: personType = {
    age: 30,
    money: 3000,
    name: "lel"
}
let greetPerson = (a: personType) => {
    console.log(a.name + " hello");
};
greetPerson(personone);

///func interfaces
let gret: (a: string, b: string) => void;

gret = (name: string, pass: string) => {
    console.log(`${pass} ${name}`);
}
gret("anke", "nah")
//geting rid of null typeing
const achor = document.querySelector('a')!;

console.log(achor.href);

//classes
class MyInvoice {
    readonly client: string;//sets once
    public details: string;//fully free to use
    private amount: number;//only inside can be accesed

    //cotor
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //method
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

//generics
function keksAppender<T>(object: T) {
    let id = Math.floor(Math.random() * 10000);
    return { ...object, id };
}
let doc1 = keksAppender<personType>(personone);
console.log(doc1);

interface IInterface<T> {
    id: number,
    name: string,
    data: T
}

class GenericClass<T> implements IInterface<T>{
    constructor(public id: number, public name: string, public data: T) {

    }
}

let doc2 = new GenericClass<string>(1, "genName", "keks");
console.log(doc2);
let doc3 = new GenericClass<number[]>(1, "genName", [1, 2, 3, 4, 5]);
console.log(doc3);

//enums
enum ResourceType {
    Book, //0
    Film, //1
    Food  //2 and so on
}

interface IEnumed {
    type: ResourceType;
    name: string;
}

let doc4: IEnumed = {
    type: ResourceType.Book,
    name: "Clean Code"
}
let doc5: IEnumed = {
    type: ResourceType.Food,
    name: "Shaurma"
}

//Tupels
function tupleReturn(): [string, number]{
    return ["keks", 10];
}