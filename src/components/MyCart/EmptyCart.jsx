import { Box, Heading, Image } from '@chakra-ui/react';

export default function EmptyCart() {
  return (
    <Box
      w='100%'
      display={'flex'}
      flexDir='column'
      alignItems='center'
      p={5}
      justifyContent='center'
      color='brand.foreground'
    >
      <Image src='../cart.svg' w={'30%'} />
      <Heading>Your Cart is Empty</Heading>
    </Box>
  );
}
