//EJERCICIOS - TIPO DE DATOS PRIMITIVOS

// EJERCICIO 1

console.log(1 + '1');
//saldrá NaN porque la suma entre numeros y texto no es ''''posible''''
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
// saldrá true
console.log(`${2 + 2} manzanas`);
//saldrá escrito 4 manzanas
console.log(!(3 >= 3) || 'a' !== 'b');
//

// EJERCICIO 2
const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

const bookCard = `"${title}" de ${author} · ${pages} páginas · Leído: ${isRead}`;
const isLongBook = pages > 300
const hasRevengeInTitle = title.toUpperCase().toLowerCase().includes(venganza)
const titleLength = 
// - `titleLength`: el número de caracteres del título.
console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength)

// EJERCICIO 3
const username = godo
const numCharacter = >=3 || =<15;
const notStartWith = !'_';
const notSpace = !' ';
const isValidUsername = username === numCharacter && notStartWith && notSpace;

console.log(isValidUsername);

// EJERCICIO 1
//La tía Rutofisia tiene 47 caramelos y 6 sobrinos. Quiere darle a cada uno el mismo número de caramelos, el máximo posible, y quedarse con los que sobren (por algo es la tía).
//Con dos variables, `candies` y `nephews`, calcula cuántos caramelos recibe cada sobrino y cuántos sobran. Pista: el operador `%` te da el resto de una división, y si al total le quitas el resto, la división ya es exacta.
| `candies` | `nephews` | Salida |
|---|---|---|
| 47 | 6 | `Cada sobrino recibe 7 caramelos y sobran 5` |
| 30 | 6 | `Cada sobrino recibe 5 caramelos y sobran 0` |
| 4 | 6 | `Cada sobrino recibe 0 caramelos y sobran 4` |

const candies = 47
const nephews = 6
console.log(`Cada sobrino recibe ${candies}/${nephews} caramelos y sobran ${candies}%${nephews}`);
console.log(`Sobran ${candies}%${nephews} caramelos`);

// EJERCICIO 2
Godofredo y sus amigos quedan para jugar al pádel, pero solo se juega si se cumplen **todas** estas condiciones:

- Tienen pista reservada.
- Son exactamente 4 jugadores.
- No llueve.

Declara `hasCourt`, `players` e `isRaining`, y calcula dos booleanos:

- `canPlay`: si se puede jugar.
- `needsMorePlayers`: si son menos de 4.

| `hasCourt` | `players` | `isRaining` | `canPlay` | `needsMorePlayers` |
|---|---|---|---|---|
| `true` | 4 | `false` | `true` | `false` |
| `true` | 3 | `false` | `false` | `true` |
| `true` | 4 | `true` | `false` | `false` |
| `false` | 5 | `false` | `false` | `false` |

const hasCourt = true;
const players = 4;
const isRaining = flase;
const canPlay = hasCourt && players && !isRaining;
const needsMorePlayers = <4;

console.log(canPlay, needsMorePlayers);

// EJERCICIO 3

// 1. La media de los dos exámenes de Godofredo
const firstExam = 7;
const secondExam = 9;
const average = (firstExam + secondExam) / 2; //la suma necesita un parentesis?? 
console.log(average); // Esperado: 8

// 2. ¿Es administrador?
const role = 'admin';
const isAdmin = role.toLowerCase() === 'Admin'; // en el role hay que añadir .toLowerCase/.toUpperCase para que encuentre la palabra en minusculas
console.log(isAdmin); // Esperado: true, aunque el rol venga en minúsculas o mayúsculas

// 3. ¿Es mayor de edad?
const age = '18';
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
const canChat = isOnline === true && isBlocked === false; //??????
const isForeign = `!Francia`;

console.log(welcome);
console.log(canChat, isForeign);

// EJERCICIO 5