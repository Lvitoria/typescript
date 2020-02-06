function funcao<T>(param: T):T{
    return param;
}
let variavel: number = funcao<number>(2)

console.dir(variavel)

class Lista<T>{
    items: Array<T> = []

    add(items:T){

    }

    remove(items:T){

    }
}

let lista = new Lista<number>()

lista.add