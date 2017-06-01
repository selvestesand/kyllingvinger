import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';


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

  createTodo(){
    // TodoActions.createTodo(Date.now());
    const text = document.getElementById("inputTodo").value;
    if (text != "") {
      TodoActions.createTodo(text);
      document.getElementById("inputTodo").value = "";
    }
  }

  deleteTodo(todo){
    console.log(todo);
    TodoActions.deleteTodo(todo.id);
  }

  render() {
    const { todos } = this.state;

    const TodoCompoments = todos.map((todo) => {
      return(
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td>{todo.completed === true ? "Yes" : "No"}</td>
              <td>
                  <button onClick={this.deleteTodo.bind(this, todo)} className="btn btn-xs btn-danger" >Delete</button>
              </td>
            </tr>
          )
    })


    return (
      <div>
        <div className="container">
          <div className="form-group">
            <label className="todoLabel control-label" htmlFor="inputTodo">What to do</label>
            <input className="form-control input-lg todoInput" type="text" id="inputTodo" />
              <button onClick={this.createTodo.bind(this)} className="btn btn-default btn-lg btn-block">Create Todo!</button>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>ToDos</th>
                <th>Completed</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {TodoCompoments}
            </tbody>
          </table>
        </div>
      </div>
      )
  }
}

export default Todos;
