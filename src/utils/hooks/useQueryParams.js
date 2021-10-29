import { useState, useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';

export function useQueryParams() {
  const location = useLocation();
  const [params, setParams] = useState(null);

  useEffect(() => {
    const { search } = location;
    setParams(new URLSearchParams(search));
  }, [location]);

  return params;
}
