import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';

const INITIAL_API_METADATA = { ref: null, isLoading: true };

export function useLatestAPI() {
  const [apiMetadata, setApiMetadata] = useState(() => INITIAL_API_METADATA);

  useEffect(() => {
    const controller = new AbortController();

    async function getAPIMetadata() {
      console.log('try');
      try {
        setApiMetadata(INITIAL_API_METADATA);
        console.log('here');
        console.log('controller', controller.signal);
        const response = await fetch(API_BASE_URL, {
          signal: controller.signal,
        });
        console.log('here 2');
        const { refs: [{ ref } = {}] = [] } = await response.json();

        setApiMetadata({ ref, isLoading: false });
      } catch (err) {
        console.log('ERR', err);
        setApiMetadata({ ref: null, isLoading: false });
      }
      console.log('out');
    }

    getAPIMetadata();

    return () => {
      controller.abort();
    };
  }, []);

  return apiMetadata;
}
