import React from 'react';

{/* <form ref="form" onSubmit={this.onSubmit} classNameName="form-inline">
<input type="text" ref="itemName" classNameName="form-control" placeholder="add a new todo..." />
<button type="submit" classNameName="btn btn-default"></button>
</form>   */}

class CreateForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        shown: true,
      };
    }
    toggle(){
      this.setState({
        shown: !this.state.shown
      });
    }
    componentDidMount(){
      this.refs.itemName.focus();
            }
    onSubmit(event){
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;
      if(newItemValue){
        this.props.addItem({newItemValue});
        this.refs.form.reset();
      };
  }
    render(){
      var shown = {
        display: this.state.shown ? "block" : "none"
      };
      
      var hidden = {
        display: this.state.shown ? "none" : "block"
      };

      return( 
        <div>
          <div className="w-full max-w-lg container mx-auto py-8">
            <button onClick={this.toggle.bind(this)} className="ml-56 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-base center font-semibold rounded-full px-4 py-1 leading-normal">Add</button>
          </div>
        <div style={ hidden } className="w-full max-w-lg container mx-auto py-8">
          <form ref="form" onSubmit={this.onSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-900 text-3xl text-sm mb-2" for="username">
                New Task
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text" ref="itemName" type="text" placeholder="Submit a new todo..." />
            </div>
          
            <div className="flex items-center justify-end">
              <button className="text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-base mr-4 font-semibold rounded-full px-4 py-1 leading-normal" 
              type="submit">
                Submit
              </button>
              <button onClick={this.toggle.bind(this)} className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 text-base	 font-semibold rounded-full px-4 py-1 leading-normal" 
              type="submit">
                Cancel
              </button>
            </div>
          </form>
          </div>
        </div>   
            )
          }
        }




export default CreateForm;