import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Modal,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { PickerItemProps, PickerProperties } from './index';

export default function BetterPicker(props: PickerProperties): JSX.Element {
  const options = _.map(props.children, 'props');
  const [selectorVisible, setSelectorVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [selectedItem, setSelectedItem] = useState({
    value: '',
    label: '',
    key: '',
  });

  useEffect(() => {
    const item = _.find(options, (option: PickerItemProps) => {
      return String(option.value) === String(selectedValue);
    });
    setSelectedItem(item);
  }, [options, selectedValue]);

  const onChangeValue = (item: PickerItemProps) => {
    props.onValueChange(item.value);
    setSelectedValue(item.value);
    setSelectorVisible(false);
  };

  if (_.isUndefined(props.children)) {
    return <View />;
  }

  if (_.isUndefined(selectedItem)) {
    return <View />;
  }

  return (
    <View>
      <TouchableHighlight onPress={() => setSelectorVisible(true)}>
        <View style={styles.row}>
          <Text style={[styles.button, { color: 'black' }]}>
            {selectedItem.label}
          </Text>
          <View style={styles.icon}>
            <Icon name="chevron-down" />
          </View>
        </View>
      </TouchableHighlight>
      {selectorVisible && (
        <Modal visible={true} animationType="slide" transparent={true}>
          <View style={styles.modal}>
            <ScrollView style={styles.modalScroll}>
              {options.map((option: PickerItemProps) => (
                <ListItem
                  key={option.value}
                  onPress={() => {
                    onChangeValue(option);
                  }}
                  bottomDivider
                >
                  <ListItem.Title>{option.label}</ListItem.Title>
                </ListItem>
              ))}
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 15,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
  },
  icon: {
    paddingRight: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    marginTop: 150,
    height: '70%',
    width: '80%',
    backgroundColor: 'white',
    left: '10%',
    borderRadius: 15,
    borderColor: 'grey',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.5,
    shadowColor: 'grey',
  },
  modalScroll: {
    borderRadius: 15,
    borderColor: 'grey',
  },
});
