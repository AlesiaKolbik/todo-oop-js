 class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;

        view.on('add', this.addToDo.bind(this));
        view.on('toggle', this.toggleToDo.bind(this));
        view.on('edit', this.editToDo.bind(this));
        view.on('remove', this.removeToDo.bind(this));
        view.show(model.state);
    }

    addToDo(title) {
        const todo = this.model.addItem({
            id: Date.now(),
            title,
            completed: false
        });
        this.view.addItem(todo);
    }

     toggleToDo({id, completed}){
        const todo = this.model.updateItem(id, {completed});

        this.view.toggleItem(todo);
     }
     editToDo({id, title}){
        const todo = this.model.updateItem(id, {title});

        this.view.editItem(todo);
     }
     removeToDo(id){

         this.model.removeItem(id);
         this.view.removeItem(id);
     }
 }
 export default Controller;