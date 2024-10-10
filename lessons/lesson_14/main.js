const headerElement = document.querySelector('.header');
headerElement.innerText = 'Калькулятор';
headerElement.classList.add('red');

// создание элемента Кнопка
const submitButtonElement = document.createElement('button');
submitButtonElement.innerText = 'Результат';
submitButtonElement.classList.add('submit-button');
// добавляем созданный элемент в определенное место
headerElement.after(submitButtonElement);

// создадим функцию с реакцией на клик по кнопке
const submitButtonHanler = () => {
    // ищем наши элементы
    const inputElements = document.querySelectorAll('input');
    // запишем из инпутов в переменные
    const element1 = inputElements[0].value;  
    const element2 = inputElements[1].value;
    // parse / Number() / +
    const summ = +element1 + +element2;
    console.log(summ);
}

// добавляем на кнопку действие
submitButtonElement.addEventListener('click', submitButtonHanler);
