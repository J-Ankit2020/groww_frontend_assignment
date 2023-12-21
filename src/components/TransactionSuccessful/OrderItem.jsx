import { AspectRatio, GridItem, Image, Text } from '@chakra-ui/react';
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
        <Text color='brand.foreground'>
          {product.quantity} x {product.price} ={' '}
          {product.price * product.quantity}
        </Text>
      </GridItem>
    </Fragment>
  );
}
