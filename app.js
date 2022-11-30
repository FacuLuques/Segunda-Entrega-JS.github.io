
class Cerveza {
    constructor(nombre, alcohol, procedencia, precio) {
        this.nombre = nombre;
        this.alcohol = alcohol;
        this.procedencia = procedencia;
        this.precio = precio;
    }
}



const tipoUno = new Cerveza("Red Light", "4.5%", "Lovaina, Bélgica", 400);
const tipoDos = new Cerveza("Double Brown", "3.2%", "Boston, MA", 450);
const tipoTres = new Cerveza("Juiced IPA", "2.7%", "Dublin, Irlanda", 500);
const tipoCuatro = new Cerveza("Triple White", "5.4%", "Oxford, CT", 550);

const arrayTipos = [tipoUno,tipoDos,tipoTres,tipoCuatro];

//console.log(arrayTipos);


let seleccion = parseInt(prompt("Seleccione una opción o escriba 0 para salir: \n 1) Red Light, 4.5%, Lovaina, Bélgica, $400 \n 2) Double Brown, 3.2%, Boston, MA, $450 \n 3) Juiced IPA, 2.7%, Dublin, Irlanda, $500 \n 4)Triple White, 5.4%, Oxford, CT, $550 "))



function compraUno() {
    alert("usted a seleccionado '" + tipoUno.nombre + "' El precio seria: $" + tipoUno.precio)
    alert("Gracias por comprar, hasta luego.")
}
function compraDos() {
    alert("usted a seleccionado '" + tipoDos.nombre + "' El precio seria: $" + tipoDos.precio)
    alert("Gracias por comprar, hasta luego.")
}
function compraTres() {
    alert("usted a seleccionado '" + tipoTres.nombre + "' El precio seria: $" + tipoTres.precio)
    alert("Gracias por comprar, hasta luego.")
}
function compraCuatro() {
    alert("usted a seleccionado '" + tipoCuatro.nombre + "' El precio seria: $" + tipoCuatro.precio)
    alert("Gracias por comprar, hasta luego.")
}
function salir() {
    alert("Gracias, Vuelva prontos!")
}




while (seleccion != ""){
    switch (seleccion) {
        case 1:
            compraUno();
            break;
        case 2:
            compraDos();
            break;
        case 3:
            compraTres();
            break;
        case 4:
            compraCuatro();
            break;
        case 0:
            salir();
            break;
        default:
            alert("Opción incorrecta");
            break;
} seleccion = parseInt(prompt("Seleccione una opción o escriba 0 para salir: \n 1) Red Light, 4.5%, Lovaina, Bélgica, $400 \n 2) Double Brown, 3.2%, Boston, MA, $450 \n 3) Juiced IPA, 2.7%, Dublin, Irlanda, $500 \n 4)Triple White, 5.4%, Oxford, CT, $550 "))

}






