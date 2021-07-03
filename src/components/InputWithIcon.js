import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const InputWithIcon = props => {
    const { placeholder, textColor, } = props
    const [isFocused, setFocused] = useState(false)
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onFocus={(data) => setFocused(data)} placeholderTextColor={textColor || "white"} style={[textColor && { color: textColor }, styles.text, isFocused && { backgroundColor: '#1f1a30' }]} />
            {/* <Text style={[textColor && { color: textColor }, styles.text]}>{placeholder}</Text> */}
        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    },
    text: {
        backgroundColor: '#39304d',
        color: "white",
        paddingHorizontal: widthPercentageToDP(5),
        borderRadius: heightPercentageToDP(10),
    }
})
export default InputWithIcon