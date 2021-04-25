const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {

  alert('Служит для вывода информации в консоль');  
})

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {

  alert('Предназначен для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»');  
})

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {

  alert('Отображает диалоговое окно с запросом на ввод текста');  
})