import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Heart, Logo, Plus, Messenger} from '../Icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo />
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.6}>
          <Plus size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Heart size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Messenger size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 44,
    alignItems: 'center',
    paddingBottom: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
  },
  dot: {height: 8, width: 8, borderRadius: 4, backgroundColor: '#fe3650'},
  dotContainer: {position: 'absolute', top: -1, right: -1, zIndex: 10},
});
