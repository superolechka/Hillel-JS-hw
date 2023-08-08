'use strict';

const View = {
    todoContainer: null,

    renderItem(data) {
        const template = this.createTemplate(data);
        this.todoContainer.prepend(template);
    },

    createTemplate({title, description, id}) {
        const template = document.createElement('div');
        template.className = 'col-4';
        template.setAttribute('data-id', id);

        template.innerHTML = `
                        <div class="taskWrapper">
                            <div class="taskHeading">${title} <sup>${id}</sup></div>
                            <div class="taskDescription">${description}</div>
                            // <button class="mt-3 remove-todo btn btn-danger btn-sm">
                            // <i class="bi bi-trash"></i>
                            // <span>Remove</span>
                            // </button>
                        </div>`;

        template.querySelector('.remove-todo').addEventListener('click', () => {
            const id = parseInt(template.getAttribute('data-id'));
            Model.removeDataById(id);
            template.remove();
        });

        return template;
    },

    findTemplateById(id) {
        return this.todoContainer.querySelector(`[data-id = '${id}']`);
    },

    deleteItem(id) {
        const template = this.findTemplateById(id);
        if (template) {
            template.remove();
        }
    },

    setContainer(domEl) {
        if(!(domEl instanceof HTMLElement))  throw new Error('Block not valid HTML element');
        this.todoContainer = domEl;
    },

    init(createTemplateFunc) {
        if(typeof createTemplateFunc !== 'function') return;
        this.createTemplate = createTemplateFunc;
    }
}