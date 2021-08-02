import React from 'react'
import { View,StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import ListContainer from '../../components/ListContainer'
import { buttonSecondaryColor, primary, secondary } from '../../constants/Colors'
import { BOTTLE_REQUEST_SCREEN, PREVIOUS_PAYMENT_SCREEN, REMAINING_DUES_SCREEN } from '../../constants/Screen'



const Home = props => {
    const {navigation} = props
    return(
        <Screen>
            <Header {...props} 
                title="Company"

            />
            <View  style={styles.listContainer}>
                <ListContainer title="Request for Bottle" 
                onPress={()=>navigation.navigate(BOTTLE_REQUEST_SCREEN)}/>
            </View>

            <View  style={styles.listContainer}>
                <ListContainer 
                title="View Remaining Dues"
                onPress={()=>navigation.navigate(REMAINING_DUES_SCREEN)}
                />
            </View>

            <View  style={styles.listContainer}>
                <ListContainer 
                title="View Previous Payment"
                onPress={()=>navigation.navigate(PREVIOUS_PAYMENT_SCREEN)}
                
                />
            </View>

            <View  style={styles.listContainer}>
                <ListContainer title="Contact Us"/>
            </View>

            <View  style={styles.listContainer}>
                <ListContainer title="View Pricing"/>
            </View>
            <View  style={styles.listContainer}>
                <ListContainer title="Complaints"/>
            </View>

        </Screen>
    )
}
const styles = StyleSheet.create({
    listContainer:{
        marginTop:heightPercentageToDP(2),
        width:widthPercentageToDP(90),
        height:heightPercentageToDP(10),
        alignSelf:'center',
        borderRadius:50,
        borderWidth:2,
        borderColor:buttonSecondaryColor,
        overflow:'hidden',
    }
})
export default Home