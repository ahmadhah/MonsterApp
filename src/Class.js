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
       
   }


   componentDidMount(){

       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(users=>this.setState({monsters:users}))

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
                    handleChange={e=>{this.setState({searchField:e.target.value.toLowerCase()})}}>
                </SearchBox>

                <Namelist key = {this.state.monsters.id} monsters = {filteredMonsters} >

                </Namelist>
                
            </div>
        )
    }
}

export default Class
