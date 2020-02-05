// função anomina
const soma  = function(x: number,y: number):number{
    return x +y
}

console.log(soma(2,2))


// arrrowfunction
const diminui  = (x: number,y: number):number => x - y


console.log(diminui(2,2))

//função com parametro opcional
const listandoNome = (primeiroNome: string , segundoNome?:string) =>  `meu nome é ${primeiroNome} ${segundoNome? segundoNome : " "}`

console.log(listandoNome("lucas"))