import { useQuery } from 'react-query';

import { instance } from '../api/axiosInstance';

export const useGetCharacters = (url, params) => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    instance.get(url, {
      headers: { "authToken": "RickAndMorty", },
      params: params
    })
      .then(response => {
        if (params) {
          return response.data.data.results
        }
        return response.data.data
      })
  );

  return { isLoading, error, data }
}