import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Grid,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Button1 from '../components/Button';
import useProductStore from '../store/productStore';
import { Link } from 'react-router-dom';
import OrderItem from '../components/TransactionSuccessful/OrderItem';
import OrderSummaryTable from '../components/TransactionSuccessful/OrderSummaryTable';

export default function TransactionSuccessful() {
  const products = useProductStore((state) => state.products);

  return (
    <Stack w='full' flexDirection={{ base: 'column', md: 'row' }}>
      <VStack w={{ base: '100%', md: '50%' }} align='start' p={10} spacing={6}>
        <HStack alignItems='center'>
          <CheckCircleIcon fontSize='xxx-large' color='green' />
          <Box>
            <Text color='brand.foreground'>Order #444</Text>
            <Heading size='lg' fontWeight='medium' color='brand.primary'>
              Order Confirmed 🚀
            </Heading>
          </Box>
        </HStack>
        <Box border='2px solid' w='full' p={3} borderColor='brand.primary'>
          <Heading color='brand.primary'>Order Updates</Heading>
          <Text color='brand.foreground'>
            You will receive order and updates via email.
          </Text>
        </Box>
        <Heading color='brand.primary'>Your Orders:</Heading>
        <Box>
          <Grid templateColumns='repeat(4, 1fr)' gap='6' alignItems='center'>
            {products.map((product) => {
              return <OrderItem product={product} key={product.id} />;
            })}
          </Grid>
        </Box>
      </VStack>
      <VStack
        w={{ base: '100%', md: '40%' }}
        alignItems='center'
        justifyContent='center'
      >
        <Heading fontWeight='medium' color='brand.primary'>
          Order Summary
        </Heading>
        <Divider />
        <OrderSummaryTable />
        <Link to='/'>
          <Button1 colorScheme='blackAlpha' size='md' fontSize='md' m='2'>
            {'Continue Shopping'}
          </Button1>
        </Link>
      </VStack>
    </Stack>
  );
}
