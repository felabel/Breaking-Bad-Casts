import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import CharacterGrid from '../components/characters/CharacterGrid'
import Header from '../components/ui/Header'
import Search from '../components/ui/Search'

export default function Home() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
      const fetchItems = async () => {
          const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

          console.log(result.data)
          // we need to set result.data to items on line 7
          setItems(result.data)
          setIsLoading(false)
      }
      fetchItems()
      
  },
  // we need to add dependencies when using axios, whenever it changes, the useEffect runs again
  [query]
  )

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Breaking bad cast</title>
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        <Header />
        <Search getQuery={(q) => setQuery(q)}/>
        <br />
        <br />
        <CharacterGrid isLoading={isLoading} items={items} />
        
        

        
      </div>
    </Layout>
    
  )
}
