import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Colors} from '../../util/colors';
import {PageSpace} from '../pageSpace';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const RadioButton = props => {
  const {data, index, onPress} = props;
  return (
    <>
      <View key={index} style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.childContainer,
            {
              borderColor: data?.isSelected ? Colors.light_green : Colors.grey,
              backgroundColor: data?.isSelected
                ? Colors.light_green
                : Colors.white,
            },
          ]}>
          {data?.isSelected ? (
            <Icon name={'check'} size={15} color={Colors.white} />
          ) : null}
        </TouchableOpacity>
        <PageSpace isHorizontal={true} size={15} />
        <Text style={styles.label}>{data?.label}</Text>
      </View>

      <PageSpace size={15} />
    </>
  );
};

export default RadioButton;
