import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BetterPicker from '../../../src/BetterPicker';
import { Picker } from '@react-native-picker/picker';

export default function BetterPickerScreen() {
  const [value, setValue] = React.useState('One');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The selected value is {value}!</Text>
      <View style={styles.selectorContainer}>
        <BetterPicker
          selectedValue={value}
          style={styles.betterStyle}
          onValueChange={(itemValue: string | number) =>
            setValue(String(itemValue))
          }
        >
          <Picker.Item key={'K1'} label={'Label One'} value={'One'} />
          <Picker.Item key={'K2'} label={'Label Two'} value={'Two'} />
          <Picker.Item key={'K3'} label={'Label Three'} value={'Three'} />
        </BetterPicker>
      </View>
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
  selectorContainer: {
    width: 380,
    height: 30,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  betterStyle: {
    fontSize: 12,
    borderColor: 'white',
  },
});
