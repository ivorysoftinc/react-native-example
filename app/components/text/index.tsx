import React, { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import presets, { TextPreset } from './text.presets';

export interface TextProps extends RNTextProps {
  text?: string;
  preset?: TextPreset;
}

/**
 * Component allow to use a {@link TextPreset} via `preset` property.
 * Presets contain base styles which can be overriden.
 */
export const Text: FC<TextProps> = (props) => {
  const { style, text, children, preset = 'default', ...rest } = props;

  return (
    <RNText {...rest} style={[presets[preset], style]}>
      {text || children}
    </RNText>
  );
};

export default Text;
