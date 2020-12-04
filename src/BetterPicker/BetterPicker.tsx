import { Picker } from '@react-native-community/picker';
import React from 'react';
import type { PickerProperties } from './index';

export default function BetterPicker(props: PickerProperties): JSX.Element {
  return <Picker {...props}>{props.children}</Picker>;
}
