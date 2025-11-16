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

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef}>
        <BottomSheetModalProvider>
          <DrawerNavigation />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;