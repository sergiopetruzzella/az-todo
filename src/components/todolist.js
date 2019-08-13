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
        <ul className="list-group">{items}</ul>
      );
    }
  }

export default TodoList;