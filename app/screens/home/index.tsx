import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from '../../components';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text} text="Hey" />
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

export default HomeScreen;
