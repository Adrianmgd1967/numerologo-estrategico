
/**
 * Lógica de cálculos numerológicos según el flujo estratégico
 */

function reducirNumero(n) {
    while (n > 9) {
        n = n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return n;
}

function calcularCaminoVida(fecha) {
    // fecha: "DD/MM/YYYY"
    const digitos = fecha.replace(/\//g, '').split('').map(Number);
    const suma = digitos.reduce((a, b) => a + b, 0);
    return reducirNumero(suma);
}

function calcularDiaNacimiento(dia) {
    const original = parseInt(dia);
    const reducido = reducirNumero(original);
    return { original, reducido };
}

function calcularNumerologiaNombre(nombreCompleto) {
    const valoresVocales = { 'A': 1, 'E': 5, 'I': 9, 'O': 6, 'U': 3 };
    const partes = nombreCompleto.toUpperCase().split(' ');
    
    const resultadosPartes = partes.map(parte => {
        const vocales = parte.split('').filter(char => 'AEIOU'.includes(char));
        const suma = vocales.reduce((acc, v) => acc + valoresVocales[v], 0);
        return reducirNumero(suma);
    });

    // Dirección: Nombres (Asumimos los dos primeros si existen)
    // Mente: Primer Apellido (Asumimos la penúltima parte si es formato hispano)
    // Idealidad: Total Dirección + Mente
    
    const direccionVal = resultadosPartes.slice(0, -2).reduce((a, b) => a + b, 0) || resultadosPartes[0];
    const direccion = reducirNumero(direccionVal);
    
    const menteVal = resultadosPartes[resultadosPartes.length - 2] || 0;
    const mente = reducirNumero(menteVal);
    
    const idealidad = reducirNumero(direccion + mente);

    return { direccion, mente, idealidad };
}

module.exports = {
    calcularCaminoVida,
    calcularDiaNacimiento,
    calcularNumerologiaNombre,
    reducirNumero
};
