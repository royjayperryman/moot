import { createProviderComposer } from './createProviderComposer';

import { ThemeProvider } from './ThemeProvider';

// Order matters
export const AppContext = createProviderComposer([
    ThemeProvider
]);