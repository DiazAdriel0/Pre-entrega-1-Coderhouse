//Registro de usuario
let usuario;
let contrasenia;
let edad;

do{
usuario = prompt("Elija su nombre de usuario");

while ((usuario == "") || (usuario == null)){
    alert("No ingresó ningun nombre de usuario");
    usuario = prompt("Elija su nombre de usuario");
}

contrasenia = Number(prompt("Elija su contraseña (Utilice solo números)"));

while (isNaN(contrasenia) || (contrasenia == "") || (contrasenia == null)){
    alert("No ingresó una contraseña valida");
    contrasenia = prompt("Vuelva a ingresar su contraseña");
}

edad = parseInt(prompt("Para ingresar a la plataforma debe tener 12 años o mas, ¿Que edad tiene?"));

if (edad < 12) {
    alert("No puede ingresar a la plataforma por ser menor de 12 años");
    alert("Pidale a otro usuario que se registre")
}
}while (edad < 12)

// Algoritmo para comprobar si un numero es par o impar

let numeroIngresado;
let continuarParImpar;

do{
    numeroIngresado = parseInt(prompt("Ingresá un número para saber si es par o impar"));
    
    if (isNaN(numeroIngresado)){
        alert("Solo se admiten números")
    }
    else if ((numeroIngresado % 2) != 0){
        alert("El número ingresado es impar");
    }
    else{
        alert("El numero ingresado es par");
    }
    continuarParImpar = prompt(`- Para continuar presione "Aceptar"\n- Si desea dejar de evaluar escriba "esc" o presione "Cancelar"`);
}while((continuarParImpar != "esc") && (continuarParImpar != "ESC") && (continuarParImpar != "Esc") && (continuarParImpar != null));

// Tabla de multiplicar 

let ingresaNumero = Number(prompt("Ingresá el número a multiplicar"));
let resultado;
let continuarMultiplicar;

do{
    for (i=0; i <= 10; i++){
        resultado = ingresaNumero * i
        alert(ingresaNumero + ` * ` + i + ` = ` + resultado + `\n`);
    }
    continuarMultiplicar = confirm(`¿Desea continuar con las tablas de multiplicar?`)
    switch (continuarMultiplicar) {
        case true:
            ingresaNumero = Number(prompt("Ingresá el nuevo número a multiplicar"))
            break;
        default:
            alert(`Espero que te haya sido de utilidad`)
            break;
    }
}while (continuarMultiplicar)