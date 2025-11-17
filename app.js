// Funciones de la interfaz
function showArea(area){
    document.querySelectorAll(".submenu").forEach(m => m.style.display = "none");
    document.getElementById(area).style.display = "block";
}

function show(id){
    document.querySelectorAll("section").forEach(s => s.classList.remove("visible"));
    document.getElementById(id).classList.add("visible");
}

// FUNCIONES DE SALUD

function presion(){
    let sis = parseInt(prompt("Sistolica:"));
    let dia = parseInt(prompt("Diastolica:"));
    let resultado = "";

    if(sis < 120 && dia < 80){
        resultado = "Normal";
    }
    else if(sis < 130 && dia < 80){
        resultado = "Elevada";
    }
    else if(sis < 140 || dia < 90){
        resultado = "HTA Grado 1";
    }
    else{
        resultado = "HTA Grado 2";
    }

    document.getElementById("out1").innerText = "Resultado: " + resultado;
}

function tempPacientes(){
    let n = parseInt(prompt("Numero de pacientes:"));
    let suma = 0;

    for(let i = 1; i <= n; i++){
        let temp = parseFloat(prompt("Temperatura " + i + ":"));
        suma = suma + temp;
    }
    
    let promedio = suma / n;
    document.getElementById("out2").innerText = "Promedio: " + promedio.toFixed(2) + " C";
}

function contarFiebre(){
    let temp = 0;
    let contador = 0;
    
    while((temp = parseFloat(prompt("Temperatura (0 para salir):"))) != 0){
        if(temp >= 38){
            contador = contador + 1;
        }
    }
    
    document.getElementById("out3").innerText = "Con fiebre: " + contador;
}

function triage(){
    let cod = parseInt(prompt("Codigo 1-4:"));
    let resultado = "";

    switch(cod){
        case 1:
            resultado = "Rojo";
            break;
        case 2:
            resultado = "Amarillo";
            break;
        case 3:
            resultado = "Verde";
            break;
        case 4:
            resultado = "Azul";
            break;
        default:
            resultado = "Invalido";
    }
    
    document.getElementById("out4").innerText = resultado;
}

function oxigeno(){
    let valor = "";
    let resultado = "";
    
    do{
        valor = prompt("SpO2 (o escriba no):");
        if(valor != "no"){
            resultado = resultado + valor + "% \n";
        }
    }while(valor != "no");
    
    document.getElementById("out5").innerText = resultado;
}

// FUNCIONES AMBIENTE

function aqi(){
    let v = parseInt(prompt("AQI:"));
    let resultado = "";
    
    if(v <= 50){
        resultado = "Bueno";
    }
    else if(v <= 100){
        resultado = "Moderado";
    }
    else if(v <= 150){
        resultado = "Danino";
    }
    else{
        resultado = "Muy danino";
    }

    document.getElementById("out6").innerText = resultado;
}

function ruido(){
    let n = parseInt(prompt("Mediciones:"));
    let suma = 0;
    
    for(let i = 1; i <= n; i++){
        let db = parseFloat(prompt("dB " + i + ":"));
        suma = suma + db;
    }
    
    let promedio = suma / n;
    document.getElementById("out7").innerText = "Promedio: " + promedio.toFixed(2) + " dB";
}

function calor(){
    let temp = 0;
    let contador = 0;
    
    while((temp = parseFloat(prompt("Temperatura (0 para salir):"))) != 0){
        if(temp > 45){
            contador = contador + 1;
        }
    }
    
    document.getElementById("out8").innerText = "Focos de calor: " + contador;
}

function residuo(){
    let cod = parseInt(prompt("Codigo 1-4:"));
    let resultado = "";

    switch(cod){
        case 1:
            resultado = "Organico";
            break;
        case 2:
            resultado = "Plastico";
            break;
        case 3:
            resultado = "Papel/Carton";
            break;
        case 4:
            resultado = "Vidrio";
            break;
        default:
            resultado = "Invalido";
    }
    
    document.getElementById("out9").innerText = resultado;
}

function rio(){
    let valor = "";
    let resultado = "";
    
    do{
        valor = prompt("Nivel (m) o escriba no:");
        if(valor != "no"){
            let nivel = parseFloat(valor);
            resultado = resultado + nivel + " m \n";
            if(nivel > 3){
                resultado = resultado + "ALERTA \n";
            }
        }
    }while(valor != "no");
    
    document.getElementById("out10").innerText = resultado;
}

// FUNCIONES ASTRONOMIA

function brillo(){
    let m = parseFloat(prompt("Magnitud:"));
    let resultado = "";

    if(m <= 0){
        resultado = "Extremadamente brillante";
    }
    else if(m <= 2){
        resultado = "Muy brillante";
    }
    else if(m <= 4){
        resultado = "Brillante";
    }
    else if(m <= 6){
        resultado = "Debil";
    }
    else{
        resultado = "No visible";
    }

    document.getElementById("out11").innerText = resultado;
}

function planetas(){
    let n = parseInt(prompt("Cantidad de distancias:"));
    let suma = 0;

    for(let i = 1; i <= n; i++){
        let dist = parseFloat(prompt("Distancia " + i + " (M km):"));
        suma = suma + dist;
    }
    
    let promedio = suma / n;
    document.getElementById("out12").innerText = "Promedio: " + promedio.toFixed(2) + " M km";
}

function crateres(){
    let diametro = 0;
    let contador = 0;
    
    while((diametro = parseFloat(prompt("Diametro (0 para salir):"))) != 0){
        if(diametro > 50){
            contador = contador + 1;
        }
    }
    
    document.getElementById("out13").innerText = "Crateres mayores a 50 km: " + contador;
}

function cuerpo(){
    let cod = parseInt(prompt("Codigo 1-5:"));
    let resultado = "";

    switch(cod){
        case 1:
            resultado = "Estrella";
            break;
        case 2:
            resultado = "Planeta";
            break;
        case 3:
            resultado = "Cometa";
            break;
        case 4:
            resultado = "Asteroide";
            break;
        case 5:
            resultado = "Galaxia";
            break;
        default:
            resultado = "Invalido";
    }
    
    document.getElementById("out14").innerText = resultado;
}

function luz(){
    let valor = "";
    let resultado = "";
    
    do{
        valor = prompt("Lux (o escriba no):");
        if(valor != "no"){
            let lux = parseFloat(valor);
            resultado = resultado + lux + " lux \n";
            if(lux < 5){
                resultado = resultado + "Noche profunda \n";
            }
        }
    }while(valor != "no");
    
    document.getElementById("out15").innerText = resultado;
}