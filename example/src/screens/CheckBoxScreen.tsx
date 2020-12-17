import * as React from 'react';
import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CheckBox from '../../../src/CheckBox';

const list = ['option 1', 'option 2', 'option 3'];

const initialValue: string[] = [];

export default function CheckBoxScreen() {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    initialValue
  );

  const handleSelected = useCallback((_form_name: string, values: string[]) => {
    setSelectedValues(values);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The selected values are {String(selectedValues)}!
      </Text>
      <CheckBox
        field="CheckBox"
        form_name="opciones"
        onChange={handleSelected}
        options={list}
        selected={initialValue}
        fieldContainerStyle={formStyle.container}
        fieldStyle={formStyle.fieldStyle}
        checkListStyle={formStyle.row}
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
  row: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 0,
  },
});
