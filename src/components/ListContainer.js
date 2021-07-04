import React from 'react'
import {View,StyleSheet,TouchableOpacity} from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import {Icon} from 'react-native-elements'
import AppText from './AppText'
import { buttonColor, buttonSecondaryColor } from '../constants/Colors'
 
const ListContainer = props =>{
    const {
        title,
        onPress
    } = props
    return(
        <TouchableOpacity style={styles.listContainer} onPress={onPress}>
            <AppText color="white" onPress={onPress}>{title}</AppText>
            <View>
                <Icon name="arrow-right" type="feather" iconStyle={styles.iconStyle} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:widthPercentageToDP(10),
        alignItems:'center',
        backgroundColor:buttonColor
    },
    iconStyle:{
        fontSize:24,
        color:'white'
    }
})
export default ListContainer