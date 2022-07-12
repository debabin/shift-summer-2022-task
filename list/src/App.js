import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Pages } from './components/Pages';
import { CharacterList } from './components/CharacterList';
import { CharacterListByQuery } from './components/CharacterListByQuery';

import './App.css';

const queryClient = new QueryClient();

export const App = ({ pageId }) => {
  const [state, setState] = React.useState({ query: "" });
  const handleQuery = (event) => {
    const query = event.target.value;
    setState({ query: query });
  };

  const SearchBar = ({ handleQuery }) => {
    return (
      <span className="search-bar">
        🔎
        <input type="search" value={state.query} onChange={handleQuery} placeholder="Search" autoFocus />
      </span>)
  };

  return (
    <div className="App">
      <h1 className="page-headline">Rick and Morty character list</h1>

      <Pages currentPage={pageId} />
      <SearchBar handleQuery={handleQuery} />
      <QueryClientProvider client={queryClient}>
        {state.query === "" ?
          <CharacterList page={pageId} />
          :
          <CharacterListByQuery query={state.query} />}
      </QueryClientProvider>
    </div>
  );
};


