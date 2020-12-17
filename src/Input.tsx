import React from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from './defaultStyles';

interface FormItemProperties {
  field: string;
  onChangeValue: Function;
  description?: string;
  containerStyle?: object;
  fieldStyle?: object;
  inputStyle?: object;
  descriptionStyle?: object;
  containerInputStyle?: object;
}

export default function Input({
  field,
  onChangeValue,
  description,
  containerStyle,
  fieldStyle,
  containerInputStyle,
  inputStyle,
  descriptionStyle,
}: FormItemProperties): JSX.Element {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, fieldStyle]}>{field}</Text>
      <View style={[styles.inputContainer, containerInputStyle]}>
        <TextInput
          style={[styles.input, inputStyle]}
          onChangeText={(text) => onChangeValue(text)}
        />
        {description && (
          <Text style={[styles.descriptionText, descriptionStyle]}>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
}
