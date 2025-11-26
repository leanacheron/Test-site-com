// main.js

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieBanner").style.display = "none";
}

function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieBanner").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  const accepted = localStorage.getItem("cookiesAccepted");
  if (accepted === "true" || accepted === "false") {
    document.getElementById("cookieBanner").style.display = "none";
  }
});
