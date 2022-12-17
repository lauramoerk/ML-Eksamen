const acceptCookie = document.querySelector("#tilladudvalgte");
const denyCookie = document.querySelector("#tilladalle");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
    cookieboks.classList.add("hidden");
    sessionStorage.setItem("fjernCookieBoks", true);
}

if (sessionStorage.getItem("fjernCookieBoks")) {
    cookieboks.classList.add("hidden");
}