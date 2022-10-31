const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash-can delete"></i>                
        </li>
    `;
    list.innerHTML += html;
}

addForm.addEventListener('submit', event => {
    event.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos
list.addEventListener('click', event =>{
    if(event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
})