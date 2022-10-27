const para = document.querySelector("p");
// console.log(para.innerText);

// para.innerText = 'ninjas are awesome.';

const paras = document.querySelectorAll("p");

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' add text';
// });

const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new content</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})