// Función que verifica si un número es par o impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
  // Bucle que muestra los números del 1 al 10 y verifica si son pares o impares
for (let i = 1; i <= 10; i++) {
    if (esPar(i)) {
        alert(i + " es par");
    } else {
        alert(i + " es impar");
    }
}