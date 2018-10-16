
$(document).ready(function () {

    const $cityArray = [];
    $(":text:first").focus();
    $.ajax({
        url: 'http://89.108.65.123/cities',
        dataType: "json",
        data: {key: this.value},
        success: function (city) {
            city.map(function (value) {
                $cityArray.push(value.name);
                $("#autocomplete").append(`<option>${value.name}</option>`);
            })
        },
    });

    $("#forma").validate({
        rules: {
            email: {
                required: true,
                email:true
            },
            phone: {
                required: true,
                rangelength: [8, 16]
            },
            name: {
                required: true,
                name: true
            }
        },
        messages: {
            email: {
                required: "Введите адрес электронной почты",
                email: "Это некорректный адрес электронной почты."
            },
            phone: {
                required: "Введите номер телефона",
            },
            name: {
                required: "Введите имя"
            }
        },
    })


    // $("#autocomplete")
    // $("#city").autocomplete({
    //     source: $cityArray,
    //     minLength: 3
    // })
});
