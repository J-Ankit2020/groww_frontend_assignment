import { Button } from '@chakra-ui/react';

export default function Button1({ children, ...props }) {
  return (
    <Button
      bg='brand.primary'
      color='brand.background'
      _hover={{
        bg: 'brand.foreground',
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
