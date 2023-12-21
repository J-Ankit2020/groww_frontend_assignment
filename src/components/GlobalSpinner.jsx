import { Box, Heading, Spinner } from '@chakra-ui/react';

export default function GlobalSpinner() {
  return (
    <Box
      display='flex'
      alignItems='center'
      w='100%'
      justifyContent='center'
      mt='4'
      flexDir='column'
    >
      <Spinner color='black.500' w='100px' h='100px' />
      <Heading>Loading Please Wait....</Heading>
    </Box>
  );
}
