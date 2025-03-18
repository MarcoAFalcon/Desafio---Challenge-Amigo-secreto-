// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = ['']

//toma el valor que haya en el ID amigo, valida que el input tenga un valor y si lo hay lo guarda en el array amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(amigo);
        limpiar('amigo','');
        mostrarAmigos()
    }
}
//iteracion para agregar en la lista con ID listaAmigos los nombres en la lista amigos
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';         
        for (let index = 0; index < amigos.length; index++) {
            listaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
        }
}

function limpiar(id,valor) {
    document.getElementById(id).value =valor ;
}