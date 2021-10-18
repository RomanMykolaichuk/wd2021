let id:number=23;
let company: string = "company1";
let isCompleted: boolean;
let x: number | boolean  =6;
let y=5;

let numberArray: number[]=[1,2,3]

let person:[number,string,boolean]= [1,"Stepan",true]

let employees:[number,string][]

employees= [
    [1,'Brad'],
    [2,'John'],
    [3,'Ivan']
]

type User = {
    id:number;
    name: string;    
}

const user:User ={
    id:1,
    name:'John'
}

function log(message:string|number):void{
    console.log(message);
}

const log1:(message:string|number)=>void = (message)=>{console.log(message);}


interface MathFunc {
    (x: number, y: number): number
  }


const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface IPerson{
    id:number;
    name:string;
    register():string
}

class Person implements IPerson{    
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    register(){
        return `${this.id} name: ${this.name}`
    }
    
}

const roman = new Person(1,"Roman")
const olga = new Person(2,"Olga")


// console.log(roman.register())
// console.log(olga.register())

class Employee extends Person{

position:string="asistant";

constructor(id:number,name:string,position?:string){
    super(id,name);
    if(position){this.position=position}
}

}

const vasyl = new Employee(5,'Vasyl')

vasyl.position='director'


function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray:string[]= getArray<string>(['1','2','3','4','5'])





class Person2 {    
    user:User
    constructor(user:User){
        this.user=user;        
    }
    register(){
        return `${this.user.id} name: ${this.user.name}`
    }    
}




// console.log(roman.register())
// console.log(olga.register())











