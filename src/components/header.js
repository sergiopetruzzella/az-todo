import React from 'react';


class Header extends React.Component {
    render(){
      return(
        <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-4">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img src='./Untitled-1.png' height="45" width="45"></img>
          </div>

          <span class="text-center text-white font-semibold text-xl mx-5 tracking-tight">Ampizzella</span>

        </nav>
      )
    }
  }
  
      



export default Header;