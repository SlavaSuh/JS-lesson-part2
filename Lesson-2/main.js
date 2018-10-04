//получаем и выводим данные пользователей
var buttonTs1 = document.getElementsByClassName("button-ts1")[0];
var count = 0;
buttonTs1.addEventListener("click", () => {
    buttonTs1.disabled = true;
    fetch("http://89.108.65.123/user")
    .then( (response) => {
        if (response.ok) {
           return response.json();
        }
    }).then( (json) => {  
        for (let i = 0; i < json.length; i++){
            var div = document.createElement('div'); 

            if ((json[i].name == undefined || json[i].name == "") &&
                 (json[i].email == undefined || json[i].email == "") &&
                 (json[i].age == undefined || json[i].age == "")) {
                continue;
            } else {
                count++;
                div.setAttribute("id", `user-${count}`);
                div.setAttribute("class", "user-block");

                let pName = document.createElement("p");
                let pEmail = document.createElement("p");
                let pAge = document.createElement("p");

                pName.textContent = `Name : ${json[i].name}`;
                pEmail.textContent = `Email : ${json[i].email}`;
                pAge.textContent = `Age : ${json[i].age}`;

                div.appendChild(pName);
                div.appendChild(pEmail);
                div.appendChild(pAge);
            }
            document.getElementsByClassName("list-wrapper")[0].appendChild(div);
        }
        //по клику выводим данные
        let newDiv = document.querySelectorAll("div .user-block");
        for (let j = 0; j < newDiv.length; j++) {
            newDiv[j].onclick = () => {
                // console.log(newDiv[j].children);
                let divClikc = document.createElement("div");
                divClikc.setAttribute("class", "div-click");
                divClikc.innerHTML = `"${newDiv[j].children[0].innerHTML} , ${newDiv[j].children[1].innerHTML},  ${newDiv[j].children[2].innerHTML}"`
                document.body.insertBefore(divClikc, document.getElementsByClassName("list-wrapper")[0]);
            }
        };
    });
})

//выводим данные по id
const idButton = document.getElementById("idButton");

idButton.addEventListener("click", () => {
    const inputIdValue = document.getElementById("idInput").value;
    fetch(`http://89.108.65.123/user/${inputIdValue}`)
    .then( response => {
        if (response.ok) {
            return response.json();
        }
    }).then( json => {
        alert(`${json.name} --- ${json.email} --- ${json.age}`);
    })
})


// отправляем данные на сервер
const button = document.getElementsByClassName("button")[0];

button.addEventListener("click", () => {
    
    const nameValue = document.getElementsByClassName("name")[0].value;
    const emailValue = document.getElementsByClassName("email")[0].value;
    const ageValue = document.getElementsByClassName("age")[0].value;

    fetch("http://89.108.65.123/user", {
    method: 'POST',
    body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        age: ageValue,
    })
})
   
})
