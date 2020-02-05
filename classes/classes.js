var Animal = /** @class */ (function () {
    // name: string;
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    return Animal;
}());
var myAnimal = new Animal("cachorro", "azul");
console.log(myAnimal.name);
console.log(myAnimal.color);
