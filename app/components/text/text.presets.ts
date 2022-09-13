import { StyleSheet, TextStyle } from 'react-native';
import { colors, sizes } from '../../utils/appearance';

interface TextStyles {
  default: TextStyle;
  title: TextStyle;
  placeholder: TextStyle;
  secondary: TextStyle;
}

export type TextPreset = keyof TextStyles;

export default StyleSheet.create<TextStyles>({
  default: {
    fontSize: sizes.font.s,
    color: colors.primary,
  },
  title: {
    fontWeight: 'bold',
    fontSize: sizes.font.xl,
    color: colors.primary,
  },
  placeholder: {
    fontSize: sizes.font.m,
    color: colors.secondary,
  },
  secondary: {
    fontSize: sizes.font.s,
    color: colors.secondary,
  },
});
