import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

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
    margin: 12,
  },
  userImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: 50,
  },
  name: {
    color: '#022150',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    letterSpacing: 0.14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default UserStory;
