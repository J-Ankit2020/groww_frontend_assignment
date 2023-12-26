import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import useThemeStore from '../store/themeStore';
const Header = () => {
  const merchantData = useThemeStore();

  return (
    <Box
      as='header'
      bg='brand.primary'
      color='brand.background'
      shadow='xl'
      zIndex={'6'}
      position='sticky'
      top='0'
    >
      <Flex w='full' p={4} justifyContent='center' align='center'>
        <Image
          src={merchantData.merchantLogo}
          w={10}
          h={10}
          alt='Merchant Logo'
          fallbackSrc='https://www.groww.in/groww-logo-270.png'
        />

        <Heading size='md' ml={3}>
          {merchantData.merchantName || 'GROWW'}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
