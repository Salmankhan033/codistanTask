import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../utils/Colors';
import * as Typography from '../utils/typography';

const DeviceDataCard = props => {
  return (
    <View style={[styles.container, props?.headerStyle]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {props.circle && (
          <View style={[styles.colorCircle, {backgroundColor: props.color}]} />
        )}
        <Text
          style={[
            styles.nameText,
            {
              marginLeft: props.circle ? wp('2%') : wp('0%'),
              color: props.header ? Colors.White : Colors.Black,
            },
          ]}>
          {props.deviceName}
        </Text>
      </View>
      <Text
        style={[
          styles.date,
          {color: props.header ? Colors.White : Colors.Black},
        ]}>
        {props.date}
      </Text>
      <Text
        style={[
          styles.time,
          {color: props.header ? Colors.White : Colors.Black},
        ]}>
        {props.time}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('80%'),
    alignSelf: 'center',
    backgroundColor: Colors.White,
    flexDirection: 'row',
    height: hp('4%'),
    justifyContent: 'space-between',
    paddingHorizontal: wp('1%'),
    alignItems: 'center',
  },
  colorCircle: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('1.5%'),
    marginLeft: wp('1.5%'),
  },
  nameText: {
    fontSize: Typography.FONT_SIZE_15,
    width: wp('35%'),
  },
  date: {
    fontSize: Typography.FONT_SIZE_15,
    width: wp('18%'),
  },
  time: {
    fontSize: Typography.FONT_SIZE_15,
    width: wp('18%'),
    paddingLeft: wp('1%'),
  },
});
export default DeviceDataCard;
