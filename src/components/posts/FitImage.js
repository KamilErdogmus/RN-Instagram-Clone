import React from 'react';
import {Image, useWindowDimensions} from 'react-native';

const FitImage = ({src}) => {
  const {width} = useWindowDimensions();
  const height = 607 / (1080 / width);

  return (
    <Image source={{uri: src}} style={{width, height}} resizeMethod="cover" />
  );
};

export default FitImage;
