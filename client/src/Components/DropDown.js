import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown'

const DropDown = ({setter, data}) => {
  const [value, setValue] = useState('')
  return (
    <View style={{backgroundColor:'#121212'}}>
    <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Sortby"
        searchPlaceholder="Criteria..."
        value={value}
        onChange={item => {
        setValue(item.value)
        setter(item.value);
        }} />
        </View>
  )
}

export default DropDown

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor:'#121212',
  },
  placeholderStyle: {
    fontSize: 12,
    color:'white'
  },
  selectedTextStyle: {
    fontSize: 12,
    color:'white',
    backgroundColor:'#121212'
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 16,
    backgroundColor:'#121212'
  },
})