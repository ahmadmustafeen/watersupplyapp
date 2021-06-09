import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Screen, AppText, RadioButton} from '../../components/common';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    details: '',
    message: '',
    phone: '',
    business_type: '',
    product_type: new Set(),
  });

  const setStateHandler = (key, val) => {
    setState({...state, [key]: val});
  };

  const submitHandler = () => {
    Alert.alert('Submitted');
    setState({
      name: '',
      email: '',
      details: '',
      message: '',
      phone: '',
      business_type: '',
      product_type: new Set(),
    });
  };

  return (
    <Screen>
      <View key="header">
        <AppText Heading color="blue" center style={styles.header}>
          Form header
        </AppText>
      </View>

      <View key="content">
        <View style={styles.formBox}>
          <TextInput
            style={styles.formTextInput}
            placeholder="name"
            onChangeText={val => setStateHandler('name', val)}
            value={state.name}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="email"
            onChangeText={val => setStateHandler('email', val)}
            value={state.email}
          />
          <View style={styles.radioGroup}>
            <RadioButton selected={true} title="Radio 1"></RadioButton>
            <RadioButton selected={false} title="Radio 2"></RadioButton>
          </View>
          <View style={styles.textAreaContainer}>
            <AppText Header>Text Area Header</AppText>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Message"
              placeholderTextColor="grey"
              numberOfLines={10}
              onChangeText={val => setStateHandler('message', val)}
              multiline={true}
              value={state.message}
            />
          </View>
          <TouchableOpacity style={styles.butSubmit} onPress={submitHandler}>
            <Text style={styles.butSubmitText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {},
  formBox: {},
  formTextInput: {
    borderStyle: 'solid',
    borderRadius: 25,
    marginVertical: hp(1),
    paddingLeft: wp(5),
    borderWidth: 1,
  },
  butSubmit: {
    height: hp(7),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 25,
    marginVertical: hp(2),
    backgroundColor: '#51d1c2',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textAreaContainer: {},
  textArea: {
    justifyContent: 'flex-start',
    marginVertical: hp(1.0),
    height: hp(15),
    paddingLeft: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    fontSize: 20,
  },
});

export default Form;
