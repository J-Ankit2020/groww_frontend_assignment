import { AspectRatio, GridItem, HStack, Image, Text } from '@chakra-ui/react';
import { Fragment } from 'react';

export default function OrderItem({ product }) {
  return (
    <Fragment>
      <GridItem>
        <AspectRatio ratio={1} maxW='35px'>
          <Image src={product.image} objectFit='contain' />
        </AspectRatio>
      </GridItem>
      <GridItem colSpan='2'>
        <Text color='brand.foreground'>{product.title}</Text>
      </GridItem>
      <GridItem>
        <HStack
          color='brand.foreground'
          justify='space-evenly'
          alignItems='center'
        >
          <Text>
            {product.price} x {product.quantity}
          </Text>
        </HStack>
      </GridItem>
    </Fragment>
  );
}
