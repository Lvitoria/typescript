// booleano
var sucess = false;
console.log(sucess);
//numeros
// let num = 10;
var num = 10.5;
// let num: number = "44564" 
console.log(num);
//string
// let _name= 'lucas'
var _name = 'lucas';
console.log(_name);
//array
var array = ['a', 'b', 'c'];
var arrray = ['a', 'b', 'c'];
//enum
var estado_civil;
(function (estado_civil) {
    estado_civil["solteiro"] = "solteiro";
    estado_civil["casado"] = "casado";
    estado_civil["divorciado"] = "divorciado";
})(estado_civil || (estado_civil = {}));
var meu_estado_civil = estado_civil.solteiro;
if (meu_estado_civil == estado_civil.solteiro) {
    console.log("meu estado civil \u00E9 " + meu_estado_civil);
}
//object
var obj = {
    name: "lucas",
    sobrenome: "vitoria"
};
// obj = "aksoaks"
console.log(obj);
//Any
var myarray = [2, "string", false, { name: "kkk" }];
//DIFERENÇA ENTRE Object e object 
// o Object e tipo nativo do js não vem com pitagem
// o object e do proprio typescript e não pode ser passado  nenhum outro valor a não ser json
//se você colocar um valor na variavel sem atribuir o tipo dela 
//o type já identifica que é daquele tipo e não troca 
//exemplo
// var nome = "lucas"
//só pode colocar valores string agora 
