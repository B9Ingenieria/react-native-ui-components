import DatePicker from './DatePicker';

export interface DatePickerProperties {
  field: string;
  onSelectValue: Function;
  description?: string;
  containerStyle?: object;
  fieldStyle?: object;
  selectorContainerStyle?: object;
  descriptionStyle?: object;
  selectorStyle?: object;
  inputStyle?: object;
  placeholder?: string;
  dateFormat?: string;
}

interface itemStylesProps {
  container: object;
  inputWidth: object;
  button: object;
}

export const itemStyle: itemStylesProps = {
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  inputWidth: { width: '90%' },
  button: { padding: 0 },
};

export default DatePicker;
