// Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства,
// ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
// Copy
// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект.
// Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]
// Copy
// Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
// Copy
// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
// Copy
// 4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное
// значение, и его тип.

// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }
// Copy
// 5*. Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники. На вход функция получает обьект корзины (пример ниже - наименование товара и количество,
//  а также обьект с ценами на товары, с доп уровнями вложености). К названиям товаров привязываться не стоит, они могут быть другими, в примере просто пример.

// const bucket = { display: 20, videocard: 100, cpu: 40, }

// const products = { warehouse1: { videocard: 12.5, }, warehouse2: { display: 56.2, cpu: 150, }, }

// calculateCost(bucket, products); // результат = 8374

// 6*. Напишите функцию, которая сравнивает 2 объекта, и возвращает результат true если они равны или false в противном случае

// Функция принимает 2 аргумента - объекты. Объекты в качестве значений свойств могут иметь только примитивные типы данных

// Объекты равные, если их содержание (пары ключ-значение) совпадает, количество свойств также должно совпадать. Порядок не важен.

// function compareObjects(firstObj, secondObj) { // тут ваш код }

// примеры объектов которые можно использовать для тестирования функции const obj1 = { name: 'John', age: 17, };

// const obj2 = { name: 'Mark', age: 17, };

// const obj3 = { name: 'Mark', age: 17, student: false, };

// const obj4 = { name: 'John', age: 17, };

//---------------------------
// ЗАДАНИЕ 1
function arraysToObject(array) {
  const result = {};
  array.forEach((item) => {
    result[item] = item;
  });
  return result;
}

const array = [23, "lime", 22, "apple", 5555];
const object = arraysToObject(array);
console.log(object);

// ЗАДАНИЕ 2

function arrayPairsToObject(arr) {
  const result = {};

  arr.forEach((pair) => {
    const [key, value] = pair; // деструктуризация массива
    result[key] = value; // добавляем ключ и значение в объект
  });

  return result;
}

// Пример использования:
const array1 = [
  ["height", 170],
  ["weight", 80],
  ["sport", "regbi"],
  ["full name", "John Doe"],
  ["sing", "love"],
  ["speed", 90],
];

const obj = arrayPairsToObject(array1);
console.log(obj);
console.log();

console.log("Задание 3");

// ЗАДАНИЕ 3

function objectToString(obj) {
  return Object.values(obj).join(", ");
}

const randomObj = { a: "a", 36.6: 36.6, "John Doe": "John Doe" };
const result2 = objectToString(randomObj);
console.log(result);

//ЗАДАНИЕ 4


// function objectValuesToTypeOfValue(obj) {
//   const result4 = {}; // Здесь создается объект для результатов

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result4[key] = typeof obj[key]; // Записываем тип значений в результат
//     }
//   }
  
//   return result4; // Возвращаем правильный объект
// }

// const obj4 = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
// const result4 = objectValuesToTypeOfValue(obj4); // Вызываем функцию
// console.log(result4); // Выводим результат


