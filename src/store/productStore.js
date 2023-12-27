import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import fetchData from '../utils/http';
import { getTotalCost } from '../utils/validation';
const productStore = (set) => ({
  products: [],
  paymentMethods: [],
  totalCost: 0,
  paymentDone: false,
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
        paymentDone: false,
      }));
    } catch (error) {
      console.error('Error in fetchProducts:', error);
      set((state) => ({
        ...state,
        isLoading: false,
      }));
    }
  },
  setPaymentDone: (paymentDone) => {
    set((state) => ({ ...state, paymentDone }));
  },

  setPaymentMode: (mode) => {
    set((state) => ({ ...state, paymentMode: mode }));
  },
});

const useProductStore = create(
  persist(productStore, {
    name: 'product',
    partialize: (state) => {
      const { isLoading, ...persistedState } = state;
      return persistedState;
    },
  })
);
export default useProductStore;
