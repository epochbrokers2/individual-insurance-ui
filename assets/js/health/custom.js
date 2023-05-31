document.addEventListener("DOMContentLoaded", () => {
    $(".tab_list .tab_title").on("click", function () {
        $(this).addClass("tab_active").siblings().removeClass("tab_active");
        var class1 = $(this).attr("data-id");
        $("." + class1 + "")
            .removeClass("tab_hide")
            .siblings()
            .addClass("tab_hide");
    });
});

$(".accordion")
    .find(".accordion-title")
    .on("click", function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle("fast");
        $(".accordion-content").not($(this).next()).slideUp("fast");
        $(".accordion-title").not($(this)).removeClass("active");
    });
