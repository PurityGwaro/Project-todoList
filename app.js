const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

//create a func to add a html template to our html code on the browser
const generateTemplate = todo=> {
    //generate an html template and output todo inside it
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

//attach a submit event listener to the form
addForm.addEventListener('submit',e =>{
    //prevent the default action
    e.preventDefault();
    //get what the user types in the input
    const todo = addForm.add.value.trim();//.trim() removes all the extra white space a user might have keyed in
    //above, we are fetching the value keyed in by the user for the input who's name is 'add'

    //checking if the user has typed anything in order to add it to the list
    if(todo.length){//if there's a value then it's true
        generateTemplate(todo);
        addForm.reset();//resets the value in the input area to what it was before the user typed anything in it
    }//if you try to enter an empty to do it won't add it to the list
});

//we shall use event delegation to check for the clicking on the delete icon

//delete todos
list.addEventListener('click', e =>{
    //check if what was clicked was the trash-can
    if(e.target.classList.contains('delete')){
        //e.target gets the exact element that was clicked
        //if the target element clicked contains the delete class then the code below will run
        e.target.parentElement.remove(); //gets the parent of the element clicked and removes/deletes it
    }
});

//searching todos

const filterTodos = (userInput) => {
    //filter out the todos that do not match the search 
    Array.from(list.children)
    .filter(todo=>!todo.textContent.includes(userInput))//an array that will include only todos that don't contain the userInput
    .forEach(todo => todo.classList.add('filtered'));//for each list that doesn't contain the search input, this class is added to them in the DOM

    //filter out the todos that match the search 
    Array.from(list.children)
    .filter(todo => todo.textContent.includes(userInput))
    .forEach(todo => todo.classList.remove('filtered'));
    
};
//keyup event
search.addEventListener('keyup', e=>{
    const userInput = search.value.trim();
    filterTodos(userInput);
});




