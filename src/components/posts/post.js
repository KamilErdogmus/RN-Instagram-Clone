import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Bookmark, Comment, Dots, Heart, Share} from '../../Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Post = ({post}) => {
  dayjs.extend(relativeTime);

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.data}>
          <Image source={{uri: post.user.avatar}} style={styles.img} />
          <Text style={styles.text}>{post.user.name}</Text>
        </View>
        <Dots />
      </View>
      <FitImage src={post.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity activeOpacity={0.7} style={styles.action}>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.action}>
              <Comment />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.action}>
              <Share />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{post.likes} Likes</Text>
        <ReadMore
          numberOfLines={2}
          seeLessStyle={{color: '#999'}}
          seeMoreStyle={{color: '#999'}}
          style={styles.textStyle}>
          <Text style={styles.user}>{post.user.name}</Text> &nbsp;
          {post.description}
        </ReadMore>
        {post.comments > 0 && (
          <TouchableOpacity style={{paddingBottom: 7}} activeOpacity={0.6}>
            <Text style={styles.comment}>
              View all {post?.comments} comments
            </Text>
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
          <Text style={styles.translate}>See Translation</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {marginBottom: 20},
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  data: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  avatar: {width: 30, height: 30, borderRadius: 30, marginRight: 10},
  text: {fontSize: 14, fontWeight: '600'},
  img: {width: 30, height: 30, borderRadius: 15, marginRight: 10},
  content: {paddingHorizontal: 15},
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
  },
  leftActions: {flexDirection: 'row'},
  action: {marginRight: 12},
  likes: {
    fontWeight: '600',
    marginVertical: 4,
  },
  user: {fontWeight: '700'},
  comment: {opacity: 0.5, marginTop: 3},
  date: {fontSize: 13, opacity: 0.5},
  translate: {fontSize: 13, fontWeight: '600', marginTop: 7.5},
});

export default Post;
