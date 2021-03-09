 import { useState } from 'react'

 import React from 'react'
 
 const Search = ({ getQuery}) => {
    //  to add functionality to search bar
    const [text, setText] = useState( '' )

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
     return (
         <section>
             <form>
                 <input 
                    type = 'text' className='form-control'
                    placeholder = 'Search characters'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus

                 />
             </form>
             
         </section>
     )
 }
 
 export default Search
 