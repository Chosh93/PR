'use client';

import { DEFAULT_THEME, MantineThemeColorsOverride, Notification } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import { UIProvider } from '@pr/ui';

export const theme: MantineThemeColorsOverride = {
  fontFamily: 'Pretendard',
  fontFamilyMonospace: 'Pretendard',
  headings: {
    fontFamily: `Pretendard, ${DEFAULT_THEME.fontFamily}`,
  },
  colors: {
    light: [
      '#f0fdf5',
      '#dcfce8',
      '#bbf7d1',
      '#86efad',
      '#4ade80',
      '#22c55e',
      '#16a34a',
      '#15803c',
      '#166533',
      '#14532b',
      '#052e14',
    ],
  },
  primaryColor: 'light',
  defaultRadius: 'md',
};

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider theme={theme}>
      <Notification />
      <ModalsProvider>{children}</ModalsProvider>
    </UIProvider>
  );
}
