// 3. Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».
// ** - При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:

// - Имя содержит только буквы;

// ** - Телефон подчиняется шаблону +7(000)000-0000;**

// ** - E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru**

// ** - Текст произвольный;**
// ** - В случае не прохождения валидации одним из полей необходимо выделять это поле красной рамкой 
//и сообщать пользователю об ошибке.**

const mainURL = "http://89.108.65.123/user";
const userForm = document.querySelector("form.user-form");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    var switchValidName = false;
    var switchValidPhone = false;
    var switchValidEmail = false;

    const inputName = document.getElementById("nameInput");
    const inputPhone = document.getElementById("telInput");
    const inputEmail = document.getElementById("emailInput");
    const inputTextArea = document.getElementById("textInput").value;
    const userList = document.querySelector(".user-list");

    
    if(validName(inputName.value)) {
        switchValidName = true;
        inputName.style.borderColor = "green";
    } else {
        inputName.style.borderColor = "red";
    }

    if(validPhone(inputPhone.value)) {
        switchValidPhone = true;
        inputPhone.style.borderColor = "green";
    } else {
        inputPhone.style.borderColor = "red";
    }

    if(validMail(inputEmail.value)) {
        switchValidEmail = true;
        inputEmail.style.borderColor = "green";
    } else {
        inputEmail.style.borderColor = "red";
    }
    

    if (switchValidName && switchValidPhone && switchValidEmail) {
        
        // На случай отправки на сервер. В данном случае на "http://89.108.65.123/user";

        // fetch(mainURL, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         name:inputName,
        //         phone:inputPhone,
        //         email:inputEmail,
        //         text:inputTextArea
        //     })
        // })

        
        
        // Вывожу данные в index.html  в список.
        userList.innerHTML = "";
        userList.innerHTML += `<li class="list-group-item">Name : ${inputName.value} <br> Phone : ${inputPhone.value} <br> Email : ${inputEmail.value} <br>Text : (${inputTextArea})</li>`;
        alert("Ваше сообщение отправлено");
    }
    
});

function validName (inputName) {
    let nameFlag = false;
    const regExpName = /[a-zA-z]|/;
    if (inputName == "") {
        alert("Введите имя !!!");
    } else if (regExpName.test(inputName) && !/[0-9]|\W/.test(inputName)) {
        nameFlag = true;
    } else {
        alert("Имя должно содержать только английские буквы");
    }
    return nameFlag;
};

function validPhone (inputPhone) {
    let phoneFlag = false;
    const regExpPhone  = /\+\d\(\d{3}\)\d{3}-\d{4,6}/;
    if (regExpPhone.test(inputPhone)) {
        phoneFlag = true;
    } else {
        alert("Введите номер в формате +7(000)000-0000**");
    }
    return phoneFlag;
};

function validMail (inputEmail) {
    let emailFlag = false;
    const regExpEmail = /\w{1,10}-\w{1,10}@mail\.ru|\w{1,10}\.\w{1,10}@mail\.ru|\w{1,8}@mail\.ru/g;
    if (regExpEmail.test(inputEmail)) {
        emailFlag = true;
    } else {
        alert("Введите email  в формате mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru");
    }
    return emailFlag;
}