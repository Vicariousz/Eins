

function zoraya() {
    console.log('hello world');

    return ausgabe();
}

function ausgabe() {
    return 10;
}

function markus(variable) {
    if ((variable === '10' || variable === 10) && variable.length > 1) {
        console.log('aber ' + variable + ' wäre auch ok!');
    } else if (variable === '11') {
        console.log('aber ' + variable + ' wäre auch ok!');
    }

    return 10;

}


var variable;

variable = zoraya();

variable = null;

console.log(variable);

$('#uhrzeit').text(variable);


markus(markus(zoraya()));
markus(10);
markus(11);
markus(12);
markus('hello world');
markus(true)


$('.modal-close').click(function() {
    $(this).parents('.modal').removeClass('is-active');
});

$('#zipButton').click(function() {
    $(this).addClass('is-active');
});

zoraya();