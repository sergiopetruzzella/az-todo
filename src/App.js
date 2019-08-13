import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
import CreateForm from './components/createform.js';
import TodoList from './components/todolist.js';
import Header from './components/header.js';


var todoItems = [];
todoItems.push({index: 1, value: "Write my todo list", done: true});
todoItems.push({index: 2, value: "learn react", done: false});
todoItems.push({index: 3, value: "learn Webpack", done: false});
todoItems.push({index: 4, value: "learn ES6", done: false});
todoItems.push({index: 5, value: "learn Routing", done: false});
todoItems.push({index: 6, value: "learn Redux", done: false});



class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  addItem(todoItem){
    todoItems.unshift({
      index: todoItems.length+1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem(itemIndex){
    todoItems.splice(itemIndex,1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex){
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex,1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});
  }
  render(){
    return(
      <div className="todoForm">
        <Header />
        <CreateForm addItem={this.addItem} />
        <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
      </div>
    )
  }
}

ReactDom.render(<TodoApp />,document.getElementById('root'));

// function App() {
//   return (
//     <div className="App">
//     < Header />
//       < Createform / > 
//      < Todolist />
    



     
//     </div>
//   );
// }

// export default App;
