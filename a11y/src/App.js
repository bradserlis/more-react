import React, {Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
     <header>
     <h1>'Ello World</h1>
     <nav>
       <a href='#home'>Home</a>
       <img src='/img/is-an-image.jpg' alt=''/>
     </nav>
     <form role='search'>
       <input type='search' name='search' aria-label='search all content'/>
     </form>
     </header> 
  )
  }
}

export default App;

