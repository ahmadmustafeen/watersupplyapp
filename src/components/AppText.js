import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { primary } from '../constants/Colors'


const AppText = props =>{
const {
    size,
    children,
    heading,
    subHeading,
    bold,
    italic,
    color,
    onPress,
    containerStyle,
    underline,
    textStyle
} = props


return(
    <TouchableOpacity onPress={onPress} style={containerStyle}>
        <Text style={
            [
                styles.defaultStyle,
                heading&&{fontSize:24},
                subHeading&&{fontSize:20},
                size&&{fontSize:size},
                underline&&{textDecorationLine:"underline"},
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
    defaultStyle:{
        color:primary,
        
    }
})
export default AppText