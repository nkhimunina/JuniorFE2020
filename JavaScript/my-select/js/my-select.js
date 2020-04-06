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

let selectedOption = array[0];

let mySelectSelectedOption = document.querySelector('.my-select-selected');
mySelectSelectedOption.innerHTML = '';
mySelectSelectedOption.innerHTML += selectedOption;

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        mySelectOptionsDiv.innerHTML += `<span class="my-select-option">${array[i]}</span>`;
    }
}

function checkSelectedAtList() {
    let currentList = getTextArray();
    let selected = currentList.indexOf(selectedOption);
    let options = document.querySelectorAll('.my-select-options .my-select-option');
    let selectedOptionElement = options[selected];
    selectedOptionElement.classList.add('selected');
}

function onClickMySelectCaretDown(event) {
    mySelectCaretDown.style.display = 'none';
    mySelectCaretUp.style.display = 'block';

    mySelectOptionsDiv.innerHTML = '';
    displayArray(array);
    checkSelectedAtList();
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
    let filter = event.target.value.trim();
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
    checkSelectedAtList();
}

function getTextArray() {
    let options = document.querySelectorAll('.my-select-options .my-select-option');
    let newOptions = [];
    for (let i = 0; i < options.length; i++) {
        newOptions.push(options[i].innerHTML);
    }

    return newOptions;
}

function selectOption(event) {
    let currentList = getTextArray();
    let selected = currentList.indexOf(selectedOption);
    let options = document.querySelectorAll('.my-select-options .my-select-option');
    let selectedOptionElement = options[selected];
    selectedOptionElement.classList.remove('selected');

    let optionSpan = event.target;
    selected = array.indexOf(event.target.innerHTML);
    console.log(selected);
    optionSpan.classList.add('selected');
    selectedOption = event.target.innerHTML;

    mySelectSelectedOption.innerHTML = '';
    mySelectSelectedOption.innerHTML += optionSpan.innerHTML;
}