import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProfileBio = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.name}>Username</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
        architecto aut rerum maxime delectus totam! Labore assumenda natus quam
        iste a corrupti fugiat quae ipsum, sint repellat. Eius, adipisci ut!
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.edit}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  main: {paddingHorizontal: 16, paddingVertical: 10},
  name: {fontWeight: '700', color: '#000'},
  description: {color: '#000', marginVertical: 5},
  link: {fontWeight: '400', color: '#004c8b'},
  edit: {
    borderColor: '#cbcbcb',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  editText: {fontWeight: 'bold', color: '#000', fontSize: 14},
});
