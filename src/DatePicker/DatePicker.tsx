import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useReducer } from 'react';
import { View, Text, TextInput, Platform, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { DatePickerProperties } from './index';
import { styles } from '../defaultStyles';
import { itemStyle } from './index';

export interface StateProperties {
  show?: boolean;
  icon?: boolean;
  date: Date;
}

interface EventProperties {
  nativeEvent: object;
  type?: string;
}

export const actions = {
  SET_DATE: 'SET_DATE',
  OPEN_CALENDAR: 'OPEN_CALENDAR',
  CLOSE_CALENDAR: 'CLOSE_CALENDAR',
  PRESS_BUTTON: 'PRESS_BUTTON',
};

export type ActionType =
  | { type: 'SET_DATE'; date: Date }
  | { type: 'OPEN_CALENDAR' }
  | { type: 'CLOSE_CALENDAR' }
  | { type: 'PRESS_BUTTON' };

export function reducer(
  state: StateProperties,
  action: ActionType
): StateProperties {
  switch (action.type) {
    case 'SET_DATE': {
      return {
        ...state,
        date: action.date,
        show: Platform.OS === 'ios',
      };
    }
    case 'OPEN_CALENDAR': {
      return {
        ...state,
        show: true,
        icon: Platform.OS !== 'ios',
      };
    }
    case actions.CLOSE_CALENDAR: {
      return {
        ...state,
        show: false,
      };
    }
    case actions.PRESS_BUTTON: {
      return {
        ...state,
        show: !state.show,
        icon: Platform.OS === 'ios' ? !state.icon : state.icon,
      };
    }
  }
  throw new Error('Unknown action ' + JSON.stringify(action));
}

export default function FormItemDatePicker({
  field,
  onSelectValue,
  description,
  containerStyle,
  fieldStyle,
  selectorContainerStyle,
  descriptionStyle,
  selectorStyle,
  inputStyle,
  placeholder,
  dateFormat,
}: DatePickerProperties): JSX.Element {
  const date_format = dateFormat ? dateFormat : 'DD/MM/YYYY';

  const [state, dispatch] = useReducer(reducer, {
    show: false,
    icon: true,
    date: new Date(),
  });

  const onChange = (event: EventProperties, date?: Date) => {
    if (Platform.OS === 'android' && event.type === 'dismissed') {
      dispatch({ type: 'CLOSE_CALENDAR' });
    } else {
      if (date !== undefined) {
        dispatch({ type: 'SET_DATE', date: date });
        onSelectValue(moment(date).format(date_format));
      }
    }
  };

  const onPressButton = () => {
    dispatch({ type: 'PRESS_BUTTON' });
  };

  const openDatePicker = () => {
    Keyboard.dismiss();
    dispatch({ type: 'OPEN_CALENDAR' });
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, fieldStyle]}>{field}</Text>
      <View style={[styles.inputContainer, selectorContainerStyle]}>
        <View style={itemStyle.container}>
          <TextInput
            value={moment(state.date).format(date_format)}
            placeholder={placeholder ? placeholder : 'Seleccione fecha'}
            placeholderTextColor={'grey'}
            style={[styles.input, inputStyle, itemStyle.inputWidth]}
            onFocus={openDatePicker}
          />
          <Button
            icon={
              state.icon && <Icon size={25} name={'calendar'} color={'black'} />
            }
            onPress={onPressButton}
            type="clear"
            buttonStyle={itemStyle.button}
            title={!state.icon ? 'OK' : ''}
          />
        </View>
        {state.show && (
          <RNDateTimePicker
            style={[styles.containerDate, selectorStyle]}
            testID="datePicker"
            value={state.date}
            mode="date"
            onChange={onChange}
            locale="es-ES"
          />
        )}
        {description && (
          <Text style={[styles.descriptionText, descriptionStyle]}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
}
