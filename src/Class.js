import React, { Component } from 'react'
import Namelist from './components/card-list/Clist'
import SearchBox from './components/search-box-component/SearchBoxCcomponent'
export class Class extends Component {
   constructor(){
       super();
       this.state = {
           monsters : [],
           searchField : ''
       };
       /*dot bind is a method on any function that returns a new function where the
        context of 'this' is set to whatever we passed to it and the context of 'this' that 
        we're setting in handle change right here is the 'this' keyword that is defined inside 
        of our constructor which knows that it's our component*/

       this.handleChange = this.handleChange.bind(this)
       
   }


   componentDidMount(){

       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(users=>this.setState({monsters:users}))

   }

   handleChange(e){

        this.setState({searchField:e.target.value.toLowerCase()})

   }

    render() {
        //destructuring state
        const { monsters, searchField } = this.state;
        //making a filtered array   ,,, includes() search weather our searchField value exist in our array of monstername(the string we called on)
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

        return (
            <div>

                <SearchBox 
                    placeholder="Search Monsters" 
                    handleChange={this.handleChange}>
                </SearchBox>

                <Namelist key = {this.state.monsters.id} monsters = {filteredMonsters} >

                </Namelist>
                
            </div>
        )
    }
}

export default Class
