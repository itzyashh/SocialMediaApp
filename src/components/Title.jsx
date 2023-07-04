import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {scaleFontSize} from '../../assets/styles/scaling';

const Title = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    color: '#022150',
    fontFamily: 'Inter',
    letterSpacing: 0.48,
    fontWeight: '600',
  },
});
