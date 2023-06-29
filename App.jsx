import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Title title="Let's Explore" />
          <FontAwesomeIcon size={20} icon={faEnvelope} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 26,
    paddingRight: 17,
  },
});

export default App;
