import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Grid, ProfileImg} from '../../../Icons';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('grid');

  return (
    <View style={styles.content}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, activeTab === 'grid' && styles.activeTab]}
        onPress={() => setActiveTab('grid')}>
        <Grid />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, activeTab === 'profile' && styles.activeTab]}
        onPress={() => setActiveTab('profile')}>
        <ProfileImg />
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 2,
    marginHorizontal: 15,
    paddingHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomColor: '#000',
    paddingBottom: 13,
    borderBottomWidth: 2,
  },
});
