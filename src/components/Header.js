import React from 'react'
import { StyleSheet } from 'react-native'
import {View,Text} from 'react-native'
import {Icon} from 'react-native-elements'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { buttonColor, buttonSecondaryColor } from '../constants/Colors'
import AppText from './AppText'

const Header = props => {
    const {
        navigation,
        goBack,
        iconName,
        iconTitle,
        onIconPress,
        title,
        subHeading
    } = props
    return(
        <View style={styles.headerContainer}>
            <View  style={styles.backContainer}> 
            <Icon type="antdesign" onPress={()=>navigation.openDrawer()} name="menu-fold" color="white"  iconStyle={styles.iconStyles} style={styles.iconStyles}/>
            </View>
            <View style={styles.titleContainer}>

                <AppText color="white" subHeading>{title}</AppText>
            </View>
        </View>
    )
}
const styles =  StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(10),
        backgroundColor:buttonSecondaryColor
    },
    backContainer:{
        width:widthPercentageToDP(20),
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer:{
        width:widthPercentageToDP(60),
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyles:{
        fontSize:24
    }
})
export default Header