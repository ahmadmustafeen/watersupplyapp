import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import AppText from './AppText'
import {heightPercentageToDP, heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { buttonSecondaryColor, primary, secondary } from '../constants/Colors'

const DrawerItem = props => {
    const {onPress,title} = props
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <AppText color="white" size={18} onPress={onPress}>{title}</AppText>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemContainer:{
        alignSelf:'center',
        width:'80%',
        height:hp(10),
        paddingLeft:wp(5),
        borderColor:buttonSecondaryColor,
        borderWidth:0,
        borderBottomWidth:1,
        justifyContent:'center',
        
    }
})

export default DrawerItem