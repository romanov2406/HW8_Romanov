var form = document.forms[0];
var newBadWords = document.querySelector('#newBadWords');
var add = document.querySelector('#add');
var reset = document.querySelector('#reset');
var arr = [];
var cenzor = document.querySelector('#cenzor');
var area = document.querySelector('#checkCenzor');
var str = '';
var badWords = document.querySelector('#badWords');
add.addEventListener('click', function () {
    if (form.badWords.value) {
        newBadWords.innerHTML += ' ' + form.badWords.value + '';
        str += ' ' + form.badWords.value;
        arr.push(form.badWords.value.toLowerCase());
        form.reset();
        console.log(str);
        badWords.style.border = '1px solid green';
    }
    else {
        alert('Заповніть всі поля');
        badWords.style.border = '1px solid red';
    }
});
reset.addEventListener('click', function () {
    form.reset();
    newBadWords.innerHTML = '';
    area.value = '';
});
cenzor.addEventListener('click', function () {
    arr.forEach(function (el) { return area.value = area.value.toLocaleLowerCase().replace(el, '*'.repeat(el.length)); });
});
