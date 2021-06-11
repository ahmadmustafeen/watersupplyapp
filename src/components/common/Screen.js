import React, {useState} from 'react';
import {RefreshControl} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const Screen = props => {
  const {noPadding, contentPadding} = props;

  const getComponent = key => {
    const {children} = props;
    return children.filter(view => view.key === key);
  };

  return (
    <>
      {getComponent('header').length ? (
        <View style={styles.header}>{getComponent('header')}</View>
      ) : null}
      <KeyboardAwareScrollView
        refreshControl={
          props.refresh && (
            <RefreshControl
              refreshing={false}
              // onRefresh={onRefresh}
            />
          )
        }
        style={
          {
            // backgroundColor: 'rgba(0,0,0,0.1)',
          }
        }
        // contentContainerStyle={[{ flexGrow: 1 },]}
        // resetScrollToCoords={{ x: 0, y: 0 }}
        automaticallyAdjustContentInsets={false}
        // keyboardDismissMode="on-drag"
        // keyboardVerticalOffset={-100}
        scrollsToTop={false}
        behavior={'padding'}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        bounces={!props.refresh ? false : true}>
        <View
          style={[
            styles.formContainer,
            {backgroundColor: props.backgroundColor},
            noPadding && {paddingHorizontal: 0, paddingBottom: 0},
          ]}>
          {getComponent('content').length ? (
            <View
              style={[
                styles.content,
                contentPadding && {paddingHorizontal: 20},
              ]}>
              {getComponent('content')}
            </View>
          ) : null}
        </View>
      </KeyboardAwareScrollView>
      {getComponent('footer').length ? (
        <View style={styles.footer}>{getComponent('footer')}</View>
      ) : null}
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 25,
    // flexGrow: 1
    // paddingBottom: 20,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    margin: wp('5%'),
    marginBottom: hp('0.75%'),
  },
  header: {
    // marginBottom: hp(4),
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: '#e8ecf8',
    // flexGrow: 1
  },
  footer: {
    marginTop: 0,
    backgroundColor: '#e8ecf8',
    paddingVertical: heightPercentageToDP(3),
  },
});

export {Screen};
