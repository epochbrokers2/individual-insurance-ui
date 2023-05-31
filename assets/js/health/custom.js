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
