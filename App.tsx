
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DuyTesst from './Testt/DuyTesst';




function App(): JSX.Element {


  return (
    <SafeAreaView >
      <DuyTesst />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
