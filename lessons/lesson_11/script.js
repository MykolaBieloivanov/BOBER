const numbers = [13, 34, 53, 12, 55, 367];
const fruits = ["apple", "banana", "kiwi", "orange"];

let kiwi = fruits[2];
console.log(kiwi);

let secret = fruits[10];
console.log(secret);
console.log();

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let fruitsLength = fruits.length;
console.log(fruitsLength);

let i = 0;

while (i < 10) {
  console.log(i, "раз");
  i++;
}
console.log();

let isStudent = false;
// if условный оператор
if (isStudent) {
  console.log("похоже, чо вы студент");
}else{
    console.log('кажется вы нас наебываете');
    
}
