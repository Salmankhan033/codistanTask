import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../utils/Colors';
import * as Typography from '../utils/typography';

const TempratureCard = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.percentageTxt}>56%</Text>

      <View style={styles.midConatiner}>
        <View style={styles.tempView}>
          <Text style={styles.tempText}>{props.temperature}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.titleTxt}>{props.title}</Text>
          <Text style={styles.bodayTxt} numberOfLines={2}>
            {props.description}
          </Text>
          <Text style={styles.bottomTxt}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('85%'),
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: wp('2%'),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: hp('2%'),
  },
  percentageTxt: {
    alignSelf: 'flex-end',
    paddingHorizontal: wp('2%'),
    paddingTop: hp('0.5%'),
    color: Colors.Green,
  },
  midConatiner: {
    width: wp('80%'),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  tempView: {
    backgroundColor: Colors.Pink,
    width: wp('30%'),
    height: hp('14%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    borderRadius: wp('2%'),
    marginBottom: hp('2%'),
  },
  tempText: {
    fontSize: Typography.FONT_SIZE_28,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.Red,
  },
  rightContainer: {
    marginVertical: hp('1%'),
    marginRight: wp('2%'),
  },
  titleTxt: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.Black,
  },
  bodayTxt: {
    fontSize: Typography.FONT_SIZE_13,

    marginVertical: hp('0.3%'),
    width: wp('48.5%'),
  },
  bottomTxt: {
    fontSize: Typography.FONT_SIZE_16,
    marginTop: hp('1.5%'),
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
});

export default TempratureCard;
