import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import BetterPickerScreen from './screens/BetterPickerScreen';
import InputScreen from './screens/InputScreen';
import SelectScreen from './screens/SelectScreen';
import SearchSelectScreen from './screens/SearchSelectScreen';
import TextAreaScreen from './screens/TextAreaScreen';
import CheckBoxScreen from './screens/CheckBoxScreen';
import DatePickerScreen from './screens/DatePickerScreen';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BetterPickerScreen />
        <InputScreen />
        <TextAreaScreen />
        <SelectScreen />
        <SearchSelectScreen />
        <CheckBoxScreen />
        <DatePickerScreen />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
  },
});
