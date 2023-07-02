import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faCommentDots,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

const UserPost = props => {
  return (
    <View style={styles.container}>
      <View style={styles.userInformation}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode={'cover'}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
            }}>
            <Text style={styles.name}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={styles.location}>{props.location}</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <Text style={styles.threeDots}>...</Text>
        </View>
      </View>
      <View style={styles.postImageContainer}>
        <Image
          resizeMode="stretch"
          style={{width: 380, height: 220}}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={styles.userPostStats}>
        <View style={styles.stat}>
          <FontAwesomeIcon color="#79869F" icon={faHeart} />
          <Text style={styles.statText}>{props.likes}</Text>
        </View>
        <View style={styles.stat}>
          <FontAwesomeIcon color="#79869F" icon={faCommentDots} />
          <Text style={styles.statText}>{props.comments}</Text>
        </View>
        <View style={styles.stat}>
          <FontAwesomeIcon color="#79869F" icon={faBookmark} />
          <Text style={styles.statText}>{props.bookmarks}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '##EFF2F6',
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  imageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: 50,
    padding: 3,
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    letterSpacing: 0.16,
    lineHeight: 19,
    marginBottom: 5,
  },
  location: {
    color: '#79869F',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 0.12,
  },
  iconContainer: {alignSelf: 'center'},
  threeDots: {
    color: '#79869F',
    fontSize: 32,
    letterSpacing: 0.32,
    paddingBottom: 15,
    fontWeight: '600',
  },
  postImageContainer: {
    marginVertical: 16,
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
    paddingLeft: 5,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
    gap: 3,
  },
  statText: {
    color: '#79869F',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 0.28,
  },
});

export default UserPost;
