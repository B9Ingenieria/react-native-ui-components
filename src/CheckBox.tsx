import _ from 'lodash';
import React, { useEffect, useReducer } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import { styles } from './defaultStyles';

export const actions = {
  SET_OPTIONS: 'SET_OPTIONS',
};

interface FormItemProperties {
  field: string;
  onChange: Function;
  options: string[];
  selected: string[];
  form_name: string;
  description?: string;
  fieldContainerStyle?: object;
  fieldStyle?: object;
  checkListStyle?: object;
  containerStyle?: object;
  textStyle?: object;
  checkedColor?: string;
}

interface checkBoxElement {
  id: string;
  name: string;
  checked: boolean;
}

interface stateProperties {
  opciones: checkBoxElement[];
}

export type ActionType = {
  type: 'SET_OPTIONS';
  selectedValue: string;
};

const initialOptions = (options: string[], selected: string[]) => {
  const opcionesTemp = _.chain(options)
    .map((option: string) => {
      return {
        id: option,
        name: option,
        checked: _.includes(selected, option),
      };
    })
    .value();
  return { opciones: opcionesTemp };
};

export function reducer(
  state: stateProperties,
  action: ActionType
): stateProperties {
  switch (action.type) {
    case actions.SET_OPTIONS: {
      const optionsTemp = _.map(state.opciones, (option: checkBoxElement) => {
        if (option.id === action.selectedValue) {
          return { ...option, checked: !option.checked };
        } else {
          return { ...option };
        }
      });
      return { ...state, opciones: optionsTemp };
    }
  }
  throw new Error('Unknown action ' + JSON.stringify(action));
}

export default function CkeckBox({
  field,
  form_name,
  onChange,
  options,
  selected,
  description,
  fieldContainerStyle,
  fieldStyle,
  checkListStyle,
  containerStyle,
  textStyle,
  checkedColor,
}: FormItemProperties): JSX.Element {
  const inicialState: stateProperties = initialOptions(options, selected);

  const [state, dispatch] = useReducer(reducer, inicialState);

  useEffect(() => {
    const newSelected = _.chain(state.opciones)
      .filter('checked')
      .map('name')
      .value();

    onChange(form_name, newSelected);
  }, [state.opciones, form_name, onChange]);

  const selectOption = (value: checkBoxElement) => {
    dispatch({ type: 'SET_OPTIONS', selectedValue: value.id });
  };

  return (
    <View style={[styles.container, fieldContainerStyle]}>
      <Text style={[styles.text, fieldStyle]}>{field}</Text>
      <View style={[styles.inputContainer, checkListStyle]}>
        {state.opciones.map((option: checkBoxElement) => (
          <ListItem.CheckBox
            key={option.id}
            title={option.name}
            checked={option.checked}
            onPress={() => selectOption(option)}
            containerStyle={[styles.checkBoxContainer, containerStyle]}
            textStyle={[styles.checkboxText, textStyle]}
            checkedColor={checkedColor ? checkedColor : 'green'}
          />
        ))}
        {description && (
          <Text style={styles.descriptionText}>{description}</Text>
        )}
      </View>
    </View>
  );
}
