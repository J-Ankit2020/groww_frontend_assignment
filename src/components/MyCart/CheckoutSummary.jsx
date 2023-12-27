import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Icon,
  Text,
  chakra,
} from '@chakra-ui/react';
import CustomButton from '../Button';
import { IoLockClosed } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../../store/productStore';
import useThemeStore from '../../store/themeStore';
import OrderSummary from './OrderSummary';
export default function CheckoutSummary() {
  const { products, fetchProducts } = useProductStore();
  const { setTheme } = useThemeStore();
  const navigate = useNavigate();
  const reloadCartHandler = async () => {
    useProductStore.persist.clearStorage();
    useThemeStore.persist.clearStorage();
    fetchProducts();
    setTheme();
  };
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
        <CustomButton
          w={'30%'}
          fontWeight={'bold'}
          roundedRight='md'
          rounded='none'
        >
          Submit
        </CustomButton>
      </Flex>
      <OrderSummary />
      <CustomButton
        onClick={checkoutHandler}
        mt={{ base: '7', md: 10 }}
        mx={'auto'}
        isDisabled={products.length === 0}
        w={{ base: '98%', md: '89%' }}
      >
        <Icon as={IoLockClosed} mr={1} />
        CHECKOUT
      </CustomButton>
      <Divider w={{ base: '98%', md: '89%' }} mt='10' />
      <HStack spacing={2} mt='3' justifyContent='center' align='center'>
        <Text color='brand.foreground' fontWeight='bold'>
          OR
        </Text>
        <Button
          color='brand.primary'
          variant='link'
          display='block'
          fontSize='large'
          onClick={reloadCartHandler}
          _active={{
            color: 'brand.foreground',
          }}
        >
          Reload The Cart
        </Button>
      </HStack>
    </Box>
  );
}
