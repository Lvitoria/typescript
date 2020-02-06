interface AnimalInterface {
    name: string;
    color: string;
    /*correr();*/
    andar();
    comer();
}

class Animal implements AnimalInterface {
    private patas:string = '2';
    protected orelhas:string = '2';


    constructor(public name: string, public color: string) {

    }

    private correr(){
        
    }

    andar(){
        this.correr()
    }

    comer(){
        this.patas = '4';
        console.log(`patas ${this.patas}`)
      console.log('comer do animal')
    }
}

class Passaro extends Animal{
    tamanhoOrelha: number;

    comer(){
        console.log(this.orelhas);
        //super.correr();
        super.comer();
        console.log('comer do coelho');
    }
}

let passaro:Passaro = new Passaro('Meu passaro','preto');
console.log(passaro.name);
console.log(passaro.color);
passaro.andar();
//passaro.correr();
passaro.comer();
