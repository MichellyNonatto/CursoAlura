const elementPainel = document.getElementById("home-painel");
const elementProduto = document.getElementById("home-produto");
const elementNone = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");

const title = document.getElementById("title");

loginBtn.addEventListener('click', function () {
        elementPainel.style.display = "none";
        elementProduto.style.display = "none";
        loginBtn.style.opacity = "0";
        loginBtn.style.transition = "none";
        elementNone.style.display = "block";

        title.innerHTML = "Login | AluraBook";
});




