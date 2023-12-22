import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Button from '../Button';
import { useState } from 'react';
import {
  validateExpiryDate,
  validateCVV,
  isValidCreditCardNumber,
} from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../../store/productStore';
export default function CreditCardForm() {
  const setPaymentMode = useProductStore((state) => state.setPaymentMode);
  const navigate = useNavigate();
  const [cardNumber, setCreditCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    name: false,
    cardNumber: false,
    cvv: false,
    expiry: false,
  });
  const formatCreditCardNumber = (input) => {
    // Remove non-numeric characters
    const cleanedInput = input.replace(/\D/g, '');

    // Split the string into groups of four digits
    const parts = cleanedInput.match(/[\s\S]{1,4}/g) || [];

    // Join the groups with spaces
    const formattedNumber = parts.join(' ');

    return formattedNumber;
  };

  const submitHandler = () => {
    // Validate form fields
    const isCardNumberValid = isValidCreditCardNumber(cardNumber);
    const isCVVValid = validateCVV(cvv); // You need to implement CVV validation
    const isExpiryDateValid = validateExpiryDate(month, year);

    // Update error state based on validation results
    setError({
      cardNumber: !isCardNumberValid,
      cvv: !isCVVValid,
      expiry: !isExpiryDateValid,
    });
    if (isCVVValid && isCardNumberValid && isExpiryDateValid) {
      setIsLoading(true);
      setTimeout(() => {
        setPaymentMode('Credit Card');
        setIsLoading(false);

        const isSuccessfull = Math.random() < 0.4;
        if (isSuccessfull) return navigate('/transaction/success');
        else return navigate('/transaction/fail');
      }, 800);
    }
  };

  return (
    <Box w={{ base: '100%', md: '80%', lg: '50%' }} alignItems='center'>
      <FormControl isInvalid={error.cardNumber} color='brand.foreground'>
        <FormLabel mt='2'>Card Number</FormLabel>
        <Input
          type='text'
          mx='auto'
          placeholder='000 0000 0000 0000'
          maxLength='19'
          value={cardNumber}
          onChange={(e) =>
            setCreditCardNumber(formatCreditCardNumber(e.target.value))
          }
        />
        <FormErrorMessage>Card number is invalid</FormErrorMessage>
      </FormControl>
      <HStack mt='2' justifyContent='space-around' align='center' gap='6'>
        <VStack
          align='center'
          justify='center'
          display='flex'
          justifyContent='center'
        >
          <FormControl textColor='brand.foreground' isInvalid={error.cvv}>
            <FormLabel>CVV</FormLabel>
            <Input
              type='password'
              placeholder='3 digit'
              maxLength={4}
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
            <FormErrorMessage>CVV IS INVALID</FormErrorMessage>
          </FormControl>
        </VStack>
        <VStack
          isInvalid={error.cvv}
          display='flex'
          align='center'
          justifyContent='start'
        >
          <FormControl textColor='brand.foreground' isInvalid={error.expiry}>
            <FormLabel>Expiry Date</FormLabel>

            <HStack align='center' alignItems='center'>
              <Input
                type='text'
                w={{ base: '45%', md: '35%', lg: '30%' }}
                maxLength={2}
                placeholder='MM'
                id='month'
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <Input
                type='text'
                w={{ base: '45%', md: '35%', lg: '30%' }}
                maxLength={2}
                id='year'
                placeholder='YY'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </HStack>
            <FormErrorMessage>Date is not valid</FormErrorMessage>
          </FormControl>
        </VStack>
      </HStack>
      <Button
        mx='auto'
        mt='10'
        w='50%'
        onClick={submitHandler}
        isLoading={isLoading}
      >
        Pay
      </Button>
    </Box>
  );
}
