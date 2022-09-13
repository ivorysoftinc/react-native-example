import React, { FC, ReactNode } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import presets, { ButtonPreset } from './button.preset';
import Text from './';
import { colors } from '../../utils/appearance';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  loading?: boolean;
  children?: ReactNode | string;
  textStyle?: StyleProp<TextStyle>;
  preset?: ButtonPreset;
}

/**
 * Component allow to use a {@link ButtonPreset} via `preset` property.
 * Presets contain base styles which can be overriden.
 */
export const Button: FC<ButtonProps> = (props) => {
  const { style, children, textStyle, text, preset, loading, ...rest } = props;
  const styles = presets[preset || 'primary'];

  const renderTextChildren = () => {
    const value = text || children;

    return typeof value === 'string' ? (
      <Text style={[styles.text, textStyle]} text={value} />
    ) : (
      value // allows to pass chilndren ReactNode as an option
    );
  };

  const renderLoadingIndicator = () => (
    <ActivityIndicator style={commonStyles.loading} color={colors.plain} />
  );

  return (
    <TouchableOpacity
      {...rest}
      disabled={rest.disabled || loading}
      style={[styles.container, rest.disabled && styles.disabled, style]}
    >
      {loading ? renderLoadingIndicator() : renderTextChildren()}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  activeOpacity: 0.8,
};

const commonStyles = StyleSheet.create({
  loading: {
    height: 40,
  },
});

export default Button;
