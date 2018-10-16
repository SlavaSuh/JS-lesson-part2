$(document).ready(function () {
    $(".button").on("click", function () {
        let $newArray = $(this).attr("id").split("");
        let $newNumb = $newArray[$newArray.length - 1];
        
        if ($(`.block${$newNumb}`).is(":hidden")) {
            $(".tab-block").hide();
            $(`.block${$newNumb}`).slideDown();
        }
        if (!$(this).hasClass("active-button")) {
            $(".button").removeClass("active-button");
            $(this).addClass("active-button");
        }
    })

    $(".button-vert").on("click", function () {
        let $newArray = $(this).attr("id").split("");
        let $newNumb = $newArray[$newArray.length - 1];
       
        if ($(`.block-v-${$newNumb}`).is(":hidden")) {
            $(".tab-block-v").hide();
            $(`.block-v-${$newNumb}`).slideDown();
        }
        if (!$(this).hasClass("active-button-vert")) {
            $(".button-vert").removeClass("active-button-vert");
            $(this).addClass("active-button-vert");
        }
    })

});
