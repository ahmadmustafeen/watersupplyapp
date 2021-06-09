import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {shallowEqual, useSelector} from 'react-redux';
import {AppText, Screen} from '../../components/common';
import DashboardHeader from '../../components/DashboardHeader';
import DropDownItem from '../../components/DropDownItem';

const Home = props => {
  const [dropDownItems, setDropDownItems] = useState([
    {
      id: '',
      title: '',
      description: '',
    },
  ]);

  const {topicReducer} = useSelector(state => {
    return {
      topicReducer: state.topicReducer,
    };
  }, shallowEqual);
  console.log('topic Reducer', topicReducer);
  return (
    <Screen noPadding>
      <View key="header">
        <DashboardHeader title="ahmad" subTitle="mustafeen" />
      </View>
      <View key="content">
        {topicReducer.map(topic => {
          return (
            <DropDownItem
              key={topic.id}
              title={topic.title}
              description={topic.description}
            />
          );
        })}
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
