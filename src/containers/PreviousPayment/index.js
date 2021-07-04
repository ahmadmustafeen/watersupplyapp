import React from 'react';
import {View,StyleSheet, ScrollView} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Header from '../../components/Header'
import InputWithLabel from '../../components/InputWithLabel';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import { primary, secondary } from '../../constants/Colors';
import AppText from '../../components/AppText';



const PreviousPayment = props => {
    return(
        <Screen>
                <Header {...props} title="Previous Payments"/>
                <ScrollView style={{height:heightPercentageToDP(85)}}>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                <View style={styles.requestItem}>
                    <AppText color="white" subHeading containerStyle={{paddingBottom:heightPercentageToDP(1)}}>Amount : Rs. 4000/-</AppText>
                    <AppText bold italic color="white" >Dated: 25-December 2020</AppText>
                </View>
                
                </ScrollView>
                
            {/* <View style={styles.submitButton}>
            <AppButton>Open Previous Record</AppButton>
            </View> */}
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
        height:heightPercentageToDP(10),
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
export default PreviousPayment