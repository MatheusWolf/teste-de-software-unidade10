let nome_cliente : string = "Breno Cunha";
let telefone : string = "(81)98322-3245";
let email : string = "Joel_matador@hotmail.com";

let numeros_sortidos_placa: boolean = true;
let placa : string = "UIA4K20"
const vendedor : string = "Fabricio";
let preco_do_carro : number = 250.000;

type carros = {
    marca: string;
    cor: string;
    ano: number;
    preco: number;
}

function escolher_placa(): string{
    if (numeros_sortidos_placa == true){
        placa_random()
    }
    return placa
}

function placa_random(): void{
    placa = "PDF2R00";
}

for (let i = 0; i <= 300; i++) {
    i *= i
    console.log(i)
}


