import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const UserPost = props => {
  return (
    <View>
      <Image source={require('../../assets/images/default_profile.png')} />
      <Text>{props.firstName}</Text>
      <Text>{props.lastName}</Text>
      <Text>{props.location}</Text>
      <Image source={require('../../assets/images/default_post.png')} />
      <Text>{props.likes}</Text>
      <Text>{props.comments}</Text>
      <Text>{props.bookmarks}</Text>
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
export default UserPost;
