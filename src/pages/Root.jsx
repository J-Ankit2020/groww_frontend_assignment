import { Route, Routes } from 'react-router-dom';
import { chakra, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from '../components/Header';
import CartPage from '../pages/CartPage';
import Payment from '../pages/Payment';
import useFetchMerchantData from '../hooks/useFetchMerchantData'; // Import the custom hook
import TransactionFailed from '../pages/TransactionFailed';
import TransactionSuccessful from '../pages/TransactionSuccessful';
import ErrorPage from './ErrorPage';
import useThemeStore from '../store/themeStore';
export default function Root() {
  useFetchMerchantData();

  const { theme } = useThemeStore();

  return (
    <ChakraProvider
      theme={extendTheme({
        colors: {
          brand: theme,
        },
      })}
    >
      <chakra.div bg='brand.background' minH={'100vh'}>
        <Header />
        <Routes>
          <Route path='/' element={<CartPage />} />
          <Route path='/pay' element={<Payment />} />
          <Route path='/transaction/fail' element={<TransactionFailed />} />
          <Route
            path='/transaction/success'
            element={<TransactionSuccessful />}
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </chakra.div>
    </ChakraProvider>
  );
}
