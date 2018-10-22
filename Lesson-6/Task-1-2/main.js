// 1) На сайте в форме обратной связи добавьте следующие поля:
// a) поле даты рождения;
// b) ошибочные поля подсветить с помощью какого-нибудь эффекта, например, Bounce.
// 2) Все возвращаемые ошибки выводить с помощью виджета Dialog.


$(document).ready(function () {
    $('#button').on('click', function (event) {
        event.preventDefault();
    
        const inputName = $('#nameInput');
        const inputBirthday = $('#inputBirthday');
        const inputEmail = $('#inputEmail');
        const inputPhone = $('#inputPhone');
    
        const regExpName = /^[a-zа-яё]{2,}$/i;
        const regExpPhone  = /\+\d\(\d{3}\)\d{3}-\d{4,6}/;
        const regExpEmail = /\w{1,10}-\w{1,10}@mail\.ru|\w{1,10}\.\w{1,10}@mail\.ru|\w{1,8}@mail\.ru/g;
        const regExpBirthday = /^\d{2}[./-]\d{2}[./-]\d{4}$/g;
    
        function validInputClassAdding(inputData, regExp) {
            let boolTest = regExp.test(inputData.val());
            if (boolTest) {
                inputData.removeClass('error');
                inputData.addClass('correct');
            } else {
                inputData.removeClass('correct');
                inputData.addClass('error');
                inputData.slideUp(1000);
                inputData.slideDown(1000);
                $(`.error-block .${inputData.attr("data-key")}-error`).dialog();
            }
        }
        
        validInputClassAdding(inputName, regExpName);
        validInputClassAdding(inputBirthday, regExpBirthday);
        validInputClassAdding(inputEmail, regExpEmail);
        validInputClassAdding(inputPhone, regExpPhone);
    });
});



