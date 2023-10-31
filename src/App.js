import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

import SearchBox from './components/search-box/search-box.component';

import './App.css';

class app extends Component{
  constructor() {
    super();

    this.state={
      monsters: [],
      serachstring:'',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    .then((users) => 
    this.setState(
    () => {
      return {monsters: users};
    }
    
  ));
}

onesarchchange = (event) => {
  
  const serachstring= event.target.value.toLowerCase();
  
  this.setState(
    () => {
    return {serachstring};
  });
}
   render(){
    // console.log('render from appJS');
    const {monsters,serachstring} = this.state;
    const {onesarchchange} =this ;

    const filteredmonsters= monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(serachstring);
    });
    return (
    <div className='app'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      
       <SearchBox onChangeHandler = {onesarchchange} placeholder="Search Monsters" className="monsters-search-box"/>
       
         <CardList monsters= {filteredmonsters} />

    </div>

   )}

}
export default app;
