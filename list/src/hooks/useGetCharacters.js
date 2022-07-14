import axios from 'axios';
import { useQuery } from 'react-query';

export const useGetCharacters = (url, params) => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "authToken": "RickAndMorty",
      },
      params: params
    })
      .then(response => {
        if (params) {
          return response.data.data.results
        }
        else {
          return response.data.data
        }
      })
  );

  return { isLoading, error, data }
}