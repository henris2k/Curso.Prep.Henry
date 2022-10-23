// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if ( x > y) {
    return x;
  } else {
    return y;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad > 18) {
    return 'Allowed';
  } else {
    return 'Not allowed';
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status ===1) {
    return 'Online';
  } else if (status ===2) {
    return 'Away';
  } else {
    return 'Offline';
  } 
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman') {
    return 'Guten Tag!';
  } else if (idioma === 'mandarin') {
    return 'Ni Hao!';
  } else if (idioma === 'ingles') {
    return 'Hello!';
  } else {
    return 'Hola!';
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var color = " "
  switch (color) {
    case "blue":
      console.log("This is blue ");
      break;
    case "red":
      console.log("This is red");
      break;
    case "green":
      console.log("This is green");
      break;
    case "orange":
      console.log("This is orange");
      break;    
    default:
      console.log("Color not found");
      break;
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  switch(numero) {
    case 10:
      return 'true';
      break;
    case 5:
      return 'true';
      break;
    default:
      return 'false';  
    }
  }


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero>20 && numero<50;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return Math.floor(numero)===numero;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var div3 = numero%3;
  var div5 = numero%5;
  var div15 = numero%15;
  if (div15 === 0)  return 'fizzbuzz';
  if  (div3 === 0)   return 'fizz';
  if  (div5 === 0)   return 'buzz';
  else  return numero;
  }


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1>0 && num1>num2 && num1>num3) return 'Numero 1 es mayor y positivo';
  if (num1<0 || num2<0 || num3<0) return 'Hay negativos';
  if (num3>num1 && num3>num2) return num3 + 1;
  if (num1 === 0 || num2 === 0 || num3 ===0) return 'error';
  else return 'false';
}


/*bucle para recorrer un array
  for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
*/


function numerosPrimoshasta(num) {
   //let r = 1;
  for (i=num;i>2;i--){ 
    let r=1;
    for (j=i-1;j>2;j--) { 
     r=r*(i%j);
  //    console.log(i+" "+j+" "+(i%j)+" "+r);
  //    var r=r*(i%j);
  //    console.log(r);
    if (r === 0){
        console.log(i + "  NO es primo");
    } 
   //   if (r !== 0){
   //     console.log(i + " >>>>>>>>>>>>> ES PRIMO"  );
   //   }
    //return;
  //    if (r !==0) {
  //      console.log( i + "  es primo");
 }
 //return;
} 
//return;
}




/* for (let i = num-1; i>2; i++) {
  function esprimo(a){
    for (let i = 2; i < a; i++) {
  if (a%i === 0) {
    console.log(" a NO ES PRIMO")
    //break;
  }
    }
  };
  esprimo(a);
}
} 
 

  
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  //var primo = 1																													
  for (i=num; i>2; i--){
  for (j=num-1; j>2; j--){
      console.log(i%j);
          if (i%j===0) {
      return  j + ' no es primo ';
    } else {
      return   j + ' es primo ';
    }
    break;
  }
}
}

function todosPrimos(num){
  for (k=2; k<=num; k++){
    esPrimo(num);
    console.log(esPrimo(k));
  }
}
*/




 

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
 if (valor === true) {
   return 'soy verdadero';
    
  }
  if (valor === false) {
    return 'soy falso';
  }
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  //const tabla = seis[];
    let arraytablaDelSeis = [];
    for (i=0; i<11 ;i++) {
      arraytablaDelSeis.push(6*i);
      
  }
  return arraytablaDelSeis
}


// me colgué un poco, pero quise probar si podia hacer la funcion para todos los numeros.
// y descubrí la diferencia entre return y console.log
// no es que no la supiera, pero es que return, rompe el flujo del programa
function tieneTresDigitos(i) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
 for (i=0;i<1200;i++){
  //console.log(i);
  if (i > 99 && i<=999){
    console.log( i + '                   TIENE tres digitos') ;
      }
       else {
        console.log( i + '   NO tiene tres digitos') ;

      }
  
    }
  }  



// me colgué un poco tambien, pero quise mostrar cada paso del proceso.
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    var a = numero;
    var i = 0;
    do {
      i = i + 1;
      a = a + 5;
      console.log(a);
    }
    while(i < 8);
    
    // return a;
  }
       
  



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
