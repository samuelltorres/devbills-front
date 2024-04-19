import { Toaster } from 'sonner';

import { AppProvider } from './hooks';
import { Home } from './screens/home';
import GlobalStyles from './styles/global';

export function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
      <Toaster richColors />
    </AppProvider>
  );
}
