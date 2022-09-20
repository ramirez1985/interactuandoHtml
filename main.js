//capturo el boton x id y le agrego el evento asociado directamente
//a una funcion de flecha

let boton = document.getElementById("button");
boton.onclick = () => {
  let ele1 = document.getElementById("jardineria");
  let precio1 = parseInt(ele1.options[ele1.selectedIndex].value);
  let ele2 = document.getElementById("piscina");
  let precio2 = parseInt(ele2.options[ele2.selectedIndex].value);
  let ele3 = document.getElementById("limpieza");
  let precio3 = parseInt(ele3.options[ele3.selectedIndex].value);
  let suma = `Total Euros ${precio1 + precio2 + precio3}`;
  document.getElementById("resultado").value = suma;
};
