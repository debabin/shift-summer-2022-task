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
  const [query, setQuery] = React.useState("");

  return (
    <div className="App">
      <h1 className="page-headline">Rick and Morty character list</h1>
      <Paginator currentPage={page} />
      <SearchBar query={query} setQuery={setQuery} />
      <QueryClientProvider client={queryClient}>
        {query === "" ?
          <CharacterList page={page}/>
          :
          <CharacterListByQuery query={query}/>}
      </QueryClientProvider>
    </div>
  );
};


