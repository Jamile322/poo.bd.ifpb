let db = require("./db");
let Pizza = require("./model/Pizza");

async function sincronizar() {
    await db.sync();
}
//async function inserir(obj){
    //let resul = await Pizza.create(obj)
    //console.log(resul);
//}

//let p1 = {sabor: "Napolitana", valor_pizza: "20,00"};
//inserir(p1);

async function consultar(){
    let resultado = await Pizza.findAll();
    console.log(resultado);
}
consultar();



