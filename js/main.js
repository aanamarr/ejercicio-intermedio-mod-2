//variables js:
const h1 = document.querySelector('.js-h1');
const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');

//generar nº aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

//Generar movimientos aleatorios(condiciones)
//nº<=3 ? 'piedra'
//nº>=7 ? 'papel'
//sino 'tijera'

/*function numberAleatorio(number){
    if (number <= 3){
        h1.innerHTML = 'Piedra';
    } else if (number >=7){
        h1.innerHTML = 'papel';
    } else {
        h1.innerHTML = 'tijera';
    }
};*/

function getMovement(number) {
    if (number <= 3) {
        return 'Piedra';
    } else if (number >= 7) {
        return 'Papel';
    } else {
        return 'Tijera';
    }
}
//escuchar evento al hacer click

function handleClick(ev) {
    ev.preventDefault();

    const valueSelect = select.value.trim();//valor selecionado
    const numberAleatorio = getRandomNumber(9);//nº aleatorio
    const computerNumber = getMovement(numberAleatorio);
    
    console.log(`Jugador: ${valueSelect}, Computadora: ${computerNumber}`);

    //comparar nº y pintar en h1
    if (valueSelect === computerNumber) {
        h1.innerHTML = `Empate: Ambas eligieron ${computerNumber}`;
    } else if (
        (valueSelect === 'Piedra' && computerNumber === 'Tijera') ||
        (valueSelect === 'Papel' && computerNumber === 'Piedra') ||
        (valueSelect === 'Tijera' && computerNumber === 'Papel')
    ) {
        h1.innerHTML = `¡Ganaste! Tú elegiste ${valueSelect} y la computadora eligió ${computerNumber}`;
    } else {
        h1.innerHTML = `Perdiste. Tú elegiste ${valueSelect} y la computadora eligió ${computerNumber}`;
    }
};

//evento de chacer click en el btn
button.addEventListener('click', handleClick);

