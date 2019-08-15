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
            <a onClick={this.showall} class="text-center block border border-blue-500 rounded py-2 px-4 bg-white text-blue-500 hover:bg-blue-500 hover:text-white">All</a>
          </li>
          <li class="flex-1 mr-2">
            <a onClick={this.showtodo} class="text-center block border border-red-500 rounded py-2 px-4 bg-white text-red-500 hover:bg-red-500 hover:text-white" >To-Do</a>
          </li>
          <li class="text-center flex-1">
            <a onClick={this.showdoit} class="text-center block border border-green-500 rounded py-2 px-4 bg-white text-green-500 hover:bg-green-500 hover:text-white">Done</a>
          </li>
        </ul>
    
         <ul className="list-group">{items}</ul>
    </div>
</div>


      );
    }
  }

export default TodoList;