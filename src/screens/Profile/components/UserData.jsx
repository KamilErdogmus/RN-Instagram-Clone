import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const UserData = () => {
  return (
    <View style={styles.component}>
      <LinearGradient
        style={styles.cover}
        colors={['#de0046', '#f7a34b']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Image
          source={require('./../../../../assets/Main-Avatar.png')}
          style={styles.avatar}
        />
      </LinearGradient>

      <View style={styles.data}>
        <Text style={styles.number}>0,000</Text>
        <Text style={styles.label}>Posts</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.number}>0,000</Text>
        <Text style={styles.label}>Followers</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.number}>0,000</Text>
        <Text style={styles.label}>Following</Text>
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  component: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  data: {
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888',
  },
});
