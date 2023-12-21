import {
  Box,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Text,
  chakra,
} from '@chakra-ui/react';
import Button from '../Button';
import { IoLockClosed } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../../store/productStore';

export default function CheckoutSummary() {
  const totalCost = useProductStore((state) => state.totalCost);
  const products = useProductStore((state) => state.products);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    if (products.length > 0) return navigate('/pay');
  };

  return (
    <Box w={{ base: '100%', md: '36%', lg: '30%' }} h='100%'>
      <FormLabel textColor='brand.foreground' mt={{ base: 4, md: 0 }}>
        ENTER PROMO CODE
      </FormLabel>
      <Flex
        w={{ base: '100%', md: '90%', lg: '85%' }}
        border='1px solid'
        borderColor={'brand.primary'}
        rounded='md'
      >
        <chakra.input
          placeholder='Enter your code'
          bg='transparent'
          textColor='brand.foreground'
          p={2}
          outline='none'
          w='70%'
        />
        <Button w={'30%'} fontWeight={'bold'} roundedRight='md' rounded='none'>
          Submit
        </Button>
      </Flex>
      <Grid
        templateColumns='repeat(2, 1fr)'
        w={{ base: '100%', md: '90%', lg: '80%' }}
        mt={4}
        gap={4}
        p={{ base: '4', md: '0' }}
        placeContent='space-around'
      >
        <GridItem>
          <Text textColor='brand.foreground'>Shipping Cost</Text>
        </GridItem>
        <GridItem textAlign='end'>
          <Text textColor='brand.foreground' fontWeight='bolder'>
            TBD
          </Text>
        </GridItem>
        <GridItem>
          <Text textColor='brand.foreground'>Discount</Text>
        </GridItem>
        <GridItem textAlign='end'>
          <Text textColor='brand.foreground' fontWeight='bolder'>
            TBD
          </Text>
        </GridItem>
        <GridItem>
          <Text textColor='brand.foreground'>Tax</Text>
        </GridItem>
        <GridItem>
          <Text textColor='brand.foreground' textAlign='end' fontWeight='bold'>
            TBD
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textColor='brand.primary'
            fontSize='larger'
            fontWeight={'bold'}
            as='h2'
          >
            Estimated Total
          </Text>
        </GridItem>
        <GridItem>
          <Text
            textAlign='end'
            fontSize='larger'
            textColor='brand.foreground'
            fontWeight={'bolder'}
          >
            ${totalCost}
          </Text>
        </GridItem>
      </Grid>

      <Button
        onClick={checkoutHandler}
        mt={{ base: '7', md: 10 }}
        mx={'auto'}
        disabled={products.length === 0}
        w={{ base: '98%', md: '85%' }}
      >
        <Icon as={IoLockClosed} mr={1} />
        CHECKOUT
      </Button>
    </Box>
  );
}
