import axios from 'axios';
import { useQuery } from 'react-query';

import { CharcterCard } from './CharacterCard';
import { Loading } from './Loading';
import { Error } from './Error';
import { NoMatches } from './NoMatches';

export const CharacterListByQuery = ({ query }) => {
  const allPages = Array.from(Array(827).keys()).join();
  const url = "http://localhost:3000/api/rickAndMorty/characters/" + allPages;
  const characterList = [];
  const numCols = 5;
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "authToken": "RickAndMorty",
      }
    })
      .then(response => response.data.data)
  )
  if (isLoading) {
    return (<Loading></Loading>)
  }

  if (error) {
    return (<Error message={error.message}></Error>)
  }
  let i = 0;
  let j = 0;
  while (i < data.length && j < 20) {
    if (data[i].name.includes(query)) {
      const col = j % numCols + 1;
      const row = Math.floor(j / numCols) + 1;
      characterList.push(<CharcterCard key={data[i].id} character={data[i]} col={col} row={row}></CharcterCard>)
      j++;
    }
    i++;
  }
  if (characterList.length === 0) {
    return <NoMatches query={query} />
  }
  return (<div className="character-list"> {characterList}</div>)
};