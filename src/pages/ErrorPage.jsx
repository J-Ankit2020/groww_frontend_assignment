import { Heading, Image, VStack } from '@chakra-ui/react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <VStack
      justifyContent='center'
      alignContent='center'
      flexDir='column'
      mt='6'
      spacing={5}
      w='100%'
      minH={'80vh'}
    >
      <Image src='/404.svg' w='350px' />
      <Heading color='brand.foreground' size={{ base: 'md', md: 'lg' }}>
        404 Page Not found
      </Heading>
      <Link to='/'>
        <Button>Go to Home Page</Button>
      </Link>
    </VStack>
  );
}
