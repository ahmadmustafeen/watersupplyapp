import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Screen, Button} from '../../components/common';
import Loader from '../../components/Loader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {SIGN_IN} from '../../redux/actionTypes';
import {checkIfLoading} from '../../redux/selectors';
import {useState} from 'react';

const SignIn = props => {
  const [state, setState] = useState({
    user_id: '',
  });
  const {isLoading} = useSelector(state => {
    return {
      isLoading: checkIfLoading(state, SIGN_IN),
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  // const { isLoading } = useSelector((state) => ({
  //   isLoading: checkIfLoading(state, SIGN_IN),
  // }));

  return (
    <Screen>
      <View key="header"></View>

      <View key="content" style={styles.container}>
        <Loader loading={isLoading} />
        <Text style={styles.text_login}>Log in</Text>
        <View style={styles.textBox}>
          <TextInput
            style={styles.textBox_input}
            placeholder="Your Email"
            onChangeText={e => setState({...state, user_id: e})}
            value={state.user_id}></TextInput>
          {/* <TextInput
            style={styles.textBox_input}
            placeholder="Password"></TextInput> */}
        </View>
        <View style={{alignSelf: 'center'}}>
          <Button
            style={styles.butLogin}
            onPress={() => dispatch({type: SIGN_IN, payload: state})}>
            <Text style={styles.butLoginText}> Login </Text>
          </Button>
        </View>

        {/* <Loader loading={isLoading} /> */}
      </View>

      {/* <View key="footer" style={styles.footerLogin}>
        <View style={styles.footerTextBox}>
          <Text style={styles.footerText1}>Dont have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerText2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    paddingTop: hp(10),
  },
  text_login: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textBox: {
    paddingTop: hp(8),
  },
  textBox_input: {
    borderStyle: 'solid',
    borderRadius: 25,
    marginVertical: hp(1),
    paddingLeft: wp(5),
    borderWidth: 1,
  },
  butLogin: {
    height: hp(7),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(40),

    borderRadius: 25,
    marginVertical: hp(2),
    backgroundColor: 'black',
  },
  butLoginText: {
    textAlign: 'center',
    color: 'white',
    margin: 'auto',
    fontSize: 20,
  },
  footerTextBox: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLogin: {
    backgroundColor: 'lightblue',
    marginTop: hp(25),
    height: hp(15),
  },
  footerText1: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  footerText2: {
    textAlign: 'center',
    flexDirection: 'row-reverse',
  },
});

export default SignIn;
