import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import globalStyles from '../../../assets/styles/main';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/scaling';
import {ProfileTabNavigation} from '../../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <View style={styles.imageRing}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>Emmanuel Macron</Text>
        </View>
        <View style={styles.profileStats}>
          <View style={styles.individualStat}>
            <Text style={styles.values}>45</Text>
            <Text style={styles.statTitle}>Following</Text>
          </View>
          <View style={styles.statSeparator} />
          <View style={styles.individualStat}>
            <Text style={styles.values}>30M</Text>
            <Text style={styles.statTitle}>Followers</Text>
          </View>
          <View style={styles.statSeparator} />
          <View style={styles.individualStat}>
            <Text style={styles.values}>100</Text>
            <Text style={styles.statTitle}>Posts</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={{height: '100%', marginTop: verticalScale(14)}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  imageRing: {
    borderWidth: 1,
    padding: horizontalScale(2.5),
    borderRadius: horizontalScale(120),
    borderColor: '#0150EC',
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  usernameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: horizontalScale(20),
  },
  username: {
    color: '#022150',
    fontSize: scaleFontSize(20),
    fontFamily: 'Inter',
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  profileStats: {
    paddingHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(16),
    alignItems: 'center',
  },
  individualStat: {
    paddingHorizontal: horizontalScale(18),
  },
  values: {
    color: '#022150',
    fontSize: scaleFontSize(20),
    fontFamily: 'Inter',
    fontWeight: '600',
    letterSpacing: 0.4,
    paddingTop: verticalScale(15),
    textAlign: 'center',
    marginBottom: verticalScale(6),
  },
  statTitle: {
    color: '#79869F',
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 0.32,
    paddingBottom: verticalScale(15),
  },
  statSeparator: {
    height: verticalScale(30),
    borderRightWidth: 1,
    borderRightColor: '#E9EFF1',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(16),
  },
});
