import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const httpLink = createHttpLink({
	uri: 'https://gtbu5f4ombf7hnpt65qimp65y4.appsync-api.us-east-1.amazonaws.com/graphql',
	headers: {
		"x-api-key": "da2-zdq47ubcefgflkq3eu4vec6woa"
	}
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const links = `
	query links {
		links {
			id
			description
		}
	}
`;

export default function App() {
	
	React.useEffect(() => {
		client.query({
			query: gql(links)
		}).then(console.log);
	}, []);
	
	return (
		<div>Hello React!!!!!!!!!!!!!!!!!</div>
	)
}