import React from 'react';

class Todo extends React.Component {
    constructor(props){
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose(){
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone(){
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render(){
      var todoClass = this.props.item.done ? "done":"undone";
      return(
        <li className="list-group-item">
            <div className={todoClass}>
                <div class="max-w-m my-3 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                  <div class="sm:flex sm:items-center px-6 py-4">
                    <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p class="text-xl leading-tight"><span className="glyphicon glyphicon-ok icon" onClick={this.onClickDone}></span>
                            {this.props.item.value}</p>
                      <p class="text-sm leading-tight text-gray-600">Customer Support Specialst</p>
                      <div class="mt-4">
                        <button  type="button" onClick={this.onClickClose} class="text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </li>
      );
    }
  }

  export default Todo;
  