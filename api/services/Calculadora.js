class Calculadora {
  
  multiplicacao(a, b) {
    if (typeof a != 'number' || typeof b != 'number') throw new TypeError();
    return a * b;
  }

  subtracao(a, b) {
    if (typeof a != 'number' || typeof b != 'number') throw new TypeError();
    return a - b;
  }

  soma(a, b) {
    if (typeof a != 'number' || typeof b != 'number') throw new TypeError();
    return a + b;
  }
  /**
   * Retorna um float ** TESTADO
   */
  divisao(a, b) {
    if (typeof a != 'number' || typeof b != 'number') throw new TypeError();
    return a / b;
  }

  /**
   * Retorna um float
   */
  raizQuadrada(numero) {
    if (typeof numero != 'number') throw new TypeError();
    if (numero < 0) throw new Error('Número menor que 0');
    return Math.sqrt(numero);
  }

  /**
   * Retorna lista de números inteiros
   */
  divisores(numero) {
    if (typeof numero != 'number') throw new TypeError();
    if (numero < 0) throw new Error('Número menor que 0');
    let divisores = [];
    let divisor = 1;
    while (divisor <= Math.ceil(numero / 2)) {
      if (numero % divisor == 0) {
        divisores.push(divisor);
      }
      divisor++;
    }
    divisores.push(numero);
    return divisores;
  }

  seno(numero) {
    if (typeof numero != 'number') throw new TypeError();
    return Math.sin(numero);
  }

  cosseno(numero) {
    if (typeof numero != 'number') throw new TypeError();
    return Math.cos(numero);  
  }

  tangente(numero) {
    if (typeof numero != 'number') throw new TypeError();
    if (numero % Math.PI == (Math.PI/2)) throw new Error('Tangente não existente');
    return Math.tan(numero);
  }
}

module.exports = new Calculadora();