import { CharcterCard } from './CharacterCard';
import { Loading } from './Loading';
import { Error } from './Error';
import { NoMatches } from './NoMatches';
import { useGetCharacters } from '../hooks/useGetCharacters';

export const CharacterListByQuery = ({ query }) => {
  const allPages = Array.from(Array(827).keys()).join();
  const url = "http://localhost:3000/api/rickAndMorty/characters/" + allPages;
  const { isLoading, error, data } = useGetCharacters(url, '');
  if (isLoading) {
    return (<Loading />)
  }

  if (error) {
    return (<Error message={error.message} />)
  }
  const characters = data.filter(character => character.name.search(query) > -1)
    .map(
      character => <CharcterCard key={character.id} character={character} />
    );

  if (characters.length === 0) {
    return <NoMatches query={query} />
  }
  return (<div className="character-list"> {characters}</div>)
};