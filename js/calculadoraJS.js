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
    string,
    num,
    aux,
    r = false,
    p = false,
    terminou = false,
    mais = false,
    menos = false,
    partes = false,
    vezes = false,
    cont = 0;

//Botões com click:

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

$soma.click(function () {
    if (r || p) {
        terminou = false;
    }
    soma();
});

$sub.click(function () {
    if (r || p) {
        terminou = false;
    }
    sub();
});

$mult.click(function () {
    if (r || p) {
        terminou = false;
    }
    mult();
});

$div.click(function () {
    if (r || p) {
        terminou = false;
    }
    div();
});

$res.click(function () {
    resultado();
});

$raiz.click(function () {
    if (cont > 0) {
        res = raiz(string);
        $("#op").html("²√" + string);
        convert(res);
        reset();
        terminou = true;
        r = true;
    }
});

$pot.click(function () {
    if (string > 0) {
        console.log(string);
        res = pot(string);
        $("#op").html(string + "²");
        convert(res);
        reset();
        terminou = true;
        p = true;
    }
});


//Botões com teclado:

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

//Funções números:

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

//Funções Operações

function opReset() {
    num = string;
    convert(num);
    mais = false;
    menos = false;
    vezes = false;
    partes = false;
}

function soma() {
    opReset();
    mais = true;
    opera = num + ' + ';
    $("#op").html(opera);
    reset();
}

function sub() {
    opReset();
    menos = true;
    opera = num + ' - ';
    $("#op").html(opera);
    reset();
}

function mult() {
    opReset();
    vezes = true;
    opera = num + ' * ';
    $("#op").html(opera);
    reset();
}

function div() {
    opReset();
    partes = true;
    opera = num + ' / ';
    $("#op").html(opera);
    reset();
}

function resultado() {
    num = Number(num);
    string = Number(string);

    if (mais) {
        retorno = num + string;
    } else if (menos) {
        retorno = num - string;
    } else if (vezes) {
        retorno = num * string;
    } else if (partes) {
        retorno = num / string;
    }

    $("#op").html(opera + string + ' = ');

    convert(retorno);

    opReset();
    reset();
    terminou = true;
}

function raiz(num) {
    num = Math.sqrt(num);
    return num;
}

function pot(num) {
    num = Math.pow(num, 2);
    return num;
}

//funções de funcionamento

function reset() {
    array = [];
    cont = 0;
}

function addNum(aux) {
    if (cont >= 0 && cont < 17) {
        if (array[0] == 0 && array[1] != ',') {
            array = [];
        }
        array.push(aux);
        cont++;
        convert(array);
    }
}

function del() {
    if (cont > 1) {
        array.pop();
        cont--;
        convert(array);
    } else if (cont == 1) {
        array[0] = 0;
        cont--;
        convert(array);
    } else {
        array[0] = 0;
        convert(array);
    }
}


function fracion() {
    if (cont > 0 && cont < 17) {
        if (!array.includes(",")) {
            array.push(",");
            convert(array);
            cont++;
        }
    } else if (cont == 0) {
        array.push("0");
        array.push(",");
        convert(array);
        cont += 2;
    }
}

