// import React from 'react'
// import Layout from '../layout'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading}) => {
    return isLoading ? <Spinner /> : 
    // <Layout>
        // <h1>characters</h1>
        <section className='cards'>
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>

            ))}

        </section>
    //  </Layout>
}
export default CharacterGrid
