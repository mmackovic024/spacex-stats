import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import logo from './logo.png';
import ItemQuery from './components/ItemQuery';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 350, display: 'block', margin: 'auto' }}
        />
        <ItemQuery />
      </div>
    </ApolloProvider>
  );
}

export default App;
