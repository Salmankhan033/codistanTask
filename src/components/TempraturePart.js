import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../utils/Colors';
import * as Typography from '../utils/typography';
import TempratureCard from './TempratureCard';

const TempraturePart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Devices</Text>
      <TempratureCard
        temperature="2.5°C"
        title="Pie Fridge"
        description="Amet minim mollit deserunt ullamco est sit amet"
        time="1 mint ago"
      />
      <TempratureCard
        temperature="1°C"
        title="Pie Waemer Right"
        description="Amet minim mollit deserunt ullamco est sit amet"
        time="2 mint ago"
      />
      <View style={styles.topDot}></View>
      <View style={styles.bottomDot}></View>
      <View style={styles.leftDot}></View>
      <View style={styles.rightDot}></View>
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
    shadowColor: Colors.Black,
    borderWidth: wp('1%'),
    padding: wp('2%'),
    marginVertical: hp('2%'),
    marginTop: hp('4%'),
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
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
    top: hp('22%'),
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
    top: hp('22%'),
    marginLeft: hp('-1.3%'),
  },
});
export default TempraturePart;
