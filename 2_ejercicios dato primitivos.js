//EJERCICIOS - TIPO DE DATOS PRIMITIVOS

// EJERCICIO 1

console.log(1 + '1');
//saldrá 11
console.log(typeof '42');
//
console.log(2 + 3 * 4);
//sale 14, ya que ejectua una operación
console.log(17 % 5); 
//saldrá 2 porque es el resto de la division 17/5
console.log('Godofredo'.length); 
//saldrá 9 que es el número de caracteres que compone la palabra
console.log(10 === '10'); 
//saldrá false porque el '10' no lo lee como numero???
console.log('Ornitorrinco'.toUpperCase().includes('RINCO'));
// saldrá true
console.log(typeof (5 > 3));
// saldrá boolean
console.log(`${2 + 2} manzanas`);
//saldrá escrito 4 manzanas
console.log(!(3 >= 3) || 'a' !== 'b');
// true

// EJERCICIO 2
const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

const bookCard = `"${title}" de ${author} · ${pages} páginas · Leído: ${isRead}`;
const isLongBook = true === pages > 300
const hasRevengeInTitle = true === title.toUpperCase().toLowerCase().includes('venganza')
const titleLength = title.length;

console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength)

// EJERCICIO 3
const username = 'godo'
const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
console.log(isValidUsername);

const username = '_rodofasio'
const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
console.log(isValidUsername);

const username = 'gu'
const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
console.log(isValidUsername);

const username = 'ruperto el grande'
const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
console.log(isValidUsername);

const username = 'abc'
const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
console.log(isValidUsername);

const username = 'xindasvinto_2025'
const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
console.log(isValidUsername);

// EJERCICIO 1

const candies = 47
const nephews = 6
const candyRest = 47%6
const candyPerNephew = (candies - candyRest)/nephews
console.log(`Cada sobrino recibe ${candyPerNephew} caramelos y sobran ${candyRest}`);

const candies = 30
const nephews = 6
const candyRest = 30%6
const candyPerNephew = (candies - candyRest)/nephews
console.log(`Cada sobrino recibe ${candyPerNephew} caramelos y sobran ${candyRest}`);

const candies = 4
const nephews = 6
const candyRest = 4%6
const candyPerNephew = (candies - candyRest)/nephews
console.log(`Cada sobrino recibe ${candyPerNephew} caramelos y sobran ${candyRest}`);


// EJERCICIO 2

const hasCourt = true;
const players = 4;
const isRaining = false;
const canPlay = hasCourt && players === 4 && !isRaining;
const needsMorePlayers = players < 4;
console.log(canPlay, needsMorePlayers);

const hasCourt = true;
const players = 3;
const isRaining = false;
const canPlay = hasCourt && players === 4 && !isRaining;
const needsMorePlayers = players < 4;
console.log(canPlay, needsMorePlayers);

const hasCourt = true;
const players = 5;
const isRaining = false;
const canPlay = hasCourt && players === 4 && !isRaining;
const needsMorePlayers = players < 4;
console.log(canPlay, needsMorePlayers);

// EJERCICIO 3

// 1. La media de los dos exámenes de Godofredo
const firstExam = 7;
const secondExam = 9;
const average = (firstExam + secondExam) / 2; //la suma necesita un parentesis?? 
console.log(average); // Esperado: 8

// 2. ¿Es administrador?
const role = 'admin';
const isAdmin = role === role.toUpperCase().toLowerCase(); // en el role hay que igualar y añadir .toLowerCase/.toUpperCase para que encuentre la palabra en minusculas
console.log(isAdmin); // Esperado: true, aunque el rol venga en minúsculas o mayúsculas

// 3. ¿Es mayor de edad?
const age = 18; //hay que quitarle las comillas, ya que seria un string y queremos un boolean
const isAdult = age === 18 || age > 18;
console.log(isAdult); // Esperado: true

// EJERCICIO 4
Rodofasio ha escrito este código y funciona, pero es difícil de leer. Reescríbelo para que:

- No compare booleanos con `=== true` ni con `=== false`.

const userName = 'Rodofasio';
const unreadMessages = 3;
const isOnline = true;
const isBlocked = false;
const country = 'Francia';

const welcome = `Hola, ${userName}. Tienes ${unreadMessages} mensajes sin leer.`;
const canChat = isOnline && !isBlocked 
const isForeign = country !== 'España';

console.log(welcome);
console.log(canChat, isForeign);

// EJERCICIO 5
//El microondas de Gutufacio solo entiende segundos,
// pero su pantalla tiene que mostrar el tiempo en horas,
// minutos y segundos. Partiendo de una variable `totalSeconds`,
// calcula `hours`, `minutes` y `seconds` y
// muestra el tiempo con el formato de la tabla.
// Calcula también `isLongerThanAnHour` (`true` si pasa de 3600 segundos).
//Pistas: una hora son 3600 segundos y un minuto 60.
// Usa `%` y el truco del ejercicio 1 para hacer divisiones exactas.

| `totalSeconds` | Salida |
|---|---|
| 135 | `0 h 2 min 15 s · ¿Más de una hora? false` |
| 3725 | `1 h 2 min 5 s · ¿Más de una hora? true` |
| 7200 | `2 h 0 min 0 s · ¿Más de una hora? true` |
| 59 | `0 h 0 min 59 s · ¿Más de una hora? false` |


