import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getCategories() {
      try {
        console.log('1');
        // setCategories({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]',
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();
        console.log('data', data);
        setCategories({ data, isLoading: false });
      } catch (err) {
        setCategories({ data: {}, isLoading: false });
      }
    }

    getCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categories;
}
