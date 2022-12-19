const acceptCookie = document.querySelector("#tilladudvalgte");
const denyCookie = document.querySelector("#tilladalle");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
    cookieboks.classList.add("hidethis");
    sessionStorage.setItem("fjerncookieboks", true);
}

if (sessionStorage.getItem("fjerncookieboks")) {
    cookieboks.classList.add("hidethis");
}