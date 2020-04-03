let array = [
    'Бангладеш',
    'Бахрейн',
    'Белоруссия',
    'Бельгия',
    'Болгария',
    'Босния и Герцеговина',
    'Великобритания',
    'Венгрия',
    'Греция',
    'Грузия',
    'Индия',
    'Индонезия',
    'Ирак',
    'Иран',
    'Ирландия',
    'Исландия',
    'Испания',
    'Казахстан',
    'Камбоджа',
    'Катар',
    'Кипр',
    'Киргизия',
    'Китай',
    'Китайская Республика (Тайвань)',
    'Лаос',
    'Латвия',
    'Ливан',
    'Литва',
    'Лихтенштейн',
    'Малайзия',
    'Мальдивы',
    'Мальта',
    'Молдавия',
    'Монако',
    'Монголия',
    'Польша',
    'Португалия'
]

const mySelectCaretDown = document.querySelector('.my-select-caret-down');
const mySelectCaretUp = document.querySelector('.my-select-caret-up');
const mySelectOptionsDiv = document.querySelector('.my-select-options');
const mySelectInput = document.querySelector('.my-select-input');

let mySelectSelectedOption = document.querySelector('.my-select-selected');
mySelectSelectedOption.innerHTML = '';
mySelectSelectedOption.innerHTML += array[0];

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        mySelectOptionsDiv.innerHTML += `<span class="my-select-option">${array[i]}</span>`;
    }
}

function onClickMySelectCaretDown(event) {
    mySelectCaretDown.style.display = 'none';
    mySelectCaretUp.style.display = 'block';

    mySelectOptionsDiv.innerHTML = '';
    displayArray(array);
}

function onClickMySelectCaretUp(event) {
    mySelectCaretUp.style.display = 'none';
    mySelectCaretDown.style.display = 'block';

    mySelectOptionsDiv.innerHTML = '';
}

function onClickMySelectHead(event) {
    if (mySelectCaretUp.style.display === 'block') {
        mySelectSelectedOption.style.display = 'none';
        mySelectInput.style.display = 'block';
    } else {
        mySelectSelectedOption.style.display = 'block';
        mySelectInput.style.display = 'none';
    }
}

function filterOptions(event) {
    let filter = event.target.value.trim(); //TODO: пробелы все равно не удаляются + после перезагрузки страницы остается последнее введенное значение
    if (filter.length >= 2) {
        mySelectOptionsDiv.innerHTML = '';
        let filteredArr = array.filter(function (item) {
            return item.includes(filter);
        });
        displayArray(filteredArr);
    }
    if (filter === '') {
        displayArray(array);
    }
}