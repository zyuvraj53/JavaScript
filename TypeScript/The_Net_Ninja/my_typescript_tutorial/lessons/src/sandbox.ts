let character = 'mario';

let age = 30;

let isBlackBelt = false;

const circle = (diameter : number)=>{
    return diameter*Math.PI;
}

console.log(circle(7)); 

let mixed = [2, "this"];

mixed.push('true');

let character0: string;
let age0: number;
let isBlackBelt0: boolean;
//arrays

let ninjas: string[] = [];

//union types
let mixedNew: (string|number|boolean)[] = [];

let uid : (string|number);

//objects

let ninjaOne: object;
ninjaOne = {}
ninjaOne = []
//any

let age00: any = 25;
