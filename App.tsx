/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/Product';
import {Provider} from 'react-redux';
import {myStore} from './src/redux/store/Store';
import Cart from './src/Cart';
import Main from './src/Main';
import ThemeScreen from './src/ThemeScreen';
import LanguageScreen from './src/LanguageScreen';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="Product Screen" component={Products} />
          <Stack.Screen name="CartScreen" component={Cart} />
          <Stack.Screen name="MainScreen" component={Main} />
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
          <Stack.Screen name="Language Screen" component={LanguageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
