let nome_cliente : string = "Breno Cunha";
let telefone : string = "(81)98322-3245";
let email : string = "joel_matad@hotmail.com";

let numeros_sortidos_placa: boolean = true;
let placa : string = "UIA4K20";
const vendedor : string = "Fabricio";
let contador : number = 0;


type carros = {
    marca: string;
    cor: string;
    ano: number;
    preco: number;
}

const skyline_gtr: carros = {
    marca: "Nissan",
    cor: "Prata",
    ano: 1999,
    preco: 250.000
}


function escolher_placa(): string{
    if (numeros_sortidos_placa === true){
        placa_nao_tao_random_assim(2)
        console.log(placa)
    }
    return placa
}

function placa_nao_tao_random_assim(numero: number): void{
    switch (numero) {
        case 1:
            placa = "UIA4K20";
            break;
        case 2:
            placa = "UIA4K21";
            break;
        case 3:
            placa = "PDF2R00";
            break;
    }
}

for (let i = 0; i <= 300; i++) {
    i += 50
    console.log(i + " km/h")
    if (i >= 80) {
        console.log("Velocidade acima do permitido")
    }
}

while (contador <= 2) {
    console.log("contou: ", contador)
    contador++
}

escolher_placa()


