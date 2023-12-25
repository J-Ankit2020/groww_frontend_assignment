import { useEffect, useState } from 'react';
import useProductStore from '../store/productStore';

// Custom hook for fetching merchant data
const useFetchMerchantData = () => {
  const [theme, setTheme] = useState({
    background: '',
    foreground: '',
    primary: '',
    'primary-foreground': '',
  });

  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    async function fetchMerchantData() {
      try {
        const { theme } = await fetchProducts();
        setTheme({
          background: theme['--background'],
          foreground: theme['--foreground'],
          primary: theme['--primary'],
          'primary-foreground': theme['--primary-foreground'],
        });
      } catch (error) {
        // Handle error if needed
        console.error('Error fetching merchant data:', error);
      }
    }

    fetchMerchantData();
  }, [fetchProducts]);

  return theme;
};

export default useFetchMerchantData;
