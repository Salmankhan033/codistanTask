import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {LineChart} from 'react-native-chart-kit';
import * as Colors from '../utils/Colors';
import * as Typography from '../utils/typography';

const GaphCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graph}>
        <Text style={styles.text}>Pie Warmer Right</Text>
        <ScrollView horizontal={true} contentOffset={{x: 10000, y: 0}}>
          <LineChart
            data={{
              labels: ['00.00', '03.00', '06.00', '09.00', '12.00', '15.00'],
              datasets: [
                {
                  data: [-40, -10, 0, 40, 60, 100],
                },
              ],
            }}
            width={wp('120%')}
            height={hp('25%')}
            // yAxisLabel="$"

            yAxisSuffix="°C"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: Colors.White,
              backgroundGradientTo: Colors.White,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(225, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            // fromZero={false}
            withInnerLines={false}
            withOuterLines={false}
            style={styles.graphInner}
          />
        </ScrollView>
      </View>
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
    borderWidth: wp('1%'),
    padding: wp('5%'),
    marginVertical: hp('2%'),
  },

  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  graph: {
    backgroundColor: Colors.White,
    padding: wp('3%'),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  graphInner: {
    marginVertical: 8,
    backgroundColor: Colors.White,
    padding: wp('3%'),
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
    top: hp('20%'),
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
    top: hp('20%'),
    marginLeft: hp('-1.3%'),
  },
});
export default GaphCard;
