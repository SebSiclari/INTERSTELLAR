import { StyleSheet, Text, View, Switch } from 'react-native'
import React, {useState} from 'react'
import  HeaderBar  from '../Components/HeaderBar'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'

const Profile = () => {

  const [faceId, setFaceId] = useState(true);

  const SectionTitle=({title})=>{

    return (
      <View
      style={{
        marginTop:10,
      }} > <Text style={{color:'lightgray'}}> {title} </Text> </View>
    )

  }

  const Setting = ({title, value, type, onPress})=>{
    if(type == 'button'){
      return (
        <TouchableOpacity
        style={{
          flexDirection:'row',
          height:50,
          alignItems:'center',
        }}
        onPress={onPress}
        >
         <Text> {title}</Text>
         <View>
           <Text>{value}</Text>
         </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={{
          flexDirection:'row',
          height:50,
          alignItems:'center'
          }}>
          <Text
          style={{flex:1, color:'white'}}>{title}</Text>
          <Switch
          value={value}
          onValueChange={(value)=> onPress(value)} />
        </View>
      )
    }
  }


  return (
    <View style={{flex:1, backgroundColor:'#121212'}}>
    {/* <HeaderBar
    title='Profile' /> */}

    <ScrollView>
    <View >
    <Text style={{color:'white'}}> siclari98@icloud.com   </Text>
    </View>
    <View>
    <Text style={{color:'white'}}> S5UmUHh3rghkRJDYbQdT73TXANs1 </Text>
    </View>
    <View> <Text>Check Status Item</Text></View>

    <SectionTitle
    title='Launch Screen'
     />

     <Setting
    title='Launch'
    value='Home'
    type='button'
    onPress={()=>{ console.warn('working')}}
     />
      <Setting
    title='Appearance'
    value='Dark'
    type='button'
    onPress={()=>{ console.warn('working')}}
     />
     <SectionTitle
    title='Account'
     />
      <Setting
    title='Payment Currency'
    value='USD'
    type='button'
    onPress={()=>{ console.warn('Pressed')}}
     />
      <Setting
    title='Appearance'
    value='Dark'
    type='button'
    onPress={()=>{ console.warn('Pressed')}}
     />
     <SectionTitle
    title='Security'
     />
      <Setting
    title='FaceID'
    value={faceId}
    type='button'
    onPress={(value)=>{ setFaceId(value)}}
     />
      <Setting
    title='Password Settings'
    value=""
    type='button'
    onPress={()=>{ console.warn('Pressed')}}
     />
      <Setting
    title='Change Password'
    value=""
    type='button'
    onPress={()=>{ console.warn('Pressed')}}
     />




    </ScrollView>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})