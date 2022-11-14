function myFunction() {

    var menu = document.getElementsByClassName('menu');


    var width = document.documentElement.clientWidth;


    Array.from(menu).forEach((x) => {
        if (width < 768) {
            if (x.style.display === "inline-flex") {
                x.style.display = "none";
            } else {
                x.style.display = "inline-flex";
            }
        }
    })

}