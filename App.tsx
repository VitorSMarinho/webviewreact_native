import React, { useState } from 'react';
import {Button, View, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';


const App = () => {
  const [showWebView, setShowWebView] = useState(false);

  const handleShowWebView = () => {
    setShowWebView(true);
  };
  const handleHideWebView = () => {
    setShowWebView(false);
  };

  return (
    <SafeAreaView style={{ flex: 'center'}}>
      <View style={{ flex: 1 }}>
      {showWebView ? (
        <WebView
          source={{ uri: 'https://reactnative.dev/' }}
          style={{ flex: 1 }}
          onNavigationStateChange={navState => 
            navState.url !== 'https://reactnative.dev/' &&
             handleHideWebView()
            }
            />
      ) : (
        <Button title="Abrir página web" onPress={handleButtonPress}/>
    )}
  </View>
  </SafeAreaView>
  );
};

export default App;