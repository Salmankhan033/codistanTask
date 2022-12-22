import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/menu.png')}
          style={styles.manuImage}
        />
      </View>
      <View style={styles.rightContainer}>
        <Image source={require('../assets/search.png')} style={styles.image} />
        <Image source={require('../assets/bell.png')} style={styles.image} />
        <Image source={require('../assets/profile.png')} style={styles.image} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  manuImage: {
    width: wp('8%'),
    height: wp('8%'),
  },
  image: {
    width: wp('6%'),
    height: wp('6%'),
  },
  rightContainer: {
    flexDirection: 'row',
    width: wp('25%'),
    justifyContent: 'space-between',
  },
});

export default Header;
