import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useParams } from 'react-router-dom';

import { Paginator } from './components/Paginator';
import { SearchBar } from './components/SearchBar';
import { CharacterList } from './components/CharacterList';
import { CharacterListByQuery } from './components/CharacterListByQuery';
import { NotFound } from './components/NotFound';

import './App.css';

const queryClient = new QueryClient();

export const App = () => {
  const numPages = 42;
  const [state, setState] = React.useState({ query: "" });
  let { page } = useParams();
  if (page > numPages) {
    return <NotFound />
  }
  page = parseInt(page);
  const handleQuery = (event) => {
    const query = event.target.value;
    setState({ query: query });
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="page-headline">Rick and Morty character list</h1>
        <div className="navigation">
          <Paginator currentPage={page} />
          <SearchBar value={state.query} onChange={handleQuery} />
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        {state.query === "" ?
          <CharacterList page={page} />
          :
          <CharacterListByQuery query={state.query} />}
      </QueryClientProvider>
    </div>
  );
};
