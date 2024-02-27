function saludo() {
      alert("HELLO WORLD!!");

}
function suma(){
    //declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    // solicitamos los valores y los asignamos en las variables
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    // realizamos las operaciones necesarias
    S = A + B;
    // mostramos el resultado en pantalla
    alert("El resultado de la suma es" +S);
    
}
function opBasicas(){
    let n1,n2,s,r,m,d=0;
    n1 = parseInt(prompt("Ingrese el primer numero a operar"));
    n2 = parseInt(prompt("Ingrese el segundo numero a operar"));
    s = n1+n2
    r = n1-n2
    m = n1*n2
    d = n1/n2
    alert("el resultado de la suma es:" +s);
    alert("el resultado ed la resta es:"+r);
    alert("el resultado de la multiplicacion es:"+m);
    alert("el resultado de la division es:"+ d);
   
}

function Cuadrado(){
    let n1, r =0;
    n1= parseInt(prompt("Ingrese el valor a elevar al cuadrado"));
    r = n1*n1
    alert("El resultado de elevar el numero al cuadrado es:" + r);

}
function promedio(){

    let n1,n2,n3,n4,n5,n6,n7,p=0;
    n1= parseInt(prompt("Ingrese nota"));
    n2= parseInt(prompt("Ingrese nota"));
    n3= parseInt(prompt("Ingrese nota"));
    n4= parseInt(prompt("Ingrese nota"));
    n5= parseInt(prompt("Ingrese nota"));
    n6= parseInt(prompt("Ingrese nota"));
    n7= parseInt(prompt("Ingrese nota"));
    p= (n1+n2+n3+n4+n5+n6+n7)/7
    if(p>5){
alert ("El estudiante aprobo con un promedio de:"+p);

    }else{
        alert("El estudiante reprobo con un promedio de:"+p);
    }
}
function añonacimiento(){
    let edad,añodenacimiento =0;
    edad= parseInt(prompt("Por favor ingrese su edad"));
    añodenacimiento= 2024- edad
        alert("Su año de nacimiento es:" + añodenacimiento);

}
function Atriangulo(){
    let b,a,ar =0;
    b = parseInt(prompt("Ingrese el valor de la base del triangulo"));
    a = parseInt(prompt("Ingrese el el valor de la altura del triangulo"));
    ar= (a+b)/2
    alert ("El area del triangulo es:"+ar);
}
function numpar (){
    let n1,r=0;
    n1= parseInt(prompt("Ingrese el valor que desea consultar si es par o impar"));
    if (n1 % 2==0){
        alert (n1+"Es numero par");
    }else{
        alert(n1+"Es numero impar");
    }


}
function mayordedosnumeros(){
    let n1,n2=0;
    n1=parseInt(prompt("Ingrese el primer numero"));
    n2=parseInt(prompt("Ingrese el segundo numero"));
    if(n1==n2){
        alert("Los numeros ingresador son iguales por favor ingrese valores diferentes");

    }else if(n1>n2) {
        alert(n1+"es mayor");
    }else{
        alert(n2+"es mayor");
    }
        
    
}
function elmenordetresnumeros(){
    let n1, n2, n3 =0;
    n1=parseInt(prompt("Ingrese el primer numero"));
    n2=parseInt(prompt("Ingrese el segundo valor"));
    n3=parseInt(prompt("Ingrese el tercer valor"));

    if((n1==n2) && (n1==n3)){
        alert("Los numeros ingresados son iguales, por favor ingrese otros valores");

    }else if((n1<n2) && (n1<n3)){
        alert(n1+"es el menor de los tres numeros");
    }else if((n2<n1) && (n2<n3)){
        alert(n2+"es el menor de los tres numeros");

    }else{
        alert(n3+"es el menor de los tres numeros");
    }

    
}
function convermed (){
    let m,p,cm=0;
    m=parseInt(prompt("Ingrese el valor de metros a calcular"));
        p=m*39.37
        cm=m*100
     
     alert(m+"metros equivalen a:" +p+"pulgadas y"+cm+"centimetros");   
}

function cdt() {
    let Capital = 0;
    let TasadeInteresAnual = 0;
    let Periodo = 0;
    
    Capital = parseInt(prompt("Ingrese el monto o capital inicial:"));
    TasadeInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje):"));
    Periodo = parseInt(prompt("Ingrese el periodo en años:"));
    
    let TasadeInteresMensual = TasadeInteresAnual / 12 / 100;
    let Ganancia = Capital * TasadeInteresMensual * Periodo;
    let CapitalFinal = Capital + Ganancia;
    
    alert("La ganancia invertida es de " + Ganancia);
    console.log("La ganancia invertida es de " + Ganancia);
    alert("El capital al final del periodo es de " + CapitalFinal);
}
function fruteria() {
    let p, d, pr, k, tp;
    let fr;
  
    p = 0;
    d = 0;
    pr = 0;
    k = 0;
    tp = 0;
  
    fr = prompt("Escribe la fruta a comprar");
    k = parseFloat(prompt("Escribe la cantidad en kilos:"));
    p = parseFloat(prompt("Escribe el precio por kilo:"));
  
    switch (fr) {
      case "manzana":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      case "pera":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      case "sandia":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      default:
        alert(
          "La fruta ingresada no está disponible. Por favor, elija manzana, pera o sandía."
        );
        return; // Salir de la función si no se eligió una fruta válida
    }
  
    alert(
      "El valor del descuento es: $" +
        d.toFixed(2) +
        " pesos. El valor total a pagar es: $" +
        tp.toFixed(2) +
        " pesos"
    );
  }


