
var text = '';
for (var i = 1; i < 51; i++) {
  var a = i;
  if (i%3 == 0 && i%5 == 0) {
    a = ' FizzBuzz';
  } else if (i%3 == 0) {
    a = ' Fizz';
  } else if (i%5 == 0) {
    a = ' Buzz';
  } 
}

/* OPERADORES TERNARIOS */

var text = '';
for (var i = 1; i < 51; i++) {
  var a = (i%3 == 0 && i%5 == 0) ? 'FizzBuzz' : (i%3 == 0) ? ' Fizz' : (i%5 == 0) ? ' Buzz' : i;
  text = text + a + ' ';
}
console.log(text);

/* PIEDRA PAPEL O TIJERA*/

var opc = ['piedra', 'papel', 'tijera'];

function getRandomOpc() {
  var num =  Math.random() * (3 - 1) + 1;
  return Math.trunc(num);
}

var player1 = opc[getRandomOpc()],
    player2 = opc[getRandomOpc()];

console.log('player 1:' + player1);
console.log('player 2:' + player2);

var winner = (player1 == player2) ? 'Empate' : (player1 == 'piedra' && player2 == 'tijera' || player1 == 'papel' && player2 == 'piedra' || player1 == 'tijera' && player2 == 'papel')  ? 'player1' : 'player2';

console.log('winner :' + winner);

// Triangulo

var size = 10,
    str = '';

for (var i = 0; i < size; i++) {
  var out = '*',
      aux = 0;
  if (aux < i) {
    console.log(out.repeat(i) + str.repeat(size-aux));
  }
  aux++;
}