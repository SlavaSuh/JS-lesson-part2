$(document).ready(function () {
    var cart = {};
    const cartBlock =  document.querySelector('.cart');
    $.ajax({
        url: "text.json",
        type: "GET",
        success : function (data) {
            var block = "";
            for (var key in data) {
                block += `<div class="catalog-item catalog-item${key}">`;
                block += `<p class="item-name">${data[key].name}</p>`;
                block += `<img src="img/${data[key].img}">`;
                block += `<p class="item-price">Цена : ${data[key].price}₽</p>`
                block += `<button class="button" data-id="${key}">Купить</button>`;
                block += "</div>";
            }
            $('.catalog').html(block);
            $('.button').on('click', addToCart);
        }
    })
    
    function addToCart () {
        var id = $(this).attr('data-id');
        if (cart[id] == undefined) {
            cart[id] = 1;
        } else {
            cart[id]++;
        }
        showCart();
    }
    
    function showCart () {
        var show = "";
        $.ajax({
            url: "text.json",
            type: "GET",
            success: function (data) {
                for (var key in cart) {
                    show += `<div class="cart-item">`;
                    show += `<button class="delete" data-id="${key}">X</button>`
                    show += `<img src="img/${data[key].img}">`
                    show += `<button class="minus" data-id="${key}">-</button>`
                    show += `<p>${data[key].name} : ${cart[key]} </p>`;
                    show += `<button class="plus" data-id="${key}">+</button>`
                    show += `<p>Цена : ${data[key].price} ₽/кг  </p> `;
                    show += `<p> ( Итого :${parseFloat(data[key].price).toFixed(2) * cart[key]} ₽)</p>`
                    show += "<br>";
                    show += "</div>";
                }
                $('.cart').html(show);
                $('.delete').on('click', deleteItem);
                $('.plus').on('click', itemPlus);
                $('.minus').on('click', itemMinus);
            }
        })
    }

    function itemPlus() {
        let itemId = $(this).attr("data-id");
        ++cart[itemId];
        showCart();
    }

    function itemMinus() {
        let itemId = $(this).attr("data-id");
        if (cart[itemId] > 1) {
            --cart[itemId];
            showCart();
        }
    }

    function deleteItem () {
        let idItem = $(this).attr('data-id');
        delete cart[idItem];
        showCart();
        if (cartBlock.childElementCount == 1) {
            cartBlock.setAttribute('class', 'cart');
        }
    };

    $('.cart-button').on('click', openCloseCart);

    function openCloseCart () {
        
        if (!cartBlock.getAttribute('class').includes('show-cart')) {
            cartBlock.setAttribute('class', `${cartBlock.getAttribute('class')} show-cart`);
        } else {
            cartBlock.setAttribute('class', 'cart');
        }
        if (cartBlock.childElementCount < 1) {
            cartBlock.innerHTML = `<p>Корзина пуста</p>`;
        }
    }

//  Карусель---------------------------------------------------------
    var catalog = document.querySelector(".catalog");
    var copys = catalog.cloneNode(true);
    var carus = document.querySelector('.carousel');
    var leftButton = document.createElement("button");
    // var rightButton = document.createElement("button");
    leftButton.setAttribute('class', 'left');
    // rightButton.setAttribute('class', 'right');
    
    carus.appendChild(copys);
    carus.appendChild(leftButton);
    // carus.appendChild(rightButton);
    var left = 0;
    $('.carousel').on('click', '.left', function () {
        var catalog = document.querySelector(".catalog");
        if (left < 450) {
            left = left + 1;
            catalog.style.left = left + "px";
        } else {
            left = -450;
            catalog.style.left = left + "px";
        } 
    })
    
    const interval = setInterval(function () {
        $('.left').trigger('click');
    }, 100);
});
