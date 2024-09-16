import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Stories from './components/Stories';
import Post from '../../components/posts/post';
import posts from '../../data/posts';

export default function Home() {
  const renderPost = ({item}) => <Post post={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPost}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  listContent: {
    paddingBottom: 20,
  },
});
