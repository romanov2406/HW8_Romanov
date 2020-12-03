let form: HTMLFormElement = document.forms[0];
let newBadWords: HTMLAnchorElement = document.querySelector('#newBadWords');
let add: HTMLButtonElement = document.querySelector('#add');
let arr: string[] = [];
let cenzor: HTMLButtonElement = document.querySelector('#cenzor');
let area: HTMLTextAreaElement = document.querySelector('#checkCenzor');
let str: string = '';
const badWords:HTMLInputElement = document.querySelector('#badWords');

add.addEventListener('click', function (): void {
    if (form.badWords.value) {
        newBadWords.innerHTML += ' ' + form.badWords.value + '';
        str += ' ' + form.badWords.value;
        arr.push(form.badWords.value.toLowerCase());
        form.reset();
        console.log(str);
    }else{
        alert('Заповніть всі поля');
        badWords.style.border = '1px solid red'

    }

});

cenzor.addEventListener('click', function (): void {
    arr.forEach((el: string) => area.value = area.value.toLocaleLowerCase().replace(el, '*'.repeat(el.length)));
});