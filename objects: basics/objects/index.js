/*
* Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*
* */

// const user = {};
// console.log(user)
// user.name = "John";
// console.log(user)
// user.surname = "Smith";
// console.log(user)
// user.name = "Pete";
// console.log(user)
// delete user.name;
// console.log(user)


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
// let schedule = {};
// const isEmpty = (obj) => {
//     return (Array.from(Object.entries(obj)).length === 0);
// }
//
// console.log(isEmpty(schedule));

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//     name: "John"
// };
// // это будет работать?
// user.name = "Pete";
// Работать будет потому что изменить обьект обьявленный при помощи константы нельзя, но св-ва обьекта изменить можно
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// //У нас есть объект, в котором хранятся зарплаты нашей команды:
//
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// //
// // Если объект salaries пуст, то результат должен быть 0.
//
// const sum = (obj) => {
//     let isEmpty = Array.from(Object.entries(obj)).length;
//     return isEmpty === 0
//         ? 0
//         : Array.from(Object.values(obj)).reduce((acc, next) => acc + next, 0);
// }
// console.log(sum(salaries));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// const multiplyNumeric = (obj) => {
//     let copyObj = {};
//
//     for (const [key, value] of Object.entries(obj)) {
//         if (typeof value === 'number') {
//             copyObj[key] = Number(value) * 2;
//         } else {
//             copyObj[key] = value
//         }
//     }
//     return copyObj
// }

console.log(multiplyNumeric(menu));