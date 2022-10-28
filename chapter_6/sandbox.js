// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log('you clicked me');
// });

const items = document.querySelectorAll("li");

items.forEach(item => {
    item.addEventListener("click", event => {
        // console.log('item clicked');
        // console.log(event);
        // console.log(event.target);
        event.target.style.textDecoration = 'line-through';
    });
});