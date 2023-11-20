const getTodo=document.querySelector('.add');
const Todolist=document.querySelector('.todos');
const searchList=document.querySelector('.search .form-control');
//Deleteing todo list on clicking the '-' sign
const deleteTodo= Todolist.addEventListener('click',e=>{
  if(e.target.classList.contains('delete')){
    console.log(e.target.parentElement.remove());
  }
});
//adding a todo list to UI 
const generateTodo= todo =>{
    let todoListHtml=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-minus delete"></i>
    </li>`
    ;
     Todolist.innerHTML += todoListHtml;
   };
//getting the todo list from input
getTodo.addEventListener('submit',e=>{
    e.preventDefault();
   let todo=getTodo.add.value.trim(" ");
   if(todo.length){
       generateTodo(todo);
       getTodo.reset();
    }
});
//filtering todos
const filterTodos=searchValue=>{
    console.log(searchValue);
     Array.from(Todolist.children)
     .filter(search=> !search.textContent.toLowerCase().includes(searchValue))
     .forEach(search=>search.classList.add('filtered'));

     Array.from(Todolist.children)
     .filter(search=> search.textContent.toLowerCase().includes(searchValue))
     .forEach(search=>search.classList.remove('filtered'));
    
};

//searching the todo list in Search bar
searchList.addEventListener('keyup',()=>{
    let searchValue= searchList.value.trim().toLowerCase();
    filterTodos(searchValue);
});