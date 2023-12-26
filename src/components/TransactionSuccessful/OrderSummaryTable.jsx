import { Table, Tbody, Tr, Td, Tfoot } from '@chakra-ui/react';
import useProductStore from '../../store/productStore';

export default function OrderSummaryTable() {
  const paymentMode = useProductStore((state) => state.paymentMode);
  const totalCost = useProductStore((state) => state.totalCost);
  return (
    <Table variant='unstyled'>
      <Tbody>
        <Tr>
          <Td color='brand.foreground'>Subtotal</Td>
          <Td color='brand.foreground'>{totalCost}</Td>
        </Tr>
        <Tr>
          <Td color='brand.foreground'>Discount</Td>
          <Td color='brand.foreground'>0</Td>
        </Tr>
        <Tr>
          <Td color='brand.foreground'>Mode of payment</Td>
          <Td color='brand.foreground'>{paymentMode}</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Td color='brand.primary' fontWeight='bold' fontSize='large'>
            Total
          </Td>
          <Td color='brand.foreground' fontWeight='bold' fontSize='large'>
            {totalCost}
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
}
