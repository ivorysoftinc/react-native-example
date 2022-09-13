import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, sizes } from '../../utils/appearance';

interface ButtonStyles {
  container: ViewStyle;
  disabled: ViewStyle;
  text: TextStyle;
}

export type ButtonPreset = 'simple' | 'primary' | 'secondary';

type ButtonPresetStyles = {
  [preset in ButtonPreset]: ButtonStyles;
};

const styles: ButtonPresetStyles = {
  simple: StyleSheet.create<ButtonStyles>({
    container: {
      paddingVertical: sizes.indent.s,
      paddingHorizontal: sizes.indent.l,
    },
    disabled: {},
    text: {
      color: colors.accent,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: sizes.font.s,
    },
  }),
  primary: StyleSheet.create<ButtonStyles>({
    container: {
      minHeight: 40,
      justifyContent: 'center',
      borderRadius: sizes.radius.m,
      paddingHorizontal: sizes.indent.l,
      backgroundColor: colors.accent,
    },
    disabled: { backgroundColor: colors.border },
    text: {
      color: colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: sizes.font.s,
    },
  }),
  secondary: StyleSheet.create({
    container: {
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: sizes.radius.m,
      borderColor: colors.accent,
      paddingVertical: sizes.indent.m - StyleSheet.hairlineWidth,
      paddingHorizontal: sizes.indent.l,
    },
    disabled: {},
    text: {
      color: colors.accent,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: sizes.font.s,
    },
  }),
};

export default styles;
