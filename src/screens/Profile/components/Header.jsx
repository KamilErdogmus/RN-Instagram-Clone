import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BurgerMenu, Dropdown, Plus} from '../../../Icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <Text style={styles.username}>username</Text>
        <Dropdown />
      </View>

      <View style={styles.icon}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 2,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  username: {
    fontSize: 20,
    marginRight: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});

export default Header;
