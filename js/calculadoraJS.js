var $zero = $("#0"),
    $um = $("#1"),
    $dois = $("#2"),
    $tres = $("#3"),
    $quatro = $("#4"),
    $cinco = $("#5"),
    $seis = $("#6"),
    $sete = $("#7"),
    $oito = $("#8"),
    $nove = $("#9"),
    $frac = $("#ponto"),
    $soma = $("#soma"),
    $sub = $("#sub"),
    $mult = $("#mult"),
    $div = $("#div"),
    $raiz = $("#raiz"),
    $pot = $("#potencia"),
    $delAll = $("#delall"),
    $del = $("#del"),
    $res = $("#resultado"),
    array = [],
    display,
    aux,
    css,
    cont = 0;

$("html").keydown(function () {
    switch (event.key) {
        case '0':
            zero();
            break;
        case '1':
            um();
            break;
        case '2':
            dois();
            break;
        case '3':
            tres();
            break;
        case '4':
            quatro();
            break;
        case '5':
            cinco();
            break;
        case '6':
            seis();
            break;
        case '7':
            sete();
            break;
        case '8':
            oito();
            break;
        case '9':
            nove();
            break;
        case 'Backspace':
        case 'Delete':
            del();
            break;
        case ',':
        case '.':
            fracion();
            break;
    }

});

function zero() {
    if (cont > 0) {
        addNum(0);
    }
}

function um() {
    addNum(1);
}

function dois() {
    addNum(2);
}

function tres() {
    addNum(3);
}

function quatro() {
    addNum(4);
}

function cinco() {
    addNum(5);
}

function seis() {
    addNum(6);
}

function sete() {
    addNum(7);
}

function oito() {
    addNum(8);
}

function nove() {
    addNum(9);
}

function del() {
    if (cont > 1) {
        array.pop();
        cont--;
        convert();
    } else if (cont == 1) {
        array[0] = 0;
        cont--;
        convert();
    }
}

function fracion() {
    if (cont >= 0 && cont < 17) {
        if (!array.includes(",")) {
            array.push(",");
            convert();
            cont++;
        }
    }
}

function soma() {

}

function sub() {

}

function mult() {

}

function div() {

}

function raiz() {

}

function pot(){
    
}

$zero.click(function () {
    zero();
});

$um.click(function () {
    um();
});

$dois.click(function () {
    dois();
});

$tres.click(function () {
    tres();
});

$quatro.click(function () {
    quatro();
});

$cinco.click(function () {
    cinco();
});

$seis.click(function () {
    seis();
});

$sete.click(function () {
    sete();
});

$oito.click(function () {
    oito();
});

$nove.click(function () {
    nove();
});

$frac.click(function () {
    fracion();
});

$del.click(function () {
    del();
});

function addNum(aux) {
    if (cont >= 0 && cont < 17) {
        if (array[0] == 0) {
            array = [];
        }
        array.push(aux);
        cont++;
        convert();
    }
}

function convert() {
    string = array.join("");

    if (string.length < 9) {
        css = "10vh";
    } else if (string.length == 10) {
        css = "9vh";
    } else if (string.length == 11) {
        css = "8vh";
    } else if (string.length >= 12 && string.length < 14) {
        css = "7vh";
    } else if (string.length == 14) {
        css = "6vh";
    } else if (string.length == 16) {
        css = "5.5vh";
    } else if (string.length == 17) {
        css = "5.25vh";
    }

    $("#VRes").css({ "font-size": css });
    $("#VRes").html(string);
}