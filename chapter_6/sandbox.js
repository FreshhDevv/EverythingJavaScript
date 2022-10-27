const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.freshdev.com");
link.innerText = "Fresh Dev website";

const msg = document.querySelector("p");
console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");
msg.setAttribute("style", "color: green;");