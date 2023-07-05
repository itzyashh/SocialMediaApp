import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import Title from '../../components/Title';
import UserPost from '../../components/UserPost';
import UserStory from '../../components/UserStory';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/scaling';
import globalStyles from '../../../assets/styles/main';
import Routes from '../../../navigation/Routes';

const Home = ({navigation}) => {
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
  const pagination = (data, pageNumber, pageSize, posts = false) => {
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
    <SafeAreaView style={globalStyles.backgroundWhite}>
      <FlatList
        ListHeaderComponent={
          <>
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
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
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
          <View style={styles.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingLeft: horizontalScale(26),
    paddingRight: horizontalScale(17),
  },
  iconContainer: {
    padding: 12,
    borderRadius: horizontalScale(100),
    backgroundColor: '##F9FAFB',
  },
  notiBubble: {
    width: horizontalScale(10),
    height: horizontalScale(10),
    zIndex: 1,
    borderRadius: horizontalScale(10),
    backgroundColor: '#F35BAC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 5,
  },
  notiInput: {
    fontSize: scaleFontSize(6),
    fontFamily: 'Inter',
    fontWeight: '600',
    color: '#FFF',
  },
  userStoryContainer: {
    paddingLeft: horizontalScale(14),
    marginTop: verticalScale(12),
    paddingRight: 27,
  },
  userPostContainer: {
    marginTop: verticalScale(30),
    paddingHorizontal: horizontalScale(22),
  },
});
