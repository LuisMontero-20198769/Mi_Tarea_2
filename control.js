class Controlador {
    constructor(dnumAnterior, dnumActual) {
        this.dnumActual = dnumActual;
        this.dnumAnterior = dnumAnterior;
        this.calc = new Calculadora();
        this.Operacion = undefined;
        this.numActual = '';
        this.numAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrarUno() {
        this.numActual = this.numActual.toString().slice(0,-1);
        this.imprimir();
    }

    borrarTodo(){
        this.numActual='';
        this.numAnterior='';
        this.Operacion = undefined;
        this.imprimir();

    }

    procesar(tipo) {
        this.Operacion !== 'igual' && this.calcular();
        this.Operacion = tipo;
        this.numAnterior = this.numActual || this.numAnterior;
        this.numActual = '';
        this.imprimir();
    }

    addNumero(numero) {
        
        this.numActual = this.numActual.toString() + numero.toString();
        this.imprimir();
    }

    imprimir() {
        this.dnumActual.textContent = this.numActual;
        this.dnumAnterior.textContent = `${this.numAnterior} ${this.signos[this.Operacion] || ''}`;
    }

    calcular() {
        const numAnterior = parseFloat(this.numAnterior);
        const numActual = parseFloat(this.numActual);

        if( isNaN(numActual)  || isNaN(numAnterior) ) return
        this.numActual = this.calc[this.Operacion](numAnterior, numActual);
    }
}