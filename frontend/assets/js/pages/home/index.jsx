
import React from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Link } from 'react-router-dom'
import gql from "graphql-tag";

const httpLink = createHttpLink({
  uri: process.env.API_URL,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export function Home(props){
	React.useEffect(() => {
		client
	  .query({
	    query: gql`
	      query user {
	        user{
	        	id
	        	name
	        	email
	        	password
	        }
	      }
	    `,
	  })
	  .then(console.log)
	  .catch(console.log);
	}, []);
	return (
		<>
			<div>Hellooooooo</div>
			<Link children="login" to="/auth/login"/>
			<br />
			<Link children="signup" to="/auth/signup"/>
		</>
	)
}