import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BetterPicker from '../../src/BetterPicker';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  return (
    <View style={styles.container}>
      <BetterPicker
        selectedValue={'123'}
        style={{ borderColor: 'white' }}
        onValueChange={() => null}
        data-test="select_nivel"
      >
        {[
          <Picker.Item key={'K123'} label={'Descripcion 123'} value={'123'} />,
          <Picker.Item key={'K124'} label={'Descripcion 124'} value={'124'} />,
        ]}
      </BetterPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
