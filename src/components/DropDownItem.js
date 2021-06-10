import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppText } from './common';

const DropDownItem = props => {
  const { name, number, address, city, onApprove, type, done_rejected } = props;
  // console.log(type)
  const [visible, setvisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.dropdownContainer,
          visible && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}
        onPress={() => setvisible(!visible)}>
        <Text>{name}</Text>
      </TouchableOpacity>
      <View style={[styles.dropdownBox, visible && { display: 'flex' }]}>
        <Text>{number}</Text>
        <Text>{address}</Text>
        <Text>{city}</Text>
        <View style={styles.buttonContainer}>

          {(type == 4 || ((done_rejected === 'Rejected' || done_rejected === null))) && <TouchableOpacity
            style={[styles.submitBtn, { backgroundColor: 'rgb(255,50,50)' }]}>
            <AppText size="14">{(type == 4 || done_rejected === null) ? "Reject" : "Rejected"}</AppText>
          </TouchableOpacity>}
          {(type == 4 || ((done_rejected === 'Done' || done_rejected === null))) && <TouchableOpacity
            style={[styles.submitBtn, { backgroundColor: 'rgb(10,200,100)' }]}
            onPress={(type != 4 || done_rejected !== null) ? onApprove : null}>
            <AppText size="14">{(type == 4 || done_rejected === null) ? "Approve" : "Approved"}</AppText>
          </TouchableOpacity>}
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: '#51d1c2',
    justifyContent: 'center',
    paddingHorizontal: wp(10),
    borderRadius: 20,
    // bordertRadius: 20,
    height: hp(10),
    marginTop: hp(1),
  },
  dropdownBox: {
    display: 'none',
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    // height: 100,
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
    height: hp(10),
  },
});
export default DropDownItem;
