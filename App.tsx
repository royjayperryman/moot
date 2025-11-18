import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import DrawerNavigation from './src/navigation/DrawerNavigation';
import { AppContext } from './src/context/AppContext';
import MainNavigation from './src/navigation/MainNavigation';

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView>
      <AppContext>
        <NavigationContainer ref={navigationRef}>
          <BottomSheetModalProvider>
            <MainNavigation />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </AppContext>
    </GestureHandlerRootView>
  );
}

export default App;