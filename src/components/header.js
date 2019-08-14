import React from 'react';


class Header extends React.Component {
    render(){
      return(
        <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"></svg>
    <span class="font-semibold text-xl tracking-tight">Ampizzella To-Do</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-700 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
      )
    }
  }
  
      



export default Header;