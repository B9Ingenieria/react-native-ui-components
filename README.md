# @b9/react-native-ui-components

React Native UI Components

| Android | iOS | Web |
| --- | --- | --- |
| <img src="./example/screenshots/android.png" width="150"> | <img src="./example/screenshots/ios.png" width="150"> | <img src="./example/screenshots/web.png" width="150"> |
| <img src="./example/screenshots/picker-android.png" width="300"> | <img src="./example/screenshots/picker-ios.png" width="300"> |<img src="./example/screenshots/picker-web.png" width="300"> 

## Installation

```sh
yarn add @b9/react-native-ui-components
```

## Usage

```js
import {BetterPicker} from "@b9/react-native-ui-components";
```

Create array options which will be used by BetterPicker

```sh
const options=[{"id":"1","name":"One"},{"id":"2","name":"Two"},{"id":"3","name":"Three"}]
```

Create value which will be used by BetterPicker

```sh
const [value,setValue]=useState("One")
```

```js
   <View style={styles.selectorContainer}>
      <BetterPicker
            selectedValue={value}
            style={{
              width:250,
              fontSize: 12,
            }}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
          >
          {_.map(options, (option: object) => {
              return (
                <Picker.Item
                  key={option.id}
                  label={option.name}
                  value={option.name}
                />
              );
            })}
          </BetterPicker>
    </View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License


