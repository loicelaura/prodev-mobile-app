import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/*
          No need to explicitly define a screen for "(tabs)" or "+not-found"
          since you are using a single-screen setup. The Stack will
          automatically use app/index.tsx as the first screen.
          You can add more <Stack.Screen /> components here later if you add
          more pages to your app.
        */}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}