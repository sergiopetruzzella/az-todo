import React from 'react';
import Todo from './todo.js';



class TodoList extends React.Component {
    render(){
      var items = this.props.items.map((item,index) =>{
        return(
          <Todo key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return(
          


<div className="w-full max-w-lg container mx-auto py-8">
    <div ref="form" onSubmit={this.onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <ul className="list-group">{items}</ul>
    </div>
</div>


      );
    }
  }

export default TodoList;