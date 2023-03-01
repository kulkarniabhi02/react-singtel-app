/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  WebView,
  Linking
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const uri = 'https://kulkarniabhi02.github.io/react-singtel/';
  return (
    <WebView
      ref={(ref) => { this.webview = ref; }}
      source={{ uri }}
      onNavigationStateChange={(event) => {
        if (event.url !== uri) {
          this.webview.stopLoading();
          Linking.openURL(event.url);
        }
      }}
    >
    </WebView>
  );
}

export default App;
