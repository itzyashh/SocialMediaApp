import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <View style={styles.userImageContainer}>
        <Image
          source={require('../../assets/images/default_profile.png')}
          style={styles.userImage}
        />
      </View>
      <Text style={styles.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  storyContainer: {
    margin: horizontalScale(12),
  },
  userImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: horizontalScale(3),
    borderRadius: horizontalScale(50),
  },
  name: {
    color: '#022150',
    fontSize: scaleFontSize(14),
    fontFamily: 'Inter',
    fontWeight: '500',
    letterSpacing: 0.14,
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default UserStory;
