/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
<Text>Check for updates</Text>;
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import codePush from 'react-native-code-push';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onButtonPress = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{height: 500, backgroundColor: 'green'}}>
        <TouchableOpacity onPress={onButtonPress}>
          <Text>Check for updates</Text>
          <Text>Đã update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default codePush(App);
