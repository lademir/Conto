import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components/native';
import { CounterProvider } from './src/data/context/CounterContext';
import { Routes } from './src/routes';
import { nativeBaseTheme } from './src/styles/theme';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CounterProvider>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <Routes />
          <StatusBar style='light' />
        </NativeBaseProvider>
      </CounterProvider>
    </ThemeProvider>
  );
}
