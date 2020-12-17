import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DatePicker from '../../../src/DatePicker';

export default function DatePickerScreen() {
  const [value, setValue] = React.useState('...');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The selected date is {value}!</Text>
      <DatePicker
        field="DatePicker"
        onSelectValue={setValue}
        containerStyle={formStyle.container}
        fieldStyle={formStyle.fieldStyle}
        selectorContainerStyle={formStyle.inputStyle}
        placeholder={'Select Date'}
        inputStyle={formStyle.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFE7FB',
    padding: 8,
    marginBottom: 6,
  },
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export const formStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 380,
    marginTop: 10,
  },
  fieldStyle: {
    textAlign: 'left',
    width: '100%',
  },
  inputStyle: {
    marginLeft: 0,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
  },
});
