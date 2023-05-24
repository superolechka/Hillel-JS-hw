'use strict';

void function() {
    const form = document.querySelector('#todoForm');
    const todoItemsContainer = document.querySelector('#todoItems');
    const inputs = Array.from(form.querySelectorAll('textarea, input:not([type=reset])'));
    const DATA_KEY = 'todoListData';
    const ATTR_KEY = 'data-todo-item-id'
    let currentId = 1

    const createTodoItemTemplate = ({title, description, id}) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');
        wrapper.setAttribute(ATTR_KEY, id)
        wrapper.innerHTML = `<div class="taskWrapper">
                                <div class="taskHeading">${ title }</div>
                                <div class="taskDescription">${ description }</div>
                                <button class="mt-3 remove-todo btn btn-danger btn-sm">
                                    <i class="bi bi-trash"></i>
                                    <span>Remove</span>
                                </button>
                            </div>`
        return wrapper;
    }

    const renderTodoItem = (domElem) => {
        if (!(domElem instanceof HTMLElement)) throw new Error('you should pass an HTML element'); 
        todoItemsContainer.prepend(domElem)
    }

    const removeTodoItemFromDOM = ({id}) => {
        todoItemsContainer.querySelector(`[${ATTR_KEY} = '${id}']`).remove()
    }

    const getTodoItems = () => {
        const existingData = JSON.parse(localStorage.getItem(DATA_KEY));
        return (existingData) ? existingData : [];
    }

    const setTodoItem = (dataToSave) => {
        const existingData = getTodoItems(); 
        const dataToSaveClone = {
            ...dataToSave, 
            id: currentId
        } 

        existingData.push(dataToSaveClone);
        localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
        currentId += 1;
        return getTodoItems().at(-1);
    }

    const removeTodoItemById = (id) => {
        const existingData = getTodoItems(); 
        const index = existingData.findIndex(item => item.id === id);
        const removedItem = existingData.splice(index, 1);
        localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
        return removedItem[0];
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {})

        const savedData = setTodoItem(data)
        renderTodoItem(createTodoItemTemplate(savedData));
        event.target.reset()
    })

    todoItemsContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!event.target.closest('.remove-todo')) return;
        const todoItemID = Number(event.target.closest(`[${ATTR_KEY}]`).getAttribute(ATTR_KEY))
        const removedElem = removeTodoItemById(todoItemID);
        removeTodoItemFromDOM(removedElem);
    })

    const loadedHandler = () => {
        const data = getTodoItems();
        if (!data.length) return;

        currentId = Number(data.at(-1).id) + 1;
        data.forEach(todoItem => {
            const template = createTodoItemTemplate(todoItem);
            renderTodoItem(template)
        })

        document.removeEventListener('DOMContentLoaded', loadedHandler);
    }

    document.addEventListener('DOMContentLoaded', loadedHandler)

}()