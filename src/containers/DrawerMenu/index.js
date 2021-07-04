import React from 'react'
import { Image } from 'react-native'
import {View,StyleSheet} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { secondary } from '../../constants/Colors'
import DrawerItem from '../../components/DrawerItem'
import {ContactScreen, HomeScreen, SettingScreen, SignInScreen} from '../../constants/Screen'


const DrawerMenu = props => {
    const {navigation} = props
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/images/logo.png")} style={{width:'100%',height:'100%'}} />
                </View>
            </View>
            <View style={styles.drawerItems}>
                <DrawerItem onPress={()=>navigation.navigate(HomeScreen)} title="Home"/>
            </View>
            <View style={styles.drawerItems}>
                {/* <DrawerItem onPress={()=>navigation.navigate(ContactScreen)} title="Contact"/> */}
            </View>
            <View style={styles.drawerItems}>
                <DrawerItem onPress={()=>navigation.navigate(SettingScreen)} title="Settings"/>
            </View>
            <View style={styles.drawerItems}>
                <DrawerItem onPress={()=>navigation.navigate("Auth")} title="Logout"/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
container:{
    width:widthPercentageToDP(90),
    height:heightPercentageToDP(100),
    backgroundColor:secondary
},
headerContainer:{
height:heightPercentageToDP(30),
justifyContent:'center',
alignItems:'center'
},
logoContainer:{
    aspectRatio:2,
    width:widthPercentageToDP(60),
    justifyContent:'center',
    alignItems:'center'
}
})
export default DrawerMenu