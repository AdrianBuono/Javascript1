let entrada = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada + "\n";
    entrada = prompt("INGRESAR NOMBRE");

}
alert(ingresados);