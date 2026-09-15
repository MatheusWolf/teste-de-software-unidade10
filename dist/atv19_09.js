"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome_cliente = "Breno Cunha";
let telefone = "(81)98322-3245";
let email = "Joel_matador@hotmail.com";
let numeros_sortidos_placa = true;
let placa = "UIA4K20";
const vendedor = "Fabricio";
let preco_do_carro = 250.000;
function escolher_placa() {
    if (numeros_sortidos_placa == true) {
        placa_random();
    }
    return placa;
}
function placa_random() {
    placa = "PDF2R00";
}
for (let i = 0; i <= 300; i++) {
    i *= i;
    console.log(i);
}
//# sourceMappingURL=atv19_09.js.map