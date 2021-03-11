import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import AppScreen from './Screen/AllScreen'
import { PersistGate } from 'redux-persist/integration/react'
import stores from './Redux/store'
const { store , persistor } = stores()


export default function App({navigation}) {
  return (
    <Provider 
      store={store}
    > 
      <PersistGate persistor={persistor} loading={null}>
        <AppScreen />
      </PersistGate>
    </Provider>
  )
}

