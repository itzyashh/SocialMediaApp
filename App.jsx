import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from './src/components/UserStory';

const App = () => {
  const data = [
    {
      id: 1,
      firstName: 'John',
    },
    {
      id: 2,
      firstName: 'Karl',
    },
    {
      id: 3,
      firstName: 'Jenny',
    },
    {
      id: 4,
      firstName: 'Vicky',
    },
    {
      id: 5,
      firstName: 'Jessica',
    },
    {
      id: 6,
      firstName: 'James',
    },
    {
      id: 7,
      firstName: 'Sunio',
    },
    {
      id: 8,
      firstName: 'Shizuka',
    },
  ];
  let pageSize = 4;
  const [loading, setLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [renderedData, setRenderedData] = React.useState(
    data.slice(0, pageSize),
  );
  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex);
    if (startIndex >= data.length) {
      return [];
    }
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Title title="Let's Explore" />
          <Pressable style={styles.iconContainer}>
            <View style={styles.notiBubble}>
              <Text style={styles.notiInput}>2</Text>
            </View>
            <FontAwesomeIcon size={20} icon={faEnvelope} />
          </Pressable>
        </View>

        <View style={styles.userStoryContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!loading) {
                setLoading(true);
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setLoading(false);
              }
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={renderedData}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
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
  iconContainer: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: '##F9FAFB',
  },
  notiBubble: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#F35BAC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 5,
  },
  notiInput: {
    fontSize: 6,
    fontFamily: 'Inter',
    fontWeight: '600',
    letterSpacing: 0.12,
    color: '#FFF',
  },
  userStoryContainer: {
    paddingLeft: 28,
    marginTop: 12,
    paddingRight: 27,
  },
});

export default App;
