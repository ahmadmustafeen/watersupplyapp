import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppText } from './common';

const DropDownItem = props => {
  const {
    num,
    name,
    number,
    address,
    city,
    onApprove,
    type,
    done_rejected,
    onReject,
  } = props;
  // console.log(type)
  const [visible, setvisible] = useState(false);
  return (
    <View key={num}>
      <TouchableOpacity
        style={[
          styles.dropdownContainer,
          visible && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}
        onPress={() => setvisible(!visible)}>
        <View style={styles.headContainer}>
          <View style={{ width: wp(15) }}>
            <Text style={{ fontWeight: 'bold', color: '#303b51' }}>#{num}</Text>
          </View>
          <View style={{ width: wp(60) }}>
            <Text style={{ color: '#303b51' }}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.dropdownBox, visible && { display: 'flex' }]}>
        <Text>Phone #: {number}</Text>
        <Text>Location: {address}</Text>
        <Text>City: {city}</Text>
        <View style={styles.buttonContainer}>
          {(type == 4 ||
            done_rejected === 'Rejected' ||
            done_rejected === null) && (
              <TouchableOpacity
                style={[styles.submitBtnReject]}
                onPress={type == 4 || done_rejected === null ? onReject : null}>
                <AppText size="14">
                  {type == 4 || done_rejected === null ? 'Reject' : 'Rejected'}
                </AppText>
              </TouchableOpacity>
            )}
          {(type == 4 ||
            done_rejected === 'Done' ||
            done_rejected === null) && (
              <TouchableOpacity
                style={[styles.submitBtnApprove]}
                onPress={type === 4 || done_rejected === null ? onApprove : null}>
                <AppText size="14">
                  {type == 4 || done_rejected === null ? 'Approve' : 'Approved'}
                </AppText>
              </TouchableOpacity>
            )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: wp(10),
    borderRadius: 5,
    height: hp(10),
    marginTop: hp(1),
  },
  dropdownBox: {
    display: 'none',
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: '#e6eafb',
    // height: 100,
    padding: 20,
    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitBtnReject: {
    margin: 5,
    width: wp(25),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  submitBtnApprove: {
    margin: 5,
    width: wp(25),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: wp(80),
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    height: hp(10),
  },
});
export default DropDownItem;
