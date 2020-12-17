import { Platform } from 'react-native';

interface stylesSelectorProps {
  containerStyle: object;
  inputStyle: object;
  flatListStyle: object;
  itemTextStyle: object;
}
export const styleSelectContainer: stylesSelectorProps = {
  containerStyle: {
    maxHeight: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    minHeight: 25,
  },
  inputStyle: {
    marginBottom: 0,
    fontSize: 12,
    width: '100%',
    paddingVertical: Platform.OS === 'android' ? 0 : 4,
    borderWidth: 0,
    paddingLeft: 3,
  },
  flatListStyle: {
    width: '100%',
  },

  itemTextStyle: { fontSize: 15 },
};

interface stylesProps {
  container: object;
  input: object;
  text: object;
  checkboxText: object;
  inputContainer: object;
  textArea: object;
  checkBoxContainer: object;
  checkBoxText: object;
  descriptionText: object;
  inputDate: object;
  containerDate: object;
  inputSelect: object;
}

export const styles: stylesProps = {
  container: {
    flexDirection: 'row',
    marginTop: 20,
    width: Platform.OS === 'web' ? 400 : '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 15 : 12,
    width: '30%',
    textAlign: 'right',
  },
  checkboxText: {
    fontSize: 12,
  },
  inputContainer: {
    width: '70%',
    marginLeft: 30,
  },
  input: {
    height: 25,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 3,
  },
  inputSelect: {
    height: 25,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 3,
    justifyContent: 'center',
  },
  containerDate: {
    width: '100%',
  },
  inputDate: {
    dateIcon: {
      position: 'absolute',
      right: 0,
      top: 4,
      marginLeft: 0,
    },
    dateInput: {
      marginRight: 36,
      height: 25,
    },
  },
  textArea: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 3,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    backgroundColor: 'rbga(255,255,255,0)',
    borderWidth: 0,
  },
  checkBoxText: {
    fontSize: 15,
  },
  descriptionText: {
    fontSize: Platform.OS === 'ios' ? 12 : 10,
    color: 'grey',
  },
};
