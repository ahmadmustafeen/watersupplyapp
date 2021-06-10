import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppText } from '../../components/common';
import DrawerItem from '../../components/DrawerItem';
import { FORM_SCREEN, HOME, HOME_SCREEN, IMAGE_PICKER_SCREEN, SIGNIN_SCREEN } from '../../constants/Screens';
import { SIGN_IN, SIGN_OUT } from '../../redux/actionTypes';

const DrawerMenu = (props) => {
  const { UserProfileReducer } = useSelector(state => (
    {

      UserProfileReducer: state.UserProfileReducer,
    }
  ), shallowEqual);

  console.log("userProfileReducer", UserProfileReducer)





  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.headerText}>
          <AppText heading>{(UserProfileReducer?.name)?.toString()}</AppText>
          <AppText>{(UserProfileReducer?.username)?.toString()}</AppText>
        </View>
        <View style={styles.headerImage}>
          <Image source={require('../../assets/images/noUser.png')} />
        </View>
      </View>
      <View style={styles.row} />
      <View style={styles.drawerItemContainer}>
        <DrawerItem title="Home" />
      </View>
      <View style={styles.row} />
      <View style={styles.drawerItemContainer}>
        <DrawerItem title="All Items"
          onPress={() => {
            props.navigation.navigate(HOME_SCREEN, { id: 3 })
          }}
        />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerItem title="Approved Items"
          onPress={() => {
            props.navigation.navigate(HOME_SCREEN, { id: 1 })
          }}
        />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerItem title="Rejected Items"
          onPress={() => {
            props.navigation.navigate(HOME_SCREEN, { id: 2 })
          }}
        />
      </View>
      <View style={styles.row} />

      <View style={styles.drawerItemContainer}>
        <DrawerItem
          title="Sign Out"
          onPress={() => dispatch({ type: SIGN_OUT })}
        // onPress={() => { props.navigation.navigate(FORM_SCREEN) }}
        />
      </View>

      <View style={styles.row} />
      <View style={styles.drawerFooter}>
        <AppText bold size="14">
          Powered by
        </AppText>
        <AppText bold size="18">
          Attribe Solution
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(100),
    backgroundColor: 'white',
  },
  containerHeader: {
    height: hp(30),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: wp(25),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    // backgroundColor: 'green',
    paddingLeft: wp(5),
    width: wp(55),
    height: hp(10),
  },
  drawerItemContainer: {
    width: wp(75),
    paddingHorizontal: wp(5),
    height: hp(8),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  drawerFooter: {
    position: 'absolute',
    bottom: hp(10),
    width: '100%',
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  row: {
    // borderColor: 'red',
    borderColor: 'transparent',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
export default DrawerMenu;
