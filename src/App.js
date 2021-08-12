import React, { Component } from 'react';
import {Cardlist} from './components/card-list/card-lists.component';
import {Search} from "./components/search/search-box.component"
import './App.css';



class App extends Component{
  constructor() {
    super();
    this.state ={ 
      monster:[ 
      ],
      searchField : ""
  }

} 

 handleChange = (e) => {
  this.setState({searchField : e.target.value});
 }

   componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then( response => response.json())
      .then(user => this.setState({monster : user}))
   }
  render(){
       const { monster , searchField} = this.state;
       const filterField = monster.filter( monster => 
          monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
       )
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <Search 
      placeholder="Search monster"
      onChange={this.handleChange}/>
      <Cardlist monster={filterField} />
     </div>
    )
  }
}

export default App;
