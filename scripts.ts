
// declarando variaveis

let x: number = 10;

x = 16;

console.log(x);

// inferencia x annotation

let y = 12;  // inferencia
let z: number = 12;  // annotation

// tipos basicos
let firstName: string = "Diego";
let age: number = 30;
const inAdmin: boolean = true;

console.log(firstName);
console.log(typeof firstName);

firstName = "João";
console.log(firstName);

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);

myNumbers.push(5);
console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

// object literal -> {prop:value}
const user: {name: string, age: number} = {
name: "Pedro",
age: 18,
}
console.log(user);
console.log(user.name);


// any -> aceita qualquer tipo de dado
let a: any = 0;
a = "teste";
a = true;
a = []


// union type
let id: string | number = "10";
id = 200


// type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "0001"
const shirId: myIdType = 123


//enum -> enumera uma colecao
// ex. tamanho roupas
enum Size{
    P="Pequeno",
    M="Medio",
    G="Grande"
}

const camisa ={
    name: "Camisa  gola v",
    size:Size.G
}
console.log(camisa);


// literal types
let teste: "autenticado" | null

teste = "autenticado";
teste = null;


// funcoes
function sum(a: number, b: number){
    return a+b;
}
console.log(sum(12, 12));

function sayHelloTo(name:string): string{
    return `Hello ${name}`
}
console.log(sayHelloTo("Diego"));

function logger(msg: string): void{
    console.log(msg);
}
logger("Teste");


function greeting(name: string, greet?: String): void{
        if(greet) {
            console.log(`ola ${name}`);
        return;
    }
    console.log(`ola ${name}`);
}
greeting("Jose");
greeting("Pedro", "Sir");


// interfaces

interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1: 1, n2: 2}));

function mutiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(mutiplyNumbers(someNumbers))



// narrowing
// checagen de tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`o numero é ${info}`);
        return;
    }
    console.log("Nao foi passado um numero");
}
doSomething(5);
doSomething(true);


// generics

function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);


// classes
class User{
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`o nome do usuarioe ${this.name}`);
    }
    showUserRole(canShow: boolean): void{
        if(canShow){
            console.log(`idade do usuario e: ${this.role}`)
            return
        }
        console.log("informacao restrita");
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);




// interfaces em classes
interface IVehicle{
    band: string
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels
    constructor(brand: string, wheels:number){
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void{
        console.log(`a marca do carro e ${this.brand}`);
    }
}
const fusca = new Car("w", 4);
fusca.showBrand();



// heranca
class Supercar extends Car{
engine;
constructor(brand:string, wheels:number, engine:number){
super(brand, wheels);
this.engine=engine;
}
}
const a4 = new Supercar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();


// decorators
// constructor decorator
function BaseParameters(){
return function < T extends{new(...args:any[]):{} }>(constructor: T){
return clas extends constructor{
id = Math.random();
createdAt = new Date();
};
};
}

@BaseParameters()
class Person{
name;
constructor(name:string){
this.name = name;
}
}
const sam = new Person("Sam");
console.log(sam);



