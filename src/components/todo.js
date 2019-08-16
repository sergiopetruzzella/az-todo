import React from 'react';

class Todo extends React.Component {
    constructor(props){
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
      this.onClickEdit = this.onClickEdit.bind(this);
      this.state ={editing : false};
      this.state = {selected : false}
    }
    onClickClose(){
      var index = parseInt(this.props.item.index);
      this.props.removeItem(index);
    }
    onClickDone(){
      var index = parseInt(this.props.item.index);
      this.props.markTodoDone(index);
    }
    onClickEdit(){
      this.setState({ editing: !this.state.editing });
      if (this.state.editing) {  
       var index = parseInt(this.props.item.index);
       var newname = this.refs.itemName.value;
       this.props.editTodo(index,newname);
       
    }
    }
    
    render(){
      var todoClass = this.props.item.done ? "opacity-75 bg-green-100":"bg-red-100";
      var todoButtonText = this.props.item.done ? "Undo":"Done";

      return(
        <li className="list-group-item">
            <div className={todoClass + " max-w-m my-3 mx-auto bg-white shadow-md rounded-lg overflow-hidden"}>
                  <div class="sm:flex sm:items-center px-2 sm:px-6  py-2 sm:py-4">
                      
                    { this.state.editing ? 
                       <div class="mt-4 sm:mt-0 sm:ml-4 text-center  text-base sm:text-lg md:text-xl sm:text-left">
                      <input type="text" ref="itemName"  placeholder={this.props.item.value}/>
                      <div class="mt-4 right-0">
                        <button  type="button" onClick={this.onClickEdit} class="text-xs sm:text-sm md:text-base mt-1 right-0 text-yellow-500 hover:text-white mx-1 hover:bg-yellow-500 border border-yellow-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Edit</button>
                    </div>
                      </div>
                      
                      : 
                    <div  class="mt-1 sm:mt-2 sm:ml-4 text-center sm:text-left">
                      
                      <p onClick={this.onClickEdit} className="text-blue-900 text-base sm:text-lg md:text-xl leading-tight" onDoubleClick="onDoubleClickEdit">
                            {this.props.item.value}</p>
                  
                      <div class="mt-1 sm:mt-3 right-0">
                        <button  type="button" onClick={this.onClickDone} class="mt-1 right-0  text-xs sm:text-sm   text-green-500 hover:text-white mx-1 hover:bg-green-500 border border-green-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">{todoButtonText}</button>
                        <button  type="button" onClick={this.onClickClose} class="mt-1 right-0 text-xs sm:text-sm  text-red-500 hover:text-white mx-1 hover:bg-red-500 border border-red-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Delete</button>
                    </div></div>
                    
                          }
                      </div>
                  </div>
                
            
        </li>
      );
    }
  }

  export default Todo;
  