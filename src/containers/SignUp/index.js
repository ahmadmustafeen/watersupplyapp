import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Screen, Button, AppText } from '../../components/common';
import Loader from '../../components/Loader';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SIGN_IN } from '../../redux/actionTypes';
import { checkIfLoading } from '../../redux/selectors';
import { useState } from 'react';
import InputWithIcon from '../../components/InputWithIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SIGNIN_SCREEN } from '../../constants/Screens';

const SignUp = props => {
    const [state, setState] = useState({
        user_id: '',
    });
    const { isLoading } = useSelector(state => {
        return {
            isLoading: checkIfLoading(state, SIGN_IN),
        };
    }, shallowEqual);

    const dispatch = useDispatch();

    // const { isLoading } = useSelector((state) => ({
    //   isLoading: checkIfLoading(state, SIGN_IN),
    // }));

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: '#1f1a30', flex: 1 }}>


            <View key="content" style={styles.container}>
                <Loader loading={isLoading} />

                <AppText color="white" size={24} style={{ marginVertical: hp(5), alignSelf: 'center' }}>Create a New Account</AppText>

                <View style={styles.inputContainer}>
                    <InputWithIcon placeholder="First Name" />
                </View>
                <View style={styles.inputContainer}>
                    <InputWithIcon placeholder="Last Name" />
                </View>
                <View style={styles.inputContainer}>
                    <InputWithIcon placeholder="Phone Number" />
                </View>
                <View style={styles.inputContainer}>
                    <InputWithIcon placeholder="Email" />
                </View>
                <View style={styles.inputContainer}>
                    <InputWithIcon placeholder="Address Line 1" />
                </View>
                <View style={styles.inputContainer}>
                    <InputWithIcon placeholder="Address Line 2" />
                </View>


                <View style={{ alignSelf: 'center' }}>
                    <Button
                        color="black"
                        style={styles.butLogin}
                        onPress={() => dispatch({ type: SIGN_IN, payload: state })}>
                        <Text style={styles.butLoginText}> Register </Text>
                    </Button>
                </View>

                {/* <Loader loading={isLoading} /> */}


                <View style={styles.footerLogin}>
                    <View style={styles.footerTextBox}>
                        <AppText color="white">Already have an account?</AppText>
                        <TouchableOpacity onPress={() => props.navigation.navigate(SIGNIN_SCREEN)}>
                            <AppText color="#0df6e4"> Login</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView >
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        height: hp(30),
        aspectRatio: 1.5,
        marginVertical: hp(5),
        alignSelf: 'center'
    },
    container: {
        // height: heightPercentageToDP(97.5),
        paddingBottom: hp(5),
        justifyContent: 'center'
    },
    butLogin: {
        height: hp(10),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(80),
        backgroundColor: "#0df6e4",
        color: 'black',
        borderRadius: 25,
        marginVertical: hp(2),
    },
    butLoginText: {
        textAlign: 'center',
        color: 'black',
        margin: 'auto',
        fontSize: 20,
    },
    inputContainer: {
        alignSelf: 'center',
        width: wp(90),
        height: hp(13)
    },
    footerTextBox: {
        paddingTop: hp(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
});

export default SignUp;
