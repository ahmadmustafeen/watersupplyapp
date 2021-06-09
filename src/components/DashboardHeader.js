import React from 'react'
import { View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppText } from './common'


const DashboardHeader = props => {
    const { title, subTitle } = props
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <AppText size="24">{title}</AppText>
                <AppText size="18">{subTitle}</AppText>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(20),
        backgroundColor: 'red',
    }
    , innerContainer: {
        width: wp(70),
        height: hp(20),
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export default DashboardHeader