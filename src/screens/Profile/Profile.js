import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import UserData from './components/UserData';
import Header from './components/Header';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import Tabs from './components/Tabs';
import profileStories from '../../data/profileStories';
import {Carousel} from '../../Icons';

const Profile = () => {
  const screenWidth = Dimensions.get('window').width;
  const numCol = 3;
  const imageSize = (screenWidth - (numCol + 1) * 2) / numCol;

  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.9}>
      <Image
        source={item.required}
        style={{
          width: imageSize,
          height: imageSize,
          margin: 1,
          borderRadius: 4,
        }}
      />
      {item.carosel && (
        <View style={styles.carosel}>
          <Carousel />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Header />
      <UserData />
      <ProfileBio />
      <ProfileStory />
      <Tabs />
      <FlatList
        numColumns={numCol}
        keyExtractor={item => item.id.toString()}
        data={profileStories}
        contentContainerStyle={styles.photoGrid}
        renderItem={renderProps}
      />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  photoGrid: {paddingHorizontal: 5},
  carosel: {position: 'absolute', top: 8, right: 8, zIndex: 22},
});
