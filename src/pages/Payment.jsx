import { Box, Heading, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CreditCardForm from '../components/PaymentPage/CreditCardForm';

import UPIDetails from '../components/PaymentPage/UPIDetails';
import StepperWrapper from '../components/PaymentPage/StepperWrapper';
import useProductStore from '../store/productStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Payment() {
  const { paymentMethods, totalCost, products } = useProductStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (totalCost == 0 || products.length == 0) return navigate('/');
  }, [totalCost, products, navigate]);
  return (
    <Box
      w='100%'
      mt='4'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      <StepperWrapper idx={1} />
      <Heading mt='5' as='h6' size='lg' color='brand.primary'>
        Pay to complete your Order
      </Heading>

      <Box
        p='4'
        border='2px solid '
        w={{ base: '90%', md: '70%' }}
        rounded='lg'
        mt={10}
        h='50%'
        borderColor='brand.primary'
      >
        <Tabs
          align='center'
          h='100%'
          variant='soft-rounded'
          colorScheme='telegram'
        >
          <TabList justifyContent={'center'} alignItems='center'>
            {paymentMethods.map((mode) => {
              return (
                <Tab w='200px' borderRadius='10px' key={mode}>
                  <Text>{mode}</Text>
                </Tab>
              );
            })}
          </TabList>

          <TabPanels>
            {paymentMethods.map((mode) => {
              return (
                <TabPanel key={mode}>
                  {mode === 'CARDS' ? <CreditCardForm /> : <UPIDetails />}
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
