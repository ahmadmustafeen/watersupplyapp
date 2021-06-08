import React from 'react'
import { View, Text } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { AppText } from '../../components/common'


const DrawerMenu = props => {

    return (
        <View style={{ width: wp(90), height: hp(100), backgroundColor: 'red' }}>
            <AppText>DRAWER</AppText>
        </View>
    )
}
export default DrawerMenu;