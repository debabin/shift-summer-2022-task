import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useParams } from 'react-router-dom';

import { Paginator } from './components/Paginator';
import { SearchBar } from './components/SearchBar';
import { CharacterList } from './components/CharacterList';
import { CharacterListByQuery } from './components/CharacterListByQuery';

import './App.css';

const queryClient = new QueryClient();

export const App = () => {
  let {page} = useParams();
  page = parseInt(page);
  const [state, setState] = React.useState({query:""});
  const handleQuery = (event) => {
    const query = event.target.value;
    setState({ query: query });}

  return (
    <div className="App">
      <h1 className="page-headline">Rick and Morty character list</h1>
      <Paginator currentPage={page} />
      <SearchBar value={state.query} onChange={handleQuery} />
      <QueryClientProvider client={queryClient}>
        {state.query === "" ?
          <CharacterList page={page}/>
          :
          <CharacterListByQuery query={state.query}/>}
      </QueryClientProvider>
    </div>
  );
};
