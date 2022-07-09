//import ApolloClient from 'apollo-boost'
//import {ApolloProvider} from 'react-apollo'
import DrawList from './component/DrawList';
import Header from './component/Header/Header';
import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import Panel from './component/Body/Panel';
//import { Body } from './component/Body';

const errorLink= onError(({graphQLErrors, networkError})=>{
  if (graphQLErrors){
    graphQLErrors.map(({message,location,path})=>{
      alert(`Graph error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri:'http://localhost:4000/graphql'})
])

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : link
  
  //uri : 'localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
            <Header/>
            <Panel></Panel>
            {/* <Slides/> */}
            {/* <Body>
            </Body> */}
        </div>
    </ApolloProvider>
  );
}

export default App;
