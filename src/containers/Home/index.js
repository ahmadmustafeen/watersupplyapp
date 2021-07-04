import React from 'react'
import { View,StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import ListContainer from '../../components/ListContainer'
import { buttonSecondaryColor, primary, secondary } from '../../constants/Colors'



const Home = props => {
    return(
        <Screen>
            <Header {...props} 
                title="Company"

            />
            <View  style={styles.listContainer}>
                <ListContainer title="Request for Bottle"/>
            </View>

            <View  style={styles.listContainer}>
                <ListContainer title="View Remaining Dues"/>
            </View>

            <View  style={styles.listContainer}>
                <ListContainer title="View Previous Payment"/>
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
        backgroundColor:'blue'
    }
})
export default Home