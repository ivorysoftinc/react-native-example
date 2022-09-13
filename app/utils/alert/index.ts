type AlertButtonStyle = 'default' | 'cancel' | 'destructive';

export type AlertButton = {
  text: string;
  style?: AlertButtonStyle;
  onPress?: () => void;
};

/**
 * The map is used to sort buttons by types. The higher the power, the higher the place
 */
const ALERT_BUTTON_STYLE_POWER_MAP: { [key in AlertButtonStyle]: number } = {
  cancel: 0,
  default: 1,
  destructive: 2,
};

/**
 * Can be used as the parameter of `Array.prototype.sort` to sort alert buttons by type
 */
export function compareAlertButtonsByStyle(a: AlertButton, b: AlertButton) {
  const aStyle = a.style || 'default';
  const bStyle = b.style || 'default';
  const aPower = ALERT_BUTTON_STYLE_POWER_MAP[aStyle];
  const bPower = ALERT_BUTTON_STYLE_POWER_MAP[bStyle];
  return aPower - bPower;
}
