import React from 'react';
import {View,StyleSheet} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Header from '../../components/Header'
import InputWithLabel from '../../components/InputWithLabel';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import { primary, secondary } from '../../constants/Colors';
import AppText from '../../components/AppText';



const RemainingDues = props => {
    return(
        <Screen>
            <View style={{height:heightPercentageToDP(100)}}>
                <Header {...props} title="Remaining Dues"/>
                <View style={styles.requestItem}>
                    <AppText color="white" containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Remaining Amount Payable</AppText>
                    <AppText bold italic color="white" heading>Rs. 1400/-</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Last Payment made on:</AppText>
                    <AppText bold italic color="white" heading>25-December-2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Last Payment made on:</AppText>
                    <AppText bold italic color="white" heading>25-December-2020</AppText>
                </View>
                
            <View style={styles.submitButton}>
            <AppButton>Open Previous Record</AppButton>
            </View>
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({
    requestItem:{
        marginTop:heightPercentageToDP(2),
        alignSelf:'center',
        width:widthPercentageToDP(85),
        backgroundColor:secondary,
        borderRadius:100,
        height:heightPercentageToDP(15),
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle:{
        height:'100%',
        backgroundColor:secondary,
        borderRadius:10
        },
    submitButton:{
        position:'absolute',
        // bottom:-heightPercentageToDP(10),
        // left:wp,
        alignSelf:'center',
        top:heightPercentageToDP(80)
    }
})
export default RemainingDues