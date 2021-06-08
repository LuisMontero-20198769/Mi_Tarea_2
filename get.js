const dnumAnterior = document.getElementById('num-anterior');
const dnumActual = document.getElementById('num-actual');
const clickNumeros = document.querySelectorAll('.num');
const clickOperadores = document.querySelectorAll('.operador');

const hola = new Controlador(dnumAnterior, dnumActual);

clickNumeros.forEach(boton => {
    boton.addEventListener('click', () => hola.addNumero(boton.innerHTML));
});

clickOperadores.forEach(boton => {
    boton.addEventListener('click', () => hola.procesar(boton.value))
});