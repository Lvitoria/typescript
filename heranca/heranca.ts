interface AnimalInterface{
    name:string;
    color?: string;
    correr();
    andar();
    comer();
}
class Animal implements AnimalInterface{
    // name: string;

    constructor(public name:string, public color?: string){
    }
    

    correr(){
        console.log("correr");
    }

    andar(){
        console.log("andar");
    }

    comer(){
        console.log("comer do animal");
    }

}

class Passaro extends Animal{
    
    //sobreescrita
    comer(){
        super.comer();
        console.log("comer do passaro")
    }

    voar(){
        console.log("voar")
    }
}


let passaro: Passaro = new Passaro("cachorro", "azul")
console.log(passaro.name)
console.log(passaro.color)
// console.log(passaro.andar())
// console.log(passaro.correr())
console.log(passaro.comer())
console.log(passaro.voar())

