import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
        {
          id: 5125123123512,
          text: "Chill out",
          completed: false
        },
        {
          id: 5128371283724,
          text: "Do emissaries",
          completed: true
        },
        {
          id: 5125612123177,
          text: "Eat chicken wings",
          completed: false
        },
      ];
  }

  createTodo(text){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false,
    })

    this.emit("change");
  }


  getAll() {
    return this.todos;
  }

  handleAction(action){
    switch(action.type){
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
    }
  }

}


const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
