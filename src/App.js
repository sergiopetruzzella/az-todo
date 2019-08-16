import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
import CreateForm from './components/createform.js';
import TodoList from './components/todolist.js';
import Header from './components/header.js';
import Title from './components/title.js';


var todoItems = [];
todoItems.push({index: 0, value: "Write my todo list", done: true});
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "learn Webpack", done: false});
todoItems.push({index: 3, value: "learn ES6", done: true});
todoItems.push({index: 4, value: "learn Routing", done: false});
todoItems.push({index: 5, value: "learn Redux", done: false});

var itemstoshow = [];
itemstoshow = todoItems;
var filtro ="all";




class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
    this.state = {itemstoshow: todoItems};
  }
  addItem(todoItem){
    todoItems.unshift({
      index: 0,
      value: todoItem.newItemValue,
      done: false
    });
    for (let i = 0; i < todoItems.length; i++) {todoItems[i].index=i;}
    this.setState({itodoItems: todoItems});
    this.filterTodos(filtro)
  
  }
  removeItem(itemIndex){
    todoItems.splice(itemIndex,1);
    for (let i = 0; i < todoItems.length; i++) {todoItems[i].index=i;}
    this.setState({itodoItems: todoItems});
    this.filterTodos(filtro)
    
  }
  markTodoDone(itemIndex){
    var todo = todoItems[itemIndex];
    todoItems[itemIndex].done = !todoItems[itemIndex].done;
    //todoItems.splice(itemIndex,1);
    //todo.done = !todo.done;
    //todo.done ? todoItems.push(todo) : todoItems.unshift(todo);

    for (let i = 0; i < todoItems.length; i++) {todoItems[i].index=i;} 
    this.setState({itodoItems: todoItems});
    this.filterTodos(filtro)
  
  }
  editTodo(index,newname){
   todoItems[index].value = newname;
   for (let i = 0; i < todoItems.length; i++) {todoItems[i].index=i;}
   this.setState({itodoItems: todoItems});
   this.filterTodos(filtro)
  }
  filterTodos(kind){
    filtro = kind;
    switch (kind) {
      case "all":
      itemstoshow = todoItems;
        break;
      case "todo":
      var resulti = todoItems.filter(a => ! a.done);
      itemstoshow = resulti
      break;
      case "doit":
      var resulti = todoItems.filter(a => a.done);
      itemstoshow = resulti;
      break;
      default:
      itemstoshow = todoItems;

        break;
    }
    
    this.setState({itemstoshow: itemstoshow});

   }
  render(){
    return(
      <div className="todoForm">
        <Header />
        <CreateForm addItem={this.addItem} />
        <TodoList items={itemstoshow} removeItem={this.removeItem} markTodoDone={this.markTodoDone} editTodo={this.editTodo} filter={this.filterTodos}
        />
      </div>
    )
  }
}



 export default TodoApp;
