import React from 'react';
import { ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const SmoothScrollView = (props) => {
  return (
    <AnimatedScrollView
      {...props}
      decelerationRate="fast"
      scrollEventThrottle={16}
    />
  );
};

export default SmoothScrollView;