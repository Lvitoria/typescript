// booleano
let sucess: boolean = false;
console.log(sucess)

//numeros
// let num = 10;
 let num: number = 10.5
// let num: number = "44564" 
console.log(num)

//string
// let _name= 'lucas'
let _name: string  = 'lucas'

console.log(_name)

//array
let array  : string[] = ['a', 'b', 'c']
let arrray : Array<string> = ['a', 'b', 'c']

 
//enum
enum estado_civil {'solteiro' = 'solteiro', 'casado' = 'casado', 'divorciado'= 'divorciado'}

let meu_estado_civil : estado_civil = estado_civil.solteiro

if(meu_estado_civil == estado_civil.solteiro){
    console.log(`meu estado civil é ${meu_estado_civil}`)
}

//object

let obj: object = {
    name: "lucas",
    sobrenome: "vitoria"
}

// obj = "aksoaks"

console.log(obj)

//Any
let myarray :  Array<any> = [2, "string", false,{name: "kkk"}]

//DIFERENÇA ENTRE Object e object 
// o Object e tipo nativo do js não vem com pitagem
// o object e do proprio typescript e não pode ser passado  nenhum outro valor a não ser json

//se você colocar um valor na variavel sem atribuir o tipo dela 
//o type já identifica que é daquele tipo e não troca 
//exemplo
// var nome = "lucas"
//só pode colocar valores string agora 

