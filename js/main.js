const dark = document.querySelector(".dark")
const white = document.querySelector(".whitee")
const instagram = document.querySelector(".fa-instagram")

dark.addEventListener('click', () => {
    document.body.style.backgroundColor = "rgb(1, 23, 41)";
    document.body.style.color = "#fff"
    dark.style.display = "none"
    white.style.display = "block"
})
white.addEventListener('click', () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "black"
    dark.style.display = " block"
    white.style.display = "none"
})


// --------------- Filter Js ---------------
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter')
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box").not("." + value).hide("1000");
            $(".post-box").filter("." + value).show("1000");

        }
    })
    // --------------- add active class to btn ---------------
    $('.filter-item').click(function () {
        $(this).addClass('active-filter').siblings().removeClass("active-filter");


    })
});

// --------------- header background change on scroll ---------------

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});

