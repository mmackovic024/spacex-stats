import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import logo from './logo.png';
import ItemList from './components/ItemList';

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
        <ItemList />
      </div>
    </ApolloProvider>
  );
}

export default App;
