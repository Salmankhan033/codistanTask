import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../utils/Colors';
import * as Typography from '../utils/typography';
import DeviceDataCard from './DeviceDataCard';

const AlarmLogs = () => {
  const listData = [
    {
      deviceName: 'Ben & Jerrys',
      date: '01/01/21',
      time: '8:21 am',
      circle: true,
      color: Colors.Dark_Blue,
    },
    {
      deviceName: 'Coffee Right',
      date: '01/01/21',
      time: '8:21 am',
      circle: true,
      color: Colors.Black,
    },
    {
      deviceName: 'Ben & Jerrys',
      date: '01/01/21',
      time: '8:21 am',
      circle: true,
      color: Colors.Gold,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alarm Logs</Text>
      <DeviceDataCard
        deviceName={'Device Name'}
        date={'Date'}
        time={'Time'}
        circle={true}
        header={true}
        headerStyle={{
          backgroundColor: 'black',
          borderTopRightRadius: 6,
          borderTopLeftRadius: 6,
        }}
      />

      <FlatList
        // scrollEnabled={false}
        data={listData}
        renderItem={_item => (
          <DeviceDataCard
            deviceName={_item.item.deviceName}
            date={_item.item.date}
            time={_item.item.time}
            circle={_item.item.circle}
            color={_item.item.color}
          />
        )}
        key={index => index}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.flatListStyle}
      />
      <TouchableOpacity>
        <Text style={styles.viewAllTxt}>View All</Text>
      </TouchableOpacity>
      <View style={styles.topDot} />
      <View style={styles.bottomDot} />
      <View style={styles.leftDot} />
      <View style={styles.rightDot} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: wp('92%'),
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: wp('2%'),
    borderWidth: wp('1%'),
    padding: wp('2%'),
    marginVertical: hp('2%'),
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
  },
  flatListStyle: {
    paddingBottom: 5,
    width: wp('80%'),
    alignSelf: 'center',

    shadowColor: Colors.Black,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewAllTxt: {
    color: Colors.Red,
    alignSelf: 'center',
    paddingVertical: hp('1%'),
  },
  topDot: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: Colors.Black,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp('-1.3%'),
  },
  bottomDot: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: Colors.Black,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: hp('-1.3%'),
  },
  rightDot: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: Colors.Black,
    position: 'absolute',
    right: 0,
    top: hp('14%'),
    marginRight: hp('-1.3%'),
  },
  leftDot: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: Colors.Black,
    position: 'absolute',
    alignSelf: 'center',
    left: 0,
    top: hp('14%'),
    marginLeft: hp('-1.3%'),
  },
});

export default AlarmLogs;
