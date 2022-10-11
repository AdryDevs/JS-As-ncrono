//fomas de definir una función

// function Operation () {

// };

// const number = 1;
// const anotherNumber = number;

// const Operation = () => {};
// const Operation2 = Operation;

// const Program = () => {};

//////////////////////////////////////////////////////////////////

// setTimeout(() => {
//     console.log("han pasado tres segundos");
// }, 3000);

//Call backs

// const operation = (onFinish,) => {
//     // my tasks
//     const result = "????"
//     onFinish(result);
// };

// operation((result) =>{
//     console.log('he acabado con resultado: ' + result
//     );
// });

// const storageResult = (value) => {
//     localStorage.setItem('result', value);
// };

operation(storageResult);  //esto es para grabar el resultado en el localStorage, podríamos cambiar el parámetro por (showResult) y que lo mostrara.

///////////////////////////////

const anExample = (param1, param2) => {
    console.log(param1,param2)
};

anExample('param1');
anExample('param1','param2');
anExample('param1','param2','param3');

setInterval(() => {}, 1000);  // haz una acción cada segundo

const timeoutId = setTimeout( => {}, 1000);
clearTimeout(timeoutId); //con esto cancelo el timeout si todavía no se ha ejecutado
