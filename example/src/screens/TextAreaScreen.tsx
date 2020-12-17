import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextArea from '../../../src/TextArea';

export default function TextAreaScreen() {
  const [value, setValue] = React.useState('...');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The text entered is {value}!</Text>
      <TextArea
        field="TextArea"
        onChangeValue={setValue}
        fieldStyle={formStyle.fieldStyle}
        containerStyle={formStyle.container}
        containerInputStyle={formStyle.inputStyle}
        inputStyle={formStyle.input}
        description="Optional: Description of requested information"
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
    height: 50,
    backgroundColor: 'white',
  },
});
