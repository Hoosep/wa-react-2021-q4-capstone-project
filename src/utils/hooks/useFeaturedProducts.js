import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedProducts(pageSize = 30) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setFeaturedProducts({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]',
          )}&q=${encodeURIComponent(
            '[[at(document.tags, ["Featured"])]]',
          )}&lang=en-us&pageSize=${pageSize}`,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();

        setFeaturedProducts({ data, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, pageSize]);

  return featuredProducts;
}
