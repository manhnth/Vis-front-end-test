import axios from 'axios';
import { useEffect, useState } from 'react';
import { PhotoRes } from '../types/Photo';

export function usePhotos(url: string) {
  const [data, setData] = useState<PhotoRes[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;
    let source = axios.CancelToken.source();

    axios
      .get(url)
      .then<PhotoRes[]>((res) => res.data.data)
      .then((data) => {
        console.log(data);

        if (!ignore) {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });

    return () => {
      ignore = true;
      source.cancel('cancelling in cleanup');
    };
  }, [url]);

  return { data, isLoading, isError };
}
