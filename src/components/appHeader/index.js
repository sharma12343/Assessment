import * as React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../util/colors';
const windowWidth = Dimensions.get('window').width;
const AppHeader = props => {
  const {leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon} = props;
  return (
    <View
      style={[styles.container,{ width: windowWidth,}]  }>
      <TouchableOpacity onPress={onClickLeftIcon} style={styles.iconContainer}>
        <Icon name={leftIcon} size={20} color={Colors.white} />
      </TouchableOpacity>
      {rightIcon ? (
        <TouchableOpacity onPress={onClickRightIcon}>
          <Icon name={rightIcon} size={34} color={Colors.black} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AppHeader;
