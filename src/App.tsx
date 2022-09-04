import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            habit(id: "2") {
              id
              name
              records {
                id
                date
              }
            }
          }
        `,
      })
      .then((result) => console.log(result))
  }, [])
  return (
    <div>
      <h1>Apollo Client</h1>
    </div>
  )
}

export default App
