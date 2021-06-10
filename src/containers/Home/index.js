import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppText, Screen } from '../../components/common';
import DashboardHeader from '../../components/DashboardHeader';
import DropDownItem from '../../components/DropDownItem';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IMAGE_PICKER_SCREEN } from '../../constants/Screens';
import { FETCH_APPROVED_TOPIC, FETCH_REJECTED_TOPIC, FETCH_ALL_TOPIC } from '../../redux/actionTypes'
const Home = props => {
  const { navigation, route } = props;
  const id = route.params ? (route.params.id ? route.params.id : 4) : 4
  console.log(id)

  const dispatch = useDispatch()

  // dispatch({ type: FETCH_REJECTED_TOPIC, payload: { id: id } })
  // dispatch({ type: FETCH_APPROVED_TOPIC, payload: { id: id } })
  // dispatch({ type: FETCH_ALL_TOPIC, payload: { id: id } })

  const { topicReducer } = useSelector(state => (
    {
      topicReducer: state.topicReducer,
    }
  ), shallowEqual);




  Alert.alert(id.toString())


  return (
    <Screen noPadding>
      <View key="header">
        <DashboardHeader
          title="ahmad"
          subTitle="mustafeen"
          {...props}
        />
      </View>
      <View key="content">
        {topicReducer.map(topic => {
          return (
            <DropDownItem
              type={id}
              onApprove={() => navigation.navigate(IMAGE_PICKER_SCREEN, { id: topic.id })}
              name={topic.name}
              number={topic.number}
              address={topic.address}
              city={topic.city}
            />
          );
        })}

        {/* name number city address */}
        {/* <DropDownItem
          title="First"
          description="Here is the info about first"
        />
        <DropDownItem
          title="Second"
          description="Here is the info about second"
        />*/}
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  dropdownContainer: {
    width: wp(100),
    backgroundColor: 'blue',
    height: 100,
  },
  dropdownBox: {
    display: 'none',
    width: wp(100),
    backgroundColor: 'grey',
    height: 100,
  },
});
export default Home;
