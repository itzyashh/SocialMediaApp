import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from './src/components/UserStory';
import UserPost from './src/components/UserPost';

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
  const posts = [
    {
      id: 1,
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
    },
    {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
    },
    {
      id: 3,
      firstName: 'Alvaro',
      lastName: 'Jones',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Doe',
      location: 'Jakarta, Indonesia',
      likes: 500,
      comments: 12,
      bookmarks: 30,
    },
    {
      id: 5,
      firstName: 'Emily',
      lastName: 'Smith',
      location: 'Bandung, Jawa Barat',
      likes: 750,
      comments: 15,
      bookmarks: 42,
    },
    {
      id: 6,
      firstName: 'Michael',
      lastName: 'Johnson',
      location: 'Bekasi, Jawa Barat',
      likes: 900,
      comments: 18,
      bookmarks: 25,
    },
    {
      id: 7,
      firstName: 'Sophia',
      lastName: 'Taylor',
      location: 'Depok, Jawa Barat',
      likes: 1100,
      comments: 20,
      bookmarks: 38,
    },
  ];

  const pageSize = 4;
  const pageSizePost = 2;
  const [pageNumber, setPageNumber] = React.useState(1);
  const [pageNumberPost, setPageNumberPost] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [loadingPost, setLoadingPost] = React.useState(false);
  const [renderedData, setRenderedData] = React.useState(
    data.slice(0, pageSize),
  );
  const [renderedPost, setRenderedPost] = React.useState(
    posts.slice(0, pageSizePost),
  );
  const pagination = (data, pageNumber, pageSiz, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex);
    if (startIndex >= data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPageNumberPost(pageNumber);
    }
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
        <View style={styles.userPostContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!loadingPost) {
                setLoadingPost(true);
                setRenderedPost(prev => [
                  ...prev,
                  ...pagination(posts, pageNumberPost + 1, pageSizePost, true),
                ]);
                setLoadingPost(false);
              }
            }}
            showsVerticalScrollIndicator={false}
            data={renderedPost}
            renderItem={({item}) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            )}
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
  userPostContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
    borderWidth: 1,
    height: '100%',
  },
});

export default App;
