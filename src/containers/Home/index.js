import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppText, Screen, } from '../../components/common'
import DashboardHeader from '../../components/DashboardHeader'
import DropDownItem from '../../components/DropDownItem'
import { IMAGE_PICKER_SCREEN } from '../../constants/Screens'


const Home = props => {
    const { navigation } = props
    return (
        <Screen noPadding>
            <View key="header">
                <DashboardHeader title="ahmad" subTitle="mustafeen" />
            </View>
            <View key="content" >
                <DropDownItem title="First" description="Here is the info about first" onApprove={() => navigation.navigate(IMAGE_PICKER_SCREEN)} />
                <DropDownItem title="Second" description="Here is the info about second" />

            </View>


        </Screen >
    )

}
const styles = StyleSheet.create({
    dropdownContainer: {
        width: wp(100),
        backgroundColor: 'blue',
        height: 100
    },
    dropdownBox: {
        display: 'none',
        width: wp(100),
        backgroundColor: 'grey',
        height: 100
    }
})
export default Home