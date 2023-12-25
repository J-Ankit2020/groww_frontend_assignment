import { chakra, ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';
import useFetchMerchantData from './hooks/useFetchMerchantData'; // Import the custom hook
import TransactionFailed from './pages/TransactionFailed';
import TransactionSuccessful from './pages/TransactionSuccessful';
import ErrorPage from './pages/ErrorPage';

function App() {
  const theme = useFetchMerchantData(); // Use the custom hook to fetch merchant data

  const router = createBrowserRouter([
    {
      path: '/',
      element: <CartPage />,
      errorElement: <ErrorPage />,
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
