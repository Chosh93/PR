import '@mantinex/mantine-logo/styles.css';

import '@mantine/carousel/styles.css';
import { MantineProvider, MantineThemeOverride, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/spotlight/styles.css';

type UIProviderProps = { children: React.ReactNode; theme: MantineThemeOverride };

export const UIProvider = ({ children, theme }: UIProviderProps) => (
  <MantineProvider theme={createTheme({ ...theme, cursorType: 'pointer' })}>{children}</MantineProvider>
);
