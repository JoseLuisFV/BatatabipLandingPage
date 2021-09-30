var mover = document.getElementById('section_scroll');//Esta es la sección que contiene las tarjetas
var anchoTarjeta = document.getElementById('main_tarjeta').clientWidth; //Obtengo el ancho de la tarjeta principal que en realidad es el mismo para las tres
var buttonLeft = document.getElementById('bLess');//traigo los botones al script
var buttonRight = document.getElementById('bMore');

console.log(anchoTarjeta); //Muestra el ancho en px de la tarjeta 

function checkButtonsNecesity() {
    if ((anchoTarjeta * 3 + 20) < mover.clientWidth) {
        buttonLeft.style.display = "none"; //Oculto los botones en caso de visualizar las tres tarjetas 
        buttonRight.style.display = "none";
    } else {
        buttonLeft.style.display = "block";//Muestra los botones en n caso que no se muestren 
        buttonRight.style.display = "block";//las tres tarjetas en pantalla
    }

}
checkButtonsNecesity();
mover.scroll(anchoTarjeta, 0);

function scrollRightNx() {

    mover.scroll(mover.scrollLeft + anchoTarjeta, 0);/*Obtiene la posicion del scroll de la seccion y le suma el ancho de la tarjeta para ir a la siguiente*/
    console.log(mover.scrollLeft); //Muestra en consola la posicion del scroll
}

function scrollLeftNx() {
    mover.scroll(mover.scrollLeft - anchoTarjeta, 0);
    console.log(mover.scrollLeft); //Muestra en consola la posicion del scroll

}