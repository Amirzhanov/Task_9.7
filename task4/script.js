
const textChange = document.querySelector('#textChange');

textChange.addEventListener('click', function(event) {

    this.textContent = 'Меняется текст:' + event.type;
    console.log(textChange);
})