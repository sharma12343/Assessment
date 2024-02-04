import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = props => {
  const {
    width,
    height,
    label,
    labelColor,
    fontFamily,
    bgColor,
    borderRadius,
    txtSize,
    fontWeight,
    onPress
  } = props;
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        height: height,
        width: width,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: txtSize,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          color: labelColor,
          textAlign: 'center',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
