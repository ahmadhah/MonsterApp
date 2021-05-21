import React from 'react'
import './Clist.css'
import CardComponent from '../card-component/CardComponent'

function Clist(props) {
    return (
        <div className = "card-list">
            {
                props.monsters.map(monster =><CardComponent key={monster.id}  monster = {monster}></CardComponent>)
            }
        </div>
    )
}

export default Clist
