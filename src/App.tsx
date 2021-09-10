import React from 'react';
import { gql, useQuery } from '@apollo/client';


function App() {
  const { loading, data } = useQuery(gql`
  query {
    hello
  }
`);

  if (loading){ 
    return <div>loading...</div>
  }
    
  return (

    <div>{JSON.stringify(data)}</div>
  );
}

export default App;
