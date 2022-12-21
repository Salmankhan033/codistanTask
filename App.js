import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {LogBox} from 'react-native';
import * as Typography from './src/utils/typography';
import Header from './src/components/Header';
import GaphCard from './src/components/GaphCard';
import TempraturePart from './src/components/TempraturePart';
import AlarmLogs from './src/components/AlarmLogs';
import Probe from './src/components/Probe';
const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <Text style={styles.headerText}>Welcome, Metford</Text>
          <Text style={styles.bodyText}>
            Here's what's happening in your Cake account
          </Text>
          <TempraturePart />
          <GaphCard />
          <AlarmLogs />
          <Probe />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
  headerText: {
    fontSize: Typography.FONT_SIZE_24,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    paddingLeft: wp('2%'),
    paddingTop: hp('2%'),
  },
  bodyText: {
    paddingLeft: wp('2%'),
    paddingTop: hp('0.6%'),
  },
  scrollViewStyle: {paddingBottom: hp('10%')},
});

export default App;
