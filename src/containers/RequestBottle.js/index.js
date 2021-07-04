import React from 'react';
import {View,StyleSheet} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Header from '../../components/Header'
import InputWithLabel from '../../components/InputWithLabel';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import { primary, secondary } from '../../constants/Colors';



const RequestBottle = props => {
    return(
        <Screen>
            <View style={{height:heightPercentageToDP(100)}}>

            <Header {...props} title="Request Bottles"/>
            <View style={styles.requestItem}>
            <InputWithLabel 
                placeholder="Name"
                inputStyle={styles.inputStyle}
                />
            </View>
            <View style={styles.requestItem}>
            <InputWithLabel 
                placeholder="Number of Bottles Required"
                inputStyle={styles.inputStyle}
                />
            </View>
            <View style={styles.requestItem}>
            <InputWithLabel 
                placeholder="Payment Type"
                inputStyle={styles.inputStyle}
                />
            </View>
            <View style={styles.requestItem}>
            <InputWithLabel 
                placeholder="Preferred Timing"
                inputStyle={styles.inputStyle}
                />
            </View>
            <View style={styles.submitButton}>
            <AppButton>Submit</AppButton>
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
        height:heightPercentageToDP(10),
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
export default RequestBottle