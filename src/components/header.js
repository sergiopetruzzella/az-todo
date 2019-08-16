import React from 'react';


class Header extends React.Component {
    render(){
      return(
        <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src='./Untitled-1.png' height="45" width="45"></img>
          </div>
          <p className="text-white text-2xl ml-16">To-Do List</p>
          <p className="text-center text-white font-semibold text-xl mx-5 tracking-tight">Ampizzella</p>

        </nav>
      )
    }
  }
  
      



export default Header;