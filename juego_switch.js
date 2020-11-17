var opciones =["piedra","papel","tijera"]

function escojer () {
    var azar = Math.floor(Math.random() * (3 - 0)) + 0;
    return resultado = opciones[azar]
    }

function jugar () {
    var dato = prompt("Ingresa " + opciones[0] + ", "+ opciones[1] + " o " + opciones[2] + ".").toLowerCase();
    var pc = escojer()

    if (!opciones.includes(dato)) {
        console.log("Opción incorrecta ingresa "+ opciones[0] + ", "+ opciones[1] + " o " + opciones[2] + ".");
        return
    }

    console.log("Escogiste "+ dato +" El Pc escogio "+pc)
    
    if (dato == pc){
        console.log("empate");
        return
    }

    switch (dato) {
        case opciones[0]:
            if (pc == opciones[2]) {
                console.log("Ganaste "+ opciones[0] +" gana a " +opciones[2]);
            }   else {
                console.log("Perdiste " +opciones[0] +" pierde contra "+ opciones[1]);
            }
            break
        case opciones[1]:
            if (pc == opciones[0]){
                console.log("Ganaste " +opciones[1]+ " gana a "+ opciones[0]);
            }   else {
                console.log("Perdiste "+opciones[1] +" pierde contra "+opciones[2]);
            }
            break
        case opciones[2]:
            if (pc == opciones[1]) {
                console.log("Ganaste "+opciones[2]+ " gana a "+opciones[1]);
            }   else {
                console.log("Perdiste "+ opciones[2] +" pierde contra "+ opciones[0]);
            }
            break
        default:
            console.log("opción incorrecta");
    }
}