import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components/native';
import Counters from './src/screens/Counters';
import { nativeBaseTheme } from './src/styles/theme';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <Counters />
        <StatusBar style='light' />
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
