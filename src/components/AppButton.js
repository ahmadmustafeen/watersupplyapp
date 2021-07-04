import React from 'react'
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { buttonColor, buttonSecondaryColor } from '../constants/Colors'


const AppButton = props =>{
const {
    children,
    heading,
    subHeading,
    paragraph,
    bold,
    italic,
    border,
    color,
    onPress,
    containerStyle,
    textStyle
} = props


return(
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer,containerStyle,border&&{borderRadius:border}]}>
        <Text style={
            [
                styles.defaultStyles,
                heading&&{fontSize:24},
                subHeading&&{fontSize:20},
                bold&&{fontWeight:'bold'},
                italic&&{fontStyle:'italic'},
                color&&{color:color},
                textStyle
            ]
        }> 
            {children}
        </Text>
    </TouchableOpacity>
)


}
const styles = StyleSheet.create({
    defaultStyles:{
        fontSize:16,
        color:"white",

    },
    buttonContainer:{
        width:widthPercentageToDP(80),
        height:heightPercentageToDP(10),
        alignSelf:'center',
        backgroundColor:buttonSecondaryColor,
        color:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default AppButton