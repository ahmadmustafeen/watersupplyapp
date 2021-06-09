import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppText } from './common'

const DropDownItem = props => {
    const { title, description, onApprove } = props
    const [visible, setvisible] = useState(false)
    return (
        <View>
            <TouchableOpacity style={[styles.dropdownContainer, visible && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }]} onPress={() => setvisible(!visible)}>
                <Text>{title}</Text>
            </TouchableOpacity>
            <View style={[styles.dropdownBox, visible && { display: 'flex' }]}>
                <Text>{description}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.submitBtn, { backgroundColor: 'red' }]}>
                        <AppText size="14" >Reject</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.submitBtn, { backgroundColor: 'green' }]} onPress={onApprove}>
                        <AppText size="14" >Approve</AppText>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    dropdownContainer: {
        width: wp(90),
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        paddingHorizontal: wp(10),
        borderRadius: 20,
        // bordertRadius: 20,
        height: hp(10),
        marginTop: hp(1)
    },
    dropdownBox: {
        display: 'none',
        width: wp(90),
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: 100,
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    submitBtn: {
        margin: 5,
        width: wp(25),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: wp(80),
        justifyContent: 'flex-end',
        // backgroundColor: 'red',
        height: hp(10)
    }
})
export default DropDownItem