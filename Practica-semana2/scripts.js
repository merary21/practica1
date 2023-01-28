
function conversion(){
var euros = prompt("Ingrese el valor en euros que desea convertir:");
var factor = 1.09;
var dolares = euros * factor;
alert("El valor en dólares es: " + dolares);
}

function conver(){
    let celsius = prompt("Ingresa la cantidad en grados Celsius:");
    let fahrenheit = (9/5) * celsius + 32;
    alert(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
    }
    
function con(){
    let name = prompt("Ingrese su nombre completo:");
    let size = prompt("Ingrese el tamaño de la caja (S/M/L):");
    let commentary = prompt("ingrese un cometario si asi lo desea:");
    
    let message = "\nNombre: " + name  + "\nTamaño de la caja: " + size + "\nComentario del envio: " + commentary;
    alert(message);
}
function cambiarcolor() {
  var element =  document.getElementById("parrafo1");
  element.style.backgroundColor='Orchid';
  }

  function cambiarcolo() {
      var element =  document.getElementById("parrafo1");
      element.style.backgroundColor='white';
      }

function cambiarcol() {
  var element =  document.getElementById("parrafo1");
  element.style.backgroundColor='GreenYellow';
  
}
