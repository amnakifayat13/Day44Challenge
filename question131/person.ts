/* Create two modules; one that exports a class, and another that imports the class and creates an instance.*/

export class Person{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(){
        console.log(`hello my name is ${this.name}`);
        
    }
}