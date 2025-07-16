// app.js - Café Biblioteca Armonía

function toggleMenu(){
  const menu = document.getElementById('menuResponsive');
  if(menu.style.display === 'flex'){
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
  }
}

function closeModal(id){
  document.getElementById(id).classList.remove('active');
}

function cambiarMensaje(){
  let nuevo = prompt("Ingresa un nuevo mensaje motivador:");
  if(nuevo){
    document.getElementById("mensaje").innerHTML = nuevo;
  }
}

function confirmarPedido(){
  let confirmar = confirm("¿Deseas confirmar tu pedido?");
  if(confirmar){
    alert("Pedido confirmado. Gracias.");
  } else {
    alert("Pedido cancelado.");
  }
}

function agregarPedido(){
  const tabla = document.getElementById("tablaPedidos");
  let hora = prompt("Hora del pedido:");
  let cliente = prompt("Nombre del cliente:");
  let pedido = prompt("Detalle del pedido:");
  if(hora && cliente && pedido){
    let fila = `<tr>
      <td>${hora}</td>
      <td>${cliente}</td>
      <td>${pedido}</td>
    </tr>`;
    tabla.innerHTML += fila;
  }
}
document.getElementById("modo").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  document.body.classList.toggle("claro");
});

document.getElementById("hamburguesa").addEventListener("click", () => {
  document.querySelector("#menu ul").classList.toggle("abierto");
});
