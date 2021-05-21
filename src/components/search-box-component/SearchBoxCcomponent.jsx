import React from 'react'

function SearchBoxCcomponent({placeholder,handleChange}) {
    return (
        <div>
            <input 
                className = "search"
                type = "search" 
                placeholder={placeholder} 
                onChange={handleChange}
                 
            ></input> 
               
        </div>
    )
}

export default SearchBoxCcomponent
