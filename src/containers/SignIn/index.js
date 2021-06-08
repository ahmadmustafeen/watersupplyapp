import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Screen } from '../../components/common'

const SignIn = props => {
    return (
        <Screen>
            <View key="header">

            </View>

            <View key="content" style={styles.container}>

                <Text>SignIn</Text>
            </View>
        </Screen>
    )

}


const styles = StyleSheet.create({
    container: {

    }

})

export default SignIn