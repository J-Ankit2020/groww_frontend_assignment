import {
  Box,
  Divider,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import useProductStore from '../../store/productStore';
import { Fragment } from 'react';
import EmptyCart from './EmptyCart';

export default function OrderTable2() {
  const products = useProductStore((state) => state.products);

  return (
    <Box w={{ base: '100%', md: '60%' }} p={{ base: 0, md: 3 }} h='100%'>
      <Divider w='100%' size='xl' colorScheme='linkedin' />
      {products.length == 0 ? (
        <EmptyCart />
      ) : (
        <Grid
          templateColumns={'repeat(6, 1fr)'}
          gap={6}
          placeItems={{ base: 'center', md: 'start' }}
          mt={4}
          w='100%'
        >
          {products.map((product) => {
            return (
              <Fragment key={product.id}>
                <GridItem
                  display='flex'
                  justifyContent='space-around'
                  alignItems={{ base: 'center', md: 'start' }}
                >
                  <Image
                    src={product.image}
                    objectFit='contain'
                    h='100px'
                    w='80px'
                  />
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 2 }}>
                  <VStack
                    spacing='1'
                    justifyContent='space-around'
                    align='flex-start'
                  >
                    <Text fontWeight='medium' color='brand.foreground'>
                      {product.title}
                    </Text>
                    <Text color='green' fontWeight='bold'>
                      IN STOCK
                    </Text>
                  </VStack>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <VStack w='100%'>
                    <Text color='brand.primary' fontWeight='medium'>
                      Each
                    </Text>
                    <Text fontWeight='bold' color='brand.foreground'>
                      ${product.price}
                    </Text>
                  </VStack>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <VStack>
                    <Text color='brand.primary' fontWeight='medium'>
                      Quantity
                    </Text>
                    <Text fontWeight='bold' color='brand.foreground'>
                      {product.quantity}
                    </Text>
                  </VStack>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <VStack>
                    <Text fontWeight='medium' color='brand.primary'>
                      Total
                    </Text>
                    <Text fontWeight='bold' color='brand.foreground'>
                      ${product.quantity * product.price}
                    </Text>
                  </VStack>
                </GridItem>
                <GridItem w='100%' colSpan='6'>
                  <Divider w='100%' size='xl' colorScheme='linkedin' />
                </GridItem>
              </Fragment>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
