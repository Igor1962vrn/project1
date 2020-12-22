window.addEventListener('DOMContentLoaded', function () {
    let nav_btn = document.getElementById('nav_btn'),
        menu = document.getElementById('menu');
    
    nav_btn.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
    menu.addEventListener('click', function (e) {
        let curent = e.target;
        if (curent) {
            menu.classList.toggle('active');
            nav_btn.classList.toggle('active');
        }
    });
});