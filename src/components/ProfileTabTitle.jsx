import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {scaleFontSize} from '../../assets/styles/scaling';
const ProfileTabTitle = props => {
  return (
    <View>
      <Text
        style={[
          styles.title,
          {
            color: props.isFocused ? '#022150' : '#79869F',
            fontWeight: props.isFocused ? '500' : '400',
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

export default ProfileTabTitle;

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    letterSpacing: 0.32,
  },
});
