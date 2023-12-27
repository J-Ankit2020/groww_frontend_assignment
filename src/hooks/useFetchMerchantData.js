import { useEffect } from 'react';
import useProductStore from '../store/productStore';
import useThemeStore from '../store/themeStore';

// Custom hook for fetching merchant data
const useFetchMerchantData = () => {
  const { setTheme, theme } = useThemeStore();

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    if (products.length == 0 || !theme) {
      fetchProducts();
      setTheme();
    }
  }, []);
  return theme;
};

export default useFetchMerchantData;
