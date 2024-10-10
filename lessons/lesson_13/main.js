const transport = {
  speed: 140,
  color: "red",
  move: function () {
    console.log("I am moving");
  },
};

console.log(transport.speed); // обращение к свйоству
console.log(transport["speed"]); // тоже обращение к свойству

transport.move(); // вызов функции
// потомок от транспорта
const car = {
  model: "Tesla Model 3",
  // __proto__: transport,
};

console.log(car.model);
console.log(transport.move());
// создание обекта с помощью конструктора
const ship = new Object();

ship.year = 1996;
console.log(ship.year);

Object.setPrototypeOf(ship, transport);
ship.move();
