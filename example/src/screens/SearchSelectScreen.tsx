import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchSelect from '../../../src/SearchSelect';

const list = [
  {
    id: '0',
    name: 'Zero',
  },
  {
    id: '1',
    name: 'One',
  },
  {
    id: '2',
    name: 'Two',
  },
  {
    id: '3',
    name: 'Three',
  },
];

export default function InputScreen() {
  const [value, setValue] = React.useState('...');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The selected value is {value}!</Text>
      <SearchSelect
        field="SearchSelect"
        onSelectValue={setValue}
        options={list}
        containerStyle={formStyle.container}
        fieldStyle={formStyle.fieldStyle}
        selectorContainerStyle={formStyle.inputStyle}
        placeholder={' '}
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
    backgroundColor: 'white',
  },
});
