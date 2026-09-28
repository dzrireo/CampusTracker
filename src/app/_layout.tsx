import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { CampusProvider } from '@/context/CampusContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CampusProvider>
        <AnimatedSplashOverlay />

        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: 'CampusTracker' }}
          />

          <Stack.Screen
            name="details/[id]"
            options={{ title: 'Event Details' }}
          />

          <Stack.Screen
            name="add"
            options={{ title: 'Add Event' }}
          />
        </Stack>
      </CampusProvider>
    </ThemeProvider>
  );
}