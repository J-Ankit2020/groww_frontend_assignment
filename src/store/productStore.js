import { create } from 'zustand';
import fetchData from '../utils/http';
import { getTotalCost } from '../utils/validation';
const productStore = (set) => ({
  products: [],
  paymentMethods: [],
  totalCost: 0,
  isLoading: false,
  paymentMode: '',
  merchantData: {},
  fetchProducts: async () => {
    try {
      set((state) => ({ ...state, isLoading: true }));

      const [productsData, merchantData] = await Promise.all([
        fetchData(
          'https://groww-intern-assignment.vercel.app/v1/api/order-details'
        ),
        fetchData(
          'https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata'
        ),
      ]);

      const { products, paymentMethods } = productsData;
      const totalCost = getTotalCost(products);

      set((state) => ({
        ...state,
        products,
        paymentMethods,
        totalCost,
        isLoading: false,
        merchantData,
      }));

      return merchantData;
    } catch (error) {
      console.error('Error in fetchProducts:', error);
      set((state) => ({
        ...state,
        isLoading: false,
      }));
    }
  },

  setPaymentMode: (mode) => {
    set((state) => ({ ...state, paymentMode: mode }));
  },
});

const useProductStore = create(productStore);
export default useProductStore;
