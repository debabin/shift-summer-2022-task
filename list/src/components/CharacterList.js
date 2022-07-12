import axios from 'axios';
import { useQuery } from 'react-query';

import { CharcterCard } from './characterCard';
import { Loading } from './loading';
import { Error } from './error';

export const CharacterList = ({ page }) => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get("http://localhost:3000/api/rickAndMorty/characters", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "authToken": "RickAndMorty",
      },
      params: { "page": page }
    })
      .then(response => response.data.data.results)
  )
  if (isLoading) {
    return (<Loading />)
  }

  if (error) {
    return (<Error message={error.message}></Error>)
  }
  const characterList = [];
  const numCols = 5;
  for (let i = 0; i < data.length; i++) {
    const col = i % numCols + 1;
    const row = Math.floor(i / numCols) + 1;
    characterList.push(<CharcterCard key={data[i].id} character={data[i]} col={col} row={row}></CharcterCard>)
  }
  return (<div className="character-list">{characterList}</div>)
};
