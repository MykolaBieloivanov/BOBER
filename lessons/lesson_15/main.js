// // Получаем элементы
// const input = document.querySelector('.task-input');
// const addButton = document.querySelector('.actions .btn');
// const todoList = document.querySelector('.list');
// const filterButtons = document.querySelectorAll('.status .btn');

// // Функция для создания новой задачи
// function addTask() {
//   const taskText = input.value.trim();
//   if (taskText === '') return; // Проверяем, чтобы задача не была пустой

//   const newTask = document.createElement('li'); // Создаем новый элемент списка
//   newTask.classList.add('list-item'); // Добавляем класс для стилизации
//   newTask.textContent = taskText; // Вставляем текст задачи

//   // Добавляем новую задачу в список
//   todoList.appendChild(newTask);

//   input.value = ''; // Очищаем поле ввода
// }

// // Функция для смены статуса задачи
// function toggleTaskStatus(event) {
//   if (event.target.classList.contains('list-item')) {
//     event.target.classList.toggle('list-item_done'); // Меняем класс
//   }
// }

// // Функция для фильтрации задач
// function filterTasks(event) {
//   const filter = event.target.id; // Получаем выбранный фильтр (все, выполненные, невыполненные)

//   const tasks = document.querySelectorAll('.list-item'); // Все задачи

//   tasks.forEach(task => {
//     switch (filter) {
//       case 'all':
//         task.style.display = 'flex'; // Показываем все задачи
//         break;
//       case 'completed':
//         if (task.classList.contains('list-item_done')) {
//           task.style.display = 'flex'; // Показываем только выполненные
//         } else {
//           task.style.display = 'none'; // Скрываем невыполненные
//         }
//         break;
//       case 'uncompleted':
//         if (!task.classList.contains('list-item_done')) {
//           task.style.display = 'flex'; // Показываем только невыполненные
//         } else {
//           task.style.display = 'none'; // Скрываем выполненные
//         }
//         break;
//     }
//   });
// }

// // Добавляем обработчики событий
// addButton.addEventListener('click', addTask);
// todoList.addEventListener('click', toggleTaskStatus);
// filterButtons.forEach(button => {
//   button.addEventListener('click', filterTasks);
// });


