import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'


const InputWithLabel = props => {
    const {
        placeholder,
        border,
        value,
        onChangeText,
        color,
        inputStyle,
        protectedEntry,
        onEyePress
    } = props

    return(
        <View style={{flexDirection:'row'}}>
            <TextInput 
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={protectedEntry}
            style={[styles.container,border&&{borderRadius:border},inputStyle]} 
            placeholderTextColor={color||"rgba(255,255,255,0.6)"} placeholder={placeholder}>

 
            </TextInput>
            {onEyePress &&
            <Icon 
            name={protectedEntry?"eye":"eye-with-line"} 
            type="entypo" 
            containerStyle={{position:'absolute',right:widthPercentageToDP(6),top:heightPercentageToDP(2)}}  
            style={{color:'white', position:'absolute',right:heightPercentageToDP(10)}} 
            color="white" 
            onPress={onEyePress}/>
             } 
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    width:'100%',
    // flex:1,
    color:'white',
    height:50,
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingHorizontal:widthPercentageToDP(5)
}
})


export default InputWithLabel