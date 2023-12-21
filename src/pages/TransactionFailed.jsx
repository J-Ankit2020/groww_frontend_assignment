import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import useProductStore from '../store/productStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function TransactionFailed() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 800);
  };
  const paymentMethod = useProductStore((state) => state.paymentMode);
  return (
    <Box
      mx='auto'
      display='flex'
      alignItems='center'
      gap={5}
      mt={10}
      w={{ base: '100%', md: '80%' }}
      flexDir='column'
      justifyContent='center'
      p={10}
    >
      <Image src='/failure-transaction.gif' w='200px' h='200px' />
      <VStack gap={1}>
        <Heading color='brand.primary' size='md'>
          Oh no! Your payment is failed
        </Heading>
        <Text color='brand.foreground' size='md'>
          we will refund your money soon
        </Text>
        <HStack>
          <Heading size='sm' color='brand.primary'>
            Payment Mode:
          </Heading>
          <Text fontWeight='bold' color='brand.foreground'>
            {paymentMethod}
          </Text>
        </HStack>

        <Button
          mt='2'
          bg='brand.primary'
          color='brand.background'
          isLoading={isLoading}
          onClick={submitHandler}
        >
          Got To Home Page
        </Button>
      </VStack>
    </Box>
  );
}
