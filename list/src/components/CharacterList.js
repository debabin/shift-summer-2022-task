import { CharcterCard } from './CharacterCard';
import { Loading } from './Loading';
import { Error } from './Error';
import { useGetCharacters } from '../hooks/useGetCharacters';

export const CharacterList = ({ page }) => {
  const url = "http://localhost:3000/api/rickAndMorty/characters";
  const params = { "page": page };
  const { isLoading, error, data } = useGetCharacters(url, params);
  if (isLoading) {
    return (<Loading />)
  }

  if (error) {
    return (<Error message={error.message} />)
  }

  const characters = data.map(character => <CharcterCard key={character.id} character={character} />)
  return (<div className="character-list">{characters}</div>)
};
