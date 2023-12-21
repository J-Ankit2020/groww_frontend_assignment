import { chakra, ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';

import { useEffect, useState } from 'react';
import useProductStore from './store/productStore';
import TransactionFailed from './pages/TransactionFailed';
import TransactionSuccessful from './pages/TransactionSuccessful';
function App() {
  const [theme, setTheme] = useState({
    background: '',
    foreground: '',
    primary: '',
    'primary-foreground': '',
  });
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  useEffect(() => {
    async function fetchMerch() {
      const { theme } = await fetchProducts();
      setTheme({
        background: theme['--background'],
        foreground: theme['--foreground'],
        primary: theme['--primary'],
        'primary-foreground': theme['--primary-foreground'],
      });
    }
    fetchMerch();
  }, [fetchProducts]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <CartPage />,
    },
    { path: '/pay', element: <Payment /> },
    { path: '/transaction/fail', element: <TransactionFailed /> },
    { path: '/transaction/success', element: <TransactionSuccessful /> },
  ]);
  return (
    <ChakraProvider
      theme={extendTheme({
        colors: {
          brand: theme,
        },
      })}
    >
      <chakra.div className='App full' bg='brand.background' minH={'100vh'}>
        <Header />
        <RouterProvider router={router} />
      </chakra.div>
    </ChakraProvider>
  );
}

export default App;
