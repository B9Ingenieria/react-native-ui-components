import es from 'date-fns/locale/es';
import moment from 'moment';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-datepicker/dist/react-datepicker.css';
import type { DatePickerProperties } from './index';

import { styles } from '../defaultStyles';
import { itemStyle } from './index';

registerLocale('es', es);

export default function FormItemDatePicker({
  field,
  onSelectValue,
  description,
  containerStyle,
  fieldStyle,
  selectorContainerStyle,
  descriptionStyle,
  inputStyle,
  placeholder,
  dateFormat,
}: DatePickerProperties): JSX.Element {
  const date_format = dateFormat ? dateFormat : 'DD/MM/YYYY';
  const [date, setDate] = useState(new Date());
  const [dateWeb, setDateWeb] = useState('');

  const onChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setDateWeb(moment(selectedDate).format(date_format));
    onSelectValue(moment(selectedDate).format(date_format));
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, fieldStyle]}>{field}</Text>
      <View style={[styles.inputContainer, selectorContainerStyle]}>
        <DatePicker
          onChange={onChange}
          selected={date}
          mode={'date'}
          locale="es"
          customInput={
            <View style={itemStyle.container}>
              <TextInput
                value={dateWeb}
                placeholder={placeholder ? placeholder : 'Seleccione fecha'}
                placeholderTextColor={'grey'}
                style={[styles.input, inputStyle, itemStyle.inputWidth]}
              />
              <Icon size={25} name={'calendar'} color={'black'} />
            </View>
          }
          popperPlacement="top"
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
