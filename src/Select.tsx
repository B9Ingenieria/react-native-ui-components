import { Picker } from '@react-native-picker/picker';
import _ from 'lodash';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BetterPicker from './BetterPicker/BetterPicker';
import { styles } from './defaultStyles';

interface OptionsProperties {
  id: string | number;
  name: string | number;
}

interface FormItemProperties {
  field: string;
  onSelectValue: Function;
  options: OptionsProperties[];
  description?: string;
  containerStyle?: object;
  fieldStyle?: object;
  selectorContainerStyle?: object;
  descriptionStyle?: object;
  selectorStyle?: object;
  placeholder?: string;
}

export default function Select({
  field,
  onSelectValue,
  options,
  description,
  containerStyle,
  fieldStyle,
  selectorContainerStyle,
  descriptionStyle,
  selectorStyle,
  placeholder,
}: FormItemProperties): JSX.Element {
  const [value, setValue] = useState(options[0].name);

  const onChangeValue = (itemValue: string | number) => {
    setValue(itemValue);
    onSelectValue(itemValue);
  };

  const betterStyle = StyleSheet.create({
    better: {
      borderColor: 'white',
      alignContent: 'center',
      color: value === placeholder ? 'grey' : 'black',
      fontSize: 12,
    },
  });
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, fieldStyle]}>{field}</Text>
      <View style={[styles.inputContainer, selectorContainerStyle]}>
        <View style={[styles.inputSelect, selectorStyle]}>
          <BetterPicker
            selectedValue={value}
            style={betterStyle.better}
            onValueChange={(itemValue: string | number) =>
              onChangeValue(itemValue)
            }
          >
            {_.map(options, (option: OptionsProperties) => {
              return (
                <Picker.Item
                  key={option.id}
                  label={String(option.name)}
                  value={option.name}
                />
              );
            })}
          </BetterPicker>
        </View>
        {description && (
          <Text style={[styles.descriptionText, descriptionStyle]}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
}
