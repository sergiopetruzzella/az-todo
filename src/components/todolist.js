import React from 'react';
import Todo from './todo.js';



class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.showall = this.showall.bind(this);
    this.showtodo = this.showtodo.bind(this);
    this.showdoit = this.showdoit.bind(this);
    this.state ={filtering : "all"}
  }
  showall(){
    this.setState({filtering : "all"});
    this.props.filter(this.state.filtering);
  }
  showtodo(){
    this.setState({filtering : "todo"});
    this.props.filter(this.state.filtering);
  }
  showdoit(){
    this.setState({filtering : "doit"});
    this.props.filter(this.state.filtering);
  }
    render(){
      var items = this.props.items.map((item,index) =>{
        return(
          <Todo key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} editTodo={this.props.editTodo} />
        );
      });

      

 

      return(
          


<div className="w-full max-w-lg container mx-auto ">
    <div ref="form" className=" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
    
         <ul class="flex">
          <li class="flex-1 mr-2">
            <a onClick={this.showall} class="text-center block border border-blue-200 rounded py-2 px-4 bg-white hover:bg-blue-100 text-blue-500">All</a>
          </li>
          <li class="flex-1 mr-2">
            <a onClick={this.showtodo} class="text-center block border border-red-200 rounded hover:border-red-300 hover:bg-red-100 text-red-500 hover:bg-gray-200 py-2 px-4" >To-Do</a>
          </li>
          <li class="text-center flex-1">
            <a onClick={this.showdoit} class="text-center block border border-green-200 rounded hover:border-green-400 hover:bg-gren-100 text-green-500 hover:bg-green-100 py-2 px-4" >Done</a>
          </li>
        </ul>
    
         <ul className="list-group">{items}</ul>
    </div>
</div>


      );
    }
  }

export default TodoList;