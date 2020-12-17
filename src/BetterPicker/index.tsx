import BetterPicker from './BetterPicker';
import type { StyleProp, TextStyle } from 'react-native';
import type { ViewProps } from 'react-native';

export type ItemValue = number | string;

export interface PickerProperties extends ViewProps {
  children: JSX.Element[];
  selectedValue: ItemValue;
  onValueChange: (itemValue: ItemValue, itemIndex?: number) => void;
  style?: StyleProp<TextStyle>;
}

export interface PickerItemProps {
  label?: string;
  value: ItemValue;
  color?: string;
  testID?: string;
}

export default BetterPicker;
