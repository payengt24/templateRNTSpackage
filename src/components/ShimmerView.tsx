import React from 'react';
import {Text, View} from 'react-native';
import Shimmer from 'react-native-shimmer';

const ShimmercdView = () => {
  return (
    <View>
      <Shimmer>
        <Text>Loading...</Text>
      </Shimmer>
      <Text>Hello, This is a custom view!</Text>
    </View>
  );
};

export default ShimmercdView;
