var opciones =["piedra","papel","tijera"]

function escojer () {
    var azar = Math.floor(Math.random() * (3 - 0)) + 0;
    return resultado = opciones[azar]
    }

function jugar () {
    var dato = prompt("Ingresa " +opciones[0]+ ", "+ opciones[1]+ " ó " +opciones[2]).toLowerCase();
    var pc = escojer()

    console.log("Escogiste "+dato+" El Pc escogio "+pc)
    
    if (dato == pc) {
        console.log("empate")
    } 
    else if(dato == opciones[0] & pc == opciones[2]) {
        console.log("Ganaste "+ opciones[0] +" gana a " +opciones[2])
    } 
    else if(dato == opciones[2] & pc == opciones[0]) {
        console.log("Perdiste "+ opciones[2] +" pierde contra "+ opciones[0])
    } 
    else if (dato == opciones[0] & pc == opciones[1]) {
        console.log("Perdiste " +opciones[0] +" pierde contra "+ opciones[1])
    } 
    else if (dato == opciones[1] & pc == opciones[0]) {
        console.log("Ganaste " +opciones[1]+ " gana a "+ opciones[0])
    } 
    else if (dato == opciones[1] & pc == opciones[2]) {
        console.log("Perdiste "+opciones[1] +" pierde contra "+opciones[2]) 
    } 
    else if (dato == opciones[2] & pc == opciones[1]) {
        console.log("Ganaste "+opciones[2]+ " gana a "+opciones[1])
    } 
    else {
        console.log("Opción incorrecta ingresa "+opciones[0]+ ", "+ opciones[1]+ " ó " +opciones[2])
    }
}

var opc = document.getElementById("stone");
opc.addEventListener("click", function () {
    opc.classList.toggle("prueba__background")
    });