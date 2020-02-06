var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // name: string;
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.correr = function () {
        console.log("correr");
    };
    Animal.prototype.andar = function () {
        console.log("andar");
    };
    Animal.prototype.comer = function () {
        console.log("comer do animal");
    };
    return Animal;
}());
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //sobreescrita
    Passaro.prototype.comer = function () {
        _super.prototype.comer.call(this);
        console.log("comer do passaro");
    };
    Passaro.prototype.voar = function () {
        console.log("voar");
    };
    return Passaro;
}(Animal));
var passaro = new Passaro("cachorro", "azul");
console.log(passaro.name);
console.log(passaro.color);
// console.log(passaro.andar())
// console.log(passaro.correr())
console.log(passaro.comer());
console.log(passaro.voar());
