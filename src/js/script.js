// hover и удаление элементов каталога
const itemsDelete = document.querySelectorAll('.list-item__delete'),
      itemDelete = document.querySelector('.list-item__delete'),
      item = document.querySelectorAll('.list-item'),
      items = document.querySelectorAll('.list-item');

item.addEventListener('mouseover', ()=> {
itemDelete.style.display = "block";
})

itemDelete.addEventListener('click', ()=> {
    itemDelete.style.display = "none";
});

// валидация формы

const form = document.querySelector('.form'),
      formItems = document.querySelectorAll('.form__item_required'),
      formInputs = document.querySelectorAll('.form__item_required input'),
      errorMsgs = document.querySelectorAll('.errorMsg'),
    //   requiredInputs = document.querySelectorAll('.form__item_required input'),
      formBtn = document.querySelector('.button_form');


form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    form.removeAttribute('novalidate');

    formInputs.forEach((item, i) => {
        if (item.value == "") {
            formItems[i].classList.add('form__item_required-active');
            errorMsgs[i].style.display = 'block';

            setTimeout(function() {
                // Повторный вызов сабмита при включенной валидации покажет подсказки
                formBtn.click();
              }, 0);
        } else {
            formItems[i].classList.remove('form__item_required-active');
            errorMsgs[i].style.display = 'none';
            formBtn.style.background = '#7BAE73';
            formBtn.style.color = '#ffffff';

            form.setAttribute('novalidate', true);
            form.submit();
        }
        
    })
})