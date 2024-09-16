import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import stories from '../../../data/stories';
import Story from './Story';

export default function Stories() {
  return (
    <View style={styles.stories}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {stories.map(story => (
          <Story story={story} key={story.id} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  stories: {paddingVertical: 10},
});