function convert(val) {
    if (Array.isArray(val)) {
        string = val.join("");
    } else {
        string = val;
        string = string.toString();
        if (string.length > 22) {
            string = string.slice(0, 22);
        }
    }

    string = string.replace(".", ",");

    if (!string.includes(",") && !string.includes(".")) {
        switch (string.toString().length) {
            case 4:
                string = string.slice(0, 1) + '.' + string.slice(1);
                break;
            case 5:
                string = string.slice(0, 2) + '.' + string.slice(2);
                break;
            case 6:
                string = string.slice(0, 3) + '.' + string.slice(3);
                break;
            case 7:
                string = string.slice(0, 1) + '.' + string.slice(1);
                string = string.slice(0, 5) + '.' + string.slice(5);
                break;
            case 8:
                string = string.slice(0, 2) + '.' + string.slice(2);
                string = string.slice(0, 6) + '.' + string.slice(6);
                break;
            case 9:
                string = string.slice(0, 3) + '.' + string.slice(3);
                string = string.slice(0, 7) + '.' + string.slice(7);
                css = "9vh";
                break;
            case 10:
                string = string.slice(0, 1) + '.' + string.slice(1);
                string = string.slice(0, 5) + '.' + string.slice(5);
                string = string.slice(0, 9) + '.' + string.slice(9);
                css = "7.9vh";
                break;
            case 11:
                string = string.slice(0, 2) + '.' + string.slice(2);
                string = string.slice(0, 6) + '.' + string.slice(6);
                string = string.slice(0, 10) + '.' + string.slice(10);
                css = "7.3vh";
                break;
            case 12:
                string = string.slice(0, 3) + '.' + string.slice(3);
                string = string.slice(0, 7) + '.' + string.slice(7);
                string = string.slice(0, 11) + '.' + string.slice(11);
                css = "6.7vh";
                break;
            case 13:
                string = string.slice(0, 1) + '.' + string.slice(1);
                string = string.slice(0, 5) + '.' + string.slice(5);
                string = string.slice(0, 9) + '.' + string.slice(9);
                string = string.slice(0, 13) + '.' + string.slice(13);
                css = "6vh";
                break;
            case 14:
                string = string.slice(0, 2) + '.' + string.slice(2);
                string = string.slice(0, 6) + '.' + string.slice(6);
                string = string.slice(0, 10) + '.' + string.slice(10);
                string = string.slice(0, 14) + '.' + string.slice(14);
                css = "5.7vh";
                break;
            case 15:
                string = string.slice(0, 3) + '.' + string.slice(3);
                string = string.slice(0, 7) + '.' + string.slice(7);
                string = string.slice(0, 11) + '.' + string.slice(11);
                string = string.slice(0, 15) + '.' + string.slice(15);
                css = "5.35vh";
                break;
            case 16:
                string = string.slice(0, 1) + '.' + string.slice(1);
                string = string.slice(0, 5) + '.' + string.slice(5);
                string = string.slice(0, 9) + '.' + string.slice(9);
                string = string.slice(0, 13) + '.' + string.slice(13);
                string = string.slice(0, 17) + '.' + string.slice(17);
                css = "4.9vh";
                break;
            case 17:
                string = string.slice(0, 2) + '.' + string.slice(2);
                string = string.slice(0, 6) + '.' + string.slice(6);
                string = string.slice(0, 10) + '.' + string.slice(10);
                string = string.slice(0, 14) + '.' + string.slice(14);
                string = string.slice(0, 18) + '.' + string.slice(18);
                css = "4.65vh";
                break;
            case 18:
                string = string.slice(0, 3) + '.' + string.slice(3);
                string = string.slice(0, 7) + '.' + string.slice(7);
                string = string.slice(0, 11) + '.' + string.slice(11);
                string = string.slice(0, 15) + '.' + string.slice(15);
                string = string.slice(0, 19) + '.' + string.slice(19);
                css = "4.45vh";
                break;
            case 19:
                string = string.slice(0, 1) + '.' + string.slice(1);
                string = string.slice(0, 5) + '.' + string.slice(5);
                string = string.slice(0, 9) + '.' + string.slice(9);
                string = string.slice(0, 13) + '.' + string.slice(13);
                string = string.slice(0, 17) + '.' + string.slice(17);
                string = string.slice(0, 21) + '.' + string.slice(21);
                css = "4.12vh";
                break;
            case 20:
                string = string.slice(0, 2) + '.' + string.slice(2);
                string = string.slice(0, 6) + '.' + string.slice(6);
                string = string.slice(0, 10) + '.' + string.slice(10);
                string = string.slice(0, 14) + '.' + string.slice(14);
                string = string.slice(0, 18) + '.' + string.slice(18);
                string = string.slice(0, 22) + '.' + string.slice(22);
                css = "4vh";
                break;
            case 21:
                string = string.slice(0, 3) + '.' + string.slice(3);
                string = string.slice(0, 7) + '.' + string.slice(7);
                string = string.slice(0, 11) + '.' + string.slice(11);
                string = string.slice(0, 15) + '.' + string.slice(15);
                string = string.slice(0, 19) + '.' + string.slice(19);
                string = string.slice(0, 23) + '.' + string.slice(23);
                css = "3.8vh";
                break;
            case 22:
                string = string.slice(0, 1) + '.' + string.slice(1);
                string = string.slice(0, 5) + '.' + string.slice(5);
                string = string.slice(0, 9) + '.' + string.slice(9);
                string = string.slice(0, 13) + '.' + string.slice(13);
                string = string.slice(0, 17) + '.' + string.slice(17);
                string = string.slice(0, 21) + '.' + string.slice(21);
                string = string.slice(0, 25) + '.' + string.slice(25);
                css = "3.58vh";
                break;
            default:
                css = "10vh";
                break;
        }
    } else {
        switch (string.toString().length) {
            case 10:
                css = '9.48vh';
                break;
            case 11:
                css = '8.58vh';
                break;
            case 12:
                css = '7.85vh';
                break;
            case 13:
                css = '7.2vh';
                break;
            case 14:
                css = '6.67vh';
                break;
            case 15:
                css = '6.2vh';
                break;
            case 16:
                css = '5.8vh';
                break;
            case 17:
                css = '5.45vh';
                break;
            case 18:
                css = '5.148vh';
                break;
            case 19:
                css = '4.87vh';
                break;
            case 20:
                css = '4.62vh';
                break;
            case 21:
                css = '4.39vh';
                break;
            case 22:
                css = '4.19vh';
                break;
        }
    }


    $("#VRes").css({ "font-size": css });
    $("#VRes").html(string);

    if (terminou) {
        $("#op").html('');
    }

    terminou = false;

    string = string.replace(",", ".");
}