import * as React from 'react';
import {View} from 'react-native';

export const PageSpace = props => {
  if (props.isHorizontal === true) {
    return <View style={{width: props.size}} />;
  } else {
    return <View style={{height: props.size}} />;
  }
};
