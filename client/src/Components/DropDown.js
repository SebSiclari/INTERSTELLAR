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
        valueField='black'
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.dropdownText}
        inputSearchStyle={{backgroundColor:'black'}}
        activeColor='#121212'
        search={false}
        data={data}
        labelField="label"
        placeholder="Sortby"
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
    margin: 5,
    height: 20,
    width:80,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor:'#585858',
    color:'white',
    justifyContent:'center',
    textAlign:'center',
    borderRadius:10

  },
  containerStyle:{
    backgroundColor:'#121212',
  },
  dropdownText : {
    color: 'white',
    backgroundColor:'#121212',
    fontSize:8,
    justifyContent:'center',
  },
  selectedOne:{
    backgroundColor:'#121212'
  },
  placeholderStyle: {
    fontSize: 10,
    color:'white',
    textAlign:'center',
    justifyContent:'center'
  },
  selectedTextStyle: {
    fontSize: 10,
    color:'white',
    backgroundColor:'#585858',
    justifyContent:'center',
    textAlign: 'center'
  },
  labelStyle:{
    fontSize:10,
  }
})