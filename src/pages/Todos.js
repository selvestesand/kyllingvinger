import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';


class Todos extends Component {
constructor(){
  super();
  this.state = {
    todos: TodoStore.getAll(),
  };
}

  componentWillMount(){
      TodoStore.on("change", () => {
        this.setState({
          todos: TodoStore.getAll(),
        });
      });
  }

  render() {
    const { todos } = this.state;

    const TodoCompoments = todos.map((todo) => {
      return <li>{todo.text}</li>;
    })


    return (
      <div>
        <ul>{TodoCompoments}</ul>
      </div>
      )
  }
}

export default Todos;
