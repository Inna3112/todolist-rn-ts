/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Navbar} from './src/Navbar';
import {ScrollView} from 'react-native';
import {InputBlock} from './src/InputBlock';

const App = () => {
  return (
    <ScrollView>
      <Navbar />
      <InputBlock />
    </ScrollView>
  );
};

export default App;
