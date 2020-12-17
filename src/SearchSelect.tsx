import { InputAutoSuggest } from '@b9/react-native-autocomplete-search';
import _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';

import { styles, styleSelectContainer } from './defaultStyles';

interface FormItemProperties {
  field: string;
  onSelectValue: Function;
  options: object[];
  description?: string;
  containerStyle?: object;
  fieldStyle?: object;
  selectorContainerStyle?: object;
  descriptionStyle?: object;
  selectorStyle?: object;
  inputStyle?: object;
  flatListStyle?: object;
  itemTextStyle?: object;
  placeholder?: string;
}

export default function SearchSelect({
  field,
  onSelectValue,
  options,
  description,
  containerStyle,
  fieldStyle,
  selectorContainerStyle,
  descriptionStyle,
  selectorStyle,
  inputStyle,
  flatListStyle,
  itemTextStyle,
  placeholder,
}: FormItemProperties): JSX.Element {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, fieldStyle]}>{field}</Text>
      <View style={[styles.inputContainer, selectorContainerStyle]}>
        <InputAutoSuggest
          maxNumberSuggestions={15}
          containerStyle={_.defaultTo(
            selectorStyle,
            styleSelectContainer.containerStyle
          )}
          inputStyle={_.defaultTo(inputStyle, styleSelectContainer.inputStyle)}
          flatListStyle={_.defaultTo(
            flatListStyle,
            styleSelectContainer.flatListStyle
          )}
          itemTextStyle={_.defaultTo(
            itemTextStyle,
            styleSelectContainer.itemTextStyle
          )}
          staticData={options}
          onDataSelectedChange={(value: { name: string }) => {
            if (value) {
              onSelectValue(value.name);
            }
          }}
          placeholder={placeholder ? placeholder : `Seleccione ${field}`}
          placeholderTextColor="#c6c4c5"
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
