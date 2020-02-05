// função anomina
var soma = function (x, y) {
    return x + y;
};
console.log(soma(2, 2));
// arrrowfunction
var diminui = function (x, y) { return x - y; };
console.log(diminui(2, 2));
//função com parametro opcional
var listandoNome = function (primeiroNome, segundoNome) { return "meu nome \u00E9 " + primeiroNome + " " + (segundoNome ? segundoNome : " "); };
console.log(listandoNome("lucas"));
