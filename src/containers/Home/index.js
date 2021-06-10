import React, { useEffect, useState } from 'react';
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
import { FETCH_PERFORMED_TOPIC, SIGN_IN } from '../../redux/actionTypes'
import { checkIfLoading } from '../../redux/selectors';
import Loader from '../../components/Loader';
const Home = props => {
  const { navigation, route } = props;
  const id = route.params ? (route.params.id ? route.params.id : 4) : 4
  console.log(id)

  const dispatch = useDispatch()

  useEffect(() => {
    if (id != 4) {
      dispatch({ type: FETCH_PERFORMED_TOPIC, payload: { id: id } })
    }
    else {
      dispatch({ type: SIGN_IN, payload: { user_id: userProfileReducer?.username } })
    }

  }, [id])
  // dispatch({ type: FETCH_APPROVED_TOPIC, payload: { id: id } })
  // dispatch({ type: FETCH_ALL_TOPIC, payload: { id: id } })

  const { topicReducer, userProfileReducer, Performedtopic, isLoading } = useSelector(state => (
    {
      topicReducer: state.topicReducer,
      userProfileReducer: state.userProfileReducer,
      Performedtopic: state.Performedtopic,
      isLoading: checkIfLoading(
        state,
        FETCH_PERFORMED_TOPIC,
        SIGN_IN,
      )
    }
  ), shallowEqual);




  // Alert.alert(id.toString())


  return (
    <Screen noPadding>
      <View key="header">
        <DashboardHeader
          title={id === 3 ? "All Task" : id === 1 ? "Approved Task" : id === 2 ? "Rejected Task" : "Foopanda Alt"}

          {...props}
        />
      </View>
      <View key="content">
        <Loader loading={isLoading} />
        {id === 4 ? topicReducer.map(topic => {

          return (
            <DropDownItem
              type={id}
              onApprove={() => navigation.navigate(IMAGE_PICKER_SCREEN, { id: topic.id })}
              // onApprove={() => Alert.alert(topic.id.toString())}
              name={topic.name}
              number={topic.number}
              address={topic.address}
              city={topic.city}
            />
          );
        }) :
          // console.log(Performedtopic)
          Performedtopic.map(topic => {
            return (
              <DropDownItem
                type={id}
                onApprove={() => navigation.navigate(IMAGE_PICKER_SCREEN, { id: topic.id })}
                name={topic.name}
                number={topic.number}
                address={topic.address}
                city={topic.city}
                done_rejected={topic.done_rejected}
              />
            );
          })


        }

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
