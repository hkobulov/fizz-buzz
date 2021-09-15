var elForm = document.querySelector('.form');
var elFormInput = document.querySelector('.form__input');
var elFormArea = document.querySelector('.form__area');

function FizzBazz(number){
    var result = '';
    if(number % 3 === 0 && number % 5 === 0){
        result = 'FizzBuzz';
    } else if (number % 5 ===0){
        result = 'Buzz';
    } else if (number % 3 === 0){
        result = 'Fizz'
    } else {
        result = 'ERROR'
    }

    return result;
}

elForm.addEventListener('submit', function(evt){
    evt.preventDefault(elFormInput);

    var userNumber = elFormInput.value.trim();

    elFormArea.textContent = `Your ${userNumber} number is ${FizzBazz(userNumber)} category`;
})