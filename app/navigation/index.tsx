import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';

export type RootNavigatorParams = {
  home: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const options: Record<string, NativeStackNavigationOptions> = {
  root: { headerShown: false },
  modal: { presentation: 'transparentModal' },
  containedModal: { presentation: 'containedTransparentModal' },
};

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options.root}>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export interface RootNavigationProps<RouteName extends keyof RootNavigatorParams> {
  route: RouteProp<RootNavigatorParams, RouteName>;
  navigation: NativeStackNavigationProp<RootNavigatorParams, RouteName>;
}

export default RootNavigator;
