import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';
import { AppText } from './common'


const DrawerItem = props => {
    const { title, iconSize, iconType, iconName } = props
    return (
        <View style={styles.container}>
            <AppText size={16}>{title}</AppText>
            <Icon
                size={iconSize || 20}
                // onPress={!!customNavigate ? () => navigation.navigate(LANGUAGE_SCREEN) : () => navigation.goBack()}
                // onPress={() => navigation.goBack()}
                // color={colors.primary}
                name={iconName || "rightcircleo"}
                type={iconType || "antdesign"}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default DrawerItem