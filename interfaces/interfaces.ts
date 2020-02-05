interface ObjectValeu{
    category: string;
    //? significa opcional
    product?: string;
}

function show({category, product}: ObjectValeu){
    console.log(category)
    console.log(product)
}

show({category:"category", product: "product"})



class Product implements ObjectValeu{
        category: string;
}

let product = new Product()
product.category = "teste"
console.log(product.category)
