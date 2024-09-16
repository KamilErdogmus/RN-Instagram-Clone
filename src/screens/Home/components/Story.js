import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({story}) => {
  return (
    <View style={styles.story}>
      <LinearGradient style={styles.cover} colors={['#de0046', '#f7a34b']}>
        <Image
          source={{uri: story.user.avatar}}
          style={styles.avatar}
          resizeMode="cover"
        />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.username}>
        {story.user.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {width: 60, height: 60, borderRadius: 30},
  cover: {
    width: 65,
    height: 65,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  story: {width: 67, marginHorizontal: 8, alignItems: 'center'},
  username: {fontSize: 12, color: '#000', textAlign: 'center'},
});

export default Story;
