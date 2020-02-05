class Animal{
    // name: string;

    constructor(public name:string, public color?: string){
    }
    //mesma coisa
    // constructor( name:string){
    //     this.name = name
    // }

}

let myAnimal: Animal = new Animal("cachorro", "azul")
console.log(myAnimal.name)
console.log(myAnimal.color)
