var imageOne = document.querySelector('label[for="checkOne"] img');
//Mediante querySelector almaceno la imagen que esta dentro de la etiqueta label con un atributo for igual a checkOne
let divOne = document.getElementById("divOne");
//Almaceno el primer div en la variable divOne
let logoOne = document.querySelector('section[class="Sags"] section[class="logoOne"]');
//Almaceno el primer logo en la variable logoOne
let separadorOne = document.getElementById("separadorOne");
//Almaceno el primer separador en la variable separadorOne mediante la funcion de seleccion por id

// Agregamos un evento de change personalizado al input
document.getElementById("checkOne").addEventListener('change', function() {

    if (this.checked) {
        // Si el input está chequeado, cambiamos el ancho de la imagen a 0px
        imageOne.style.width = "0px";

        // Si el input está chequeado, cambiamos el ancho del div a 71 porciento y el alto en auto
        divOne.style.width = "";
        divOne.style.height = "auto";

        // Si el input está chequeado el logo se agranda 100 porciento de su contenedor
        logoOne.style.width = "100%";

        // Si el input está chequeado el hr o separador se achica a un 1 porciento
        separadorOne.style.width = "1%";

    } else {

        // Si el input está deschequeado, cambiamos el ancho de la imagen a su ancho por defecto
        imageOne.style.width = "";

        // Si el input está deschequeado, cambiamos el ancho y el alto del div a 0 pixeles
        divOne.style.width = "0px";
        divOne.style.height = "0px";

        // Si el input está deschequeado el logo vuelve a su tamaño por defecto
        logoOne.style.width = "";

         // Si el input está deschequeado el hr o separador vuelve a su ancho por defecto
        separadorOne.style.width = "";
        
    }
});
/**************************************************************************/

let imageTwo = document.querySelector('label[for="checkTwo"] img');
let divTwo = document.getElementById("divTwo");
let logoTwo = document.querySelector('section[class="Sags"] section[class="logoTwo"]');
let separadorTwo = document.getElementById("separadorTwo");

document.getElementById("checkTwo").addEventListener('change', function() {

    if (this.checked) {
        imageTwo.style.width = "0px";
        
        divTwo.style.width = ""
        divTwo.style.height = "auto";

        logoTwo.style.width = "100%";

        separadorTwo.style.width = "1%";

    } else {
        imageTwo.style.width = "";

        divTwo.style.width = "0px";
        divTwo.style.height = "0px";

        logoTwo.style.width = "";

        separadorTwo.style.width = "";
    }
});

/**************************************************************************/

var imageThree = document.querySelector('label[for="checkThree"] img');
let divThree = document.getElementById("divThree");
let logoThree = document.querySelector('section[class="Sags"] section[class="logoThree"]');
let separadorThree = document.getElementById("separadorThree");

document.getElementById("checkThree").addEventListener('change', function() {

    if (this.checked) {
        imageThree.style.width = "0px";
        
        divThree.style.width = ""
        divThree.style.height = "auto";

        logoThree.style.width = "100%";

        separadorThree.style.width = "1%";

    } else {

        imageThree.style.width = "";

        divThree.style.width = "0px";
        divThree.style.height = "0px";

        logoThree.style.width = "";

        separadorThree.style.width = "";
    }
});
/**************************************************************************/

var imageFour = document.querySelector('label[for="checkFour"] img');
let divFour = document.getElementById("divFour");
let logoFour = document.querySelector('section[class="Sags"] section[class="logoFour"]');
let separadorFour = document.getElementById("separadorFour");


document.getElementById("checkFour").addEventListener('change', function() {

    if (this.checked) {
        imageFour.style.width = "0px";
        
        divFour.style.width = ""
        divFour.style.height = "auto";

        logoFour.style.width = "100%";

        separadorFour.style.width = "1%";

    } else {
        imageFour.style.width = "";

        divFour.style.width = "0px";
        divFour.style.height = "0px";

        logoFour.style.width = "";

        separadorFour.style.width = "";
    }
});
/**************************************************************************/
var imageFive = document.querySelector('label[for="checkFive"] img');
let divFive = document.getElementById("divFive");
let logoFive = document.querySelector('section[class="Sags"] section[class="logoFive"]');
let separadorFive = document.getElementById("separadorFive");

document.getElementById("checkFive").addEventListener('change', function() {

    if (this.checked) {
        imageFive.style.width = "0px";
        
        divFive.style.width = ""
        divFive.style.height = "auto";

        logoFive.style.width = "100%";

        separadorFive.style.width = "1%";
    } else {
        imageFive.style.width = "";

        divFive.style.width = "0px";
        divFive.style.height = "0px";

        logoFive.style.width = "";
        
        separadorFive.style.width = "";

    }
});

/**********************************************************************************/