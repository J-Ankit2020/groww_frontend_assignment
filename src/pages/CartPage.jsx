import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { MdOutlineShoppingBag } from 'react-icons/md';

import OrderTable from '../components/MyCart/OrderTable';
import CheckoutSummary from '../components/MyCart/CheckoutSummary';
import useProductStore from '../store/productStore';
import GlobalSpinner from '../components/GlobalSpinner';

export default function CartPage() {
  const isLoading = useProductStore((state) => state.isLoading);

  if (isLoading) return <GlobalSpinner />;
  else
    return (
      <Box w='100%' p={3} h='100%'>
        <Heading
          size='xl'
          textAlign='center'
          align='center'
          zIndex={1}
          color='brand.foreground'
          display='flex'
          justifyContent='center'
        >
          <Icon as={MdOutlineShoppingBag} boxSize='10' fontWeight='medium' />
          My Cart
        </Heading>
        <Flex
          justifyContent={{ md: 'space-between' }}
          flexDir={{ base: 'column', md: 'row' }}
          w='100%'
        >
          <OrderTable />
          <CheckoutSummary />
        </Flex>
      </Box>
    );
}
