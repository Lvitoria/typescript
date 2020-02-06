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
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        this.patas = '2';
        this.orelhas = '2';
    }
    Animal.prototype.correr = function () {
    };
    Animal.prototype.andar = function () {
        this.correr();
    };
    Animal.prototype.comer = function () {
        this.patas = '4';
        console.log("patas " + this.patas);
        console.log('comer do animal');
    };
    return Animal;
}());
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function () {
        console.log(this.orelhas);
        //super.correr();
        _super.prototype.comer.call(this);
        console.log('comer do coelho');
    };
    return Passaro;
}(Animal));
var passaro = new Passaro('Meu passaro', 'preto');
console.log(passaro.name);
console.log(passaro.color);
passaro.andar();
//passaro.correr();
passaro.comer();
