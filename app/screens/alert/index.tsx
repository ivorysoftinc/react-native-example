import * as React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Text } from '../../components';
import { RootNavigationProps } from '../../navigation';
import { AlertButton, compareAlertButtonsByStyle } from '../../utils/alert';
import { colors, sizes } from '../../utils/appearance';

export interface AlertScreenParams {
  title: string;
  message: string;
  buttons: AlertButton[];
}

interface AlertScreenProps extends RootNavigationProps<'alert'> {}

const AlertScreen: React.FC<AlertScreenProps> = ({ route, navigation }) => {
  const { title, message } = route.params;
  const buttons = [...route.params.buttons].sort(compareAlertButtonsByStyle);

  const renderButton = (button: AlertButton) => {
    const { style = 'default' } = button;
    return (
      <Button
        key={button.text}
        preset="simple"
        text={button.text}
        style={styles.button}
        textStyle={[styles.buttonLabel, buttonStyles[style]]}
        onPress={() => {
          navigation.goBack();
          button.onPress?.();
        }}
      />
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <Pressable style={styles.backButton} onPress={navigation.goBack}>
          <Text preset="secondary" text="Close" />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{message}</Text>
        <View style={styles.buttonsContainer}>{buttons.map(renderButton)}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    padding: sizes.indent.xl,
    backgroundColor: '#0003',
  },
  body: {
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    fontSize: sizes.font.xl,
    paddingHorizontal: sizes.indent.xxl,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: sizes.font.s,
    paddingHorizontal: sizes.indent.xxl,
    paddingVertical: sizes.indent.l,
    marginVertical: sizes.indent.xs,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: sizes.indent.s,
    marginBottom: sizes.indent.s,
  },
  button: {
    paddingHorizontal: sizes.indent.xl,
  },
  buttonLabel: {
    color: colors.primary,
  },
  backButton: {
    marginTop: sizes.indent.xs,
    marginEnd: sizes.indent.xs,
    padding: sizes.indent.s,
    alignSelf: 'flex-end',
  },
});

const buttonStyles = StyleSheet.create({
  destructive: {
    color: colors.red,
  },
  cancel: {
    fontWeight: 'bold',
  },
  default: {
    fontWeight: '400',
  },
});

export default AlertScreen;
