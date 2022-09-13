import * as React from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from '../../components';
import { RootNavigationProps } from '../../navigation';
import { sizes } from '../../utils/appearance';

interface HomeScreenProps extends RootNavigationProps<'home'> {}

/**
 * Just an example of usage the custom alert solution based on `react-navigation`
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const onCustomAlertButtonPress = () => {
    navigation.navigate('alert', {
      title: 'Are you sure?',
      message: 'You are doing something important',
      buttons: [
        { text: 'Destroy', style: 'destructive' },
        { text: 'Cancel', style: 'cancel' },
        { text: 'Pardon', style: 'default' },
      ],
    });
  };

  const onNativeAlertButtonPress = () => {
    Alert.alert('Are you sure?', 'You are doing something important', [
      { text: 'Destroy', style: 'destructive' },
      { text: 'Cancel', style: 'cancel' },
      { text: 'Pardon', style: 'default' },
    ]);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        <Text style={styles.title} text="Just an example" />
        <Button
          preset="secondary"
          text="Show Custom Alert"
          style={styles.button}
          onPress={onCustomAlertButtonPress}
        />
        <Button
          preset="secondary"
          text="Show Native Alert"
          style={styles.button}
          onPress={onNativeAlertButtonPress}
        />
        <Button
          preset="secondary"
          text="Navigate Profile"
          style={styles.button}
          onPress={() => navigation.navigate('profile')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: sizes.indent.xxl,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: sizes.indent.xxl,
  },
  button: {
    marginVertical: sizes.indent.s,
  },
});

export default HomeScreen;
