import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import fetchData from '../utils/http';
const themeStore = (set) => ({
  theme: {
    background: '',
    foreground: '',
    primary: '',
    'primary-foreground': '',
  },
  merchantName: '',
  merchantLogo: '',
  async setTheme() {
    const metaData = await fetchData(
      'https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata'
    );
    const { theme } = metaData;
    const newThemeObj = {
      merchantLogo: metaData.merchantLogo,
      merchantName: metaData.merchantName,
      theme: {
        background: theme['--background'],
        foreground: theme['--foreground'],
        primary: theme['--primary'],
        ['primary-foreground']: theme['--primary-foreground'],
      },
    };
    set(newThemeObj);
  },
});

const useThemeStore = create(persist(themeStore, { name: 'theme' }));

export default useThemeStore;
