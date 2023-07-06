import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/main';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const ProfileTabComponent = () => {
  return (
    <ScrollView
      style={styles.ProfileTabPostContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.ImageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={[styles.ImageContainer, styles.UpcomingRowContainer]}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View
        style={[
          styles.ImageContainer,
          styles.UpcomingRowContainer,
          styles.bottomImageContainer,
        ]}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabComponent;

const styles = StyleSheet.create({
  ProfileTabPostContainer: {
    backgroundColor: '#fff',
    paddingTop: verticalScale(10),
    flex: 1,
  },
  ImageContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    justifyContent: 'space-between',
  },
  image: {
    maxHeight: verticalScale(90),
    maxWidth: horizontalScale(150),
  },
  UpcomingRowContainer: {
    marginTop: verticalScale(10),
  },
  bottomImageContainer: {
    paddingBottom: verticalScale(50),
  },
});
