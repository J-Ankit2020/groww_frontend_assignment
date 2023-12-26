import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

import fetchData from '../utils/http';
import { getTotalCost } from '../utils/validation';
const productStore = (set) => ({
  products: [],
  paymentMethods: [],
  totalCost: 0,
  isLoading: false,
  paymentMode: '',

  fetchProducts: async () => {
    try {
      set((state) => {
        return { ...state, isLoading: true };
      });

      const productsData = await fetchData(
        'https://groww-intern-assignment.vercel.app/v1/api/order-details'
      );

      const { products, paymentMethods } = productsData;
      const totalCost = getTotalCost(products);

      set((state) => ({
        ...state,
        products,
        paymentMethods,
        totalCost,
        isLoading: false,
      }));
      Cookies.set(
        'products',
        JSON.stringify({ products, paymentMethods, totalCost }),
        {
          expires: 1, // Set the expiration time for the cookie (in days)
        }
      );
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

const useProductStore = create(persist(productStore, { name: 'product' }));
export default useProductStore;
