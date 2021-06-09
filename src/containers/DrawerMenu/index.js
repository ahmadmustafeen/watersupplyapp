import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {AppText} from '../../components/common';
import DrawerItem from '../../components/DrawerItem';
import {SIGNIN_SCREEN} from '../../constants/Screens';
import {SIGN_IN, SIGN_OUT} from '../../redux/actionTypes';

const DrawerMenu = props => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.headerText}>
          <AppText heading>Title</AppText>
          <AppText>View and Edit your Profile</AppText>
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
        <DrawerItem title="Home" />
      </View>
      <View style={styles.row} />

      <View style={styles.drawerItemContainer}>
        <DrawerItem
          title="Sign Out"
          onPress={() => dispatch({type: SIGN_OUT})}
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
