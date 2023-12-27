import { GridItem, Text, Grid } from '@chakra-ui/react';
import useProductStore from '../../store/productStore';

export default function OrderSummary() {
  const { totalCost } = useProductStore();

  return (
    <Grid
      templateColumns='repeat(2, 1fr)'
      w={{ base: '100%', md: '90%', lg: '80%' }}
      mt={4}
      gap={4}
      p={{ base: '4', md: '0' }}
      placeContent='space-around'
    >
      <GridItem>
        <Text textColor='brand.foreground'>Shipping Cost</Text>
      </GridItem>
      <GridItem textAlign='end'>
        <Text textColor='brand.foreground' fontWeight='bolder'>
          TBD
        </Text>
      </GridItem>
      <GridItem>
        <Text textColor='brand.foreground'>Discount</Text>
      </GridItem>
      <GridItem textAlign='end'>
        <Text textColor='brand.foreground' fontWeight='bolder'>
          TBD
        </Text>
      </GridItem>
      <GridItem>
        <Text textColor='brand.foreground'>Tax</Text>
      </GridItem>
      <GridItem>
        <Text textColor='brand.foreground' textAlign='end' fontWeight='bold'>
          TBD
        </Text>
      </GridItem>
      <GridItem>
        <Text
          textColor='brand.primary'
          fontSize='larger'
          fontWeight={'bold'}
          as='h2'
        >
          Estimated Total
        </Text>
      </GridItem>
      <GridItem>
        <Text
          textAlign='end'
          fontSize='larger'
          textColor='brand.foreground'
          fontWeight={'bolder'}
        >
          ${totalCost}
        </Text>
      </GridItem>
    </Grid>
  );
}
