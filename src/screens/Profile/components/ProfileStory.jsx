import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProfileStory = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.stories}>
      <TouchableOpacity style={styles.story} activeOpacity={0.7}>
        <View style={styles.content}>
          <Image
            source={require('../../../../assets/story1.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.story} activeOpacity={0.7}>
        <View style={styles.content}>
          <Image
            source={require('../../../../assets/story2.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.story} activeOpacity={0.7}>
        <View style={styles.content}>
          <Image
            source={require('../../../../assets/story3.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.story} activeOpacity={0.7}>
        <View style={styles.content}>
          <Image
            source={require('../../../../assets/story4.png')}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 4</Text>
      </TouchableOpacity>

      <View style={styles.story}>
        <View style={styles.newStoryContent}>
          <TouchableOpacity style={styles.newStory} activeOpacity={0.7}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>New</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {paddingHorizontal: 15},
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  content: {
    borderColor: '#dcdcdc',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000',
    marginTop: 3,
  },
  newStoryContent: {
    borderColor: '#dcdcdc',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newStory: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 50,
    fontWeight: '200',
    color: '#000',
  },
});
