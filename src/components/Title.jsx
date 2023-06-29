import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

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
    fontSize: 24,
    color: '#022150',
    fontFamily: 'Inter',
    letterSpacing: 0.48,
    fontWeight: '600',
  },
});
