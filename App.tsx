import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Hey</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
