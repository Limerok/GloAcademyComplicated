'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'); 

let todoData = [
    /* {value: "sdfsdf", completed: false},
    {value: "sd23", completed: false} */
];
let mass = JSON.parse(localStorage.getItem("myCase"));

//JSON.parse(localStorage.getItem("arr"));


const render = function() {
    mass = JSON.parse(localStorage.getItem("myCase"));
    
    if (mass === null) {
        todoList.textContent = '';
        todoCompleted.textContent = '';
        return;
    } else {
        todoData=mass;
        localStorage.setItem('myCase', JSON.stringify(todoData));

        todoList.textContent = '';
        todoCompleted.textContent = '';

        todoData.forEach(function(item, i){
        
            const li = document.createElement('li');
            li.classList.add('todo-item');
    
            li.innerHTML = '<span class="text-todo">' +  item.value + '</span>' +
                '<div class="todo-buttons">' +
                    '<button class="todo-remove"></button>' +
                    '<button class="todo-complete"></button>' +
                '</div>';
            if (item.completed){
                todoCompleted.append(li);
            } else {
                todoList.append(li);
            }
            
            const btntodoCompleted = li.querySelector('.todo-complete');//Кнопа выполнено
            btntodoCompleted.addEventListener('click', function() {
                item.completed = !item.completed;
                localStorage.setItem('myCase', JSON.stringify(todoData));
                render();
            });
    
            const btnTodoRemove = li.querySelector('.todo-remove'); //Кнопа удалить
            btnTodoRemove.addEventListener('click', function() {
               todoData.splice(i,1);
               localStorage.setItem('myCase', JSON.stringify(todoData));
               render();
            });
            
    
            
           // localStorage.setItem('arr', JSON.stringify(mass));
        });


    }

    
    

    
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    if (headerInput.value !== '') {
        
        const newTodo = {
            value: headerInput.value,
            completed: false
        };
    
        todoData.push(newTodo);
        localStorage.setItem('myCase', JSON.stringify(todoData));
        render();
        headerInput.value = ''; //Очищаем строку после submit
    } else {
        return;
    }
    
});


render();