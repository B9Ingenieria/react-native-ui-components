import { Picker } from '@react-native-community/picker';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import BetterPicker from '../BetterPicker.ios';

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

describe('BetterPicker for ios', () => {
  it('Renders initial state', () => {
    const { getByText } = render(
      <BetterPicker
        selectedValue={'123'}
        style={{ borderColor: 'white' }}
        onValueChange={() => null}
        data-test="select_nivel"
      >
        {[
          <Picker.Item key={'K123'} label={'Descripcion 123'} value={'123'} />,
          <Picker.Item key={'K124'} label={'Descripcion 124'} value={'124'} />,
        ]}
      </BetterPicker>
    );

    expect(getByText(/Descripcion 123/)).toBeTruthy();
  });

  it('Allow to change selection', () => {
    const onValueChange = jest.fn();
    const { getByText } = render(
      <BetterPicker
        selectedValue={'123'}
        style={{ borderColor: 'white' }}
        onValueChange={onValueChange}
        data-test="select_nivel"
      >
        {[
          <Picker.Item key={'K123'} label={'Descripcion 123'} value={'123'} />,
          <Picker.Item key={'K124'} label={'Descripcion 124'} value={'124'} />,
        ]}
      </BetterPicker>
    );

    const tarea1 = getByText(/Descripcion 123/);
    fireEvent.press(tarea1);

    const tarea2 = getByText(/Descripcion 124/);
    fireEvent.press(tarea2);

    expect(onValueChange).toHaveBeenCalledWith('124');
  });
});
