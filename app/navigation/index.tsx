import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import AlertScreen, { AlertScreenParams } from '../screens/alert';

export type RootNavigatorParams = {
  home: undefined;
  alert: AlertScreenParams;
};

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const options: Record<string, NativeStackNavigationOptions> = {
  root: { headerShown: false },
  modal: { presentation: 'containedTransparentModal' },
};

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options.root}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="alert" component={AlertScreen} options={options.modal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export interface RootNavigationProps<RouteName extends keyof RootNavigatorParams> {
  route: RouteProp<RootNavigatorParams, RouteName>;
  navigation: NativeStackNavigationProp<RootNavigatorParams, RouteName>;
}

export default RootNavigator;
