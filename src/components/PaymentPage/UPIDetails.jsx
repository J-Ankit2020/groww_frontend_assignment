import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import Button from '../Button';
import { useState } from 'react';
import { validateUpiId } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../../store/productStore';

export default function UPIDetails() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [upiId, setUpiId] = useState('');
  const setPaymentMode = useProductStore((state) => state.setPaymentMode);

  const [error, setError] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    if (!validateUpiId(upiId)) {
      setError(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setPaymentMode('UPI');
        setIsLoading(false);
        const isSuccessfull = Math.random() < 0.6;
        if (isSuccessfull) return navigate('/transaction/success');
        else return navigate('/transaction/fail');
      }, 800);
    }
  }

  return (
    <Box
      w={{ base: '100%', md: '80%', lg: '60%' }}
      alignItems='center'
      border='2px solid bla'
    >
      <Heading size='md' color='brand.primary'>
        Pay With UPI ID
      </Heading>
      <FormControl mt={4} isInvalid={error} color='brand.foreground'>
        <VStack justifyContent='start'>
          <FormLabel w='80%' mt='4'>
            UPI ID/ Mobile No.
          </FormLabel>
          <Input
            type='text'
            placeholder='Enter the UPI ID'
            w='80%'
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
          <FormErrorMessage>Enter a valid UPI ID</FormErrorMessage>
          <Button
            mx='auto'
            mt='10'
            w='50%'
            onClick={submitHandler}
            isLoading={isLoading}
          >
            Pay
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}
