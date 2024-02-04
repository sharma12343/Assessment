import * as React from 'react';
import {View, Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {PageSpace} from '../../components/pageSpace';
import styles from './style';
import {Constants} from '../../util/constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../util/colors';
const Notes = props => {
  const navigateToNext = () => {
    props.navigation.navigate('AddNotes');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PageSpace size={35} />
        <Image
          source={Constants.image.hero}
          style={styles.image}
          resizeMode="contain"
        />
        <PageSpace size={25} />
        <View style={styles.childContainer}>
          <Text style={styles.label}>{Constants.notes.label}</Text>
          <PageSpace size={35} />
          <Text style={styles.descreption}>{Constants.notes.descreption}</Text>
        </View>
        <PageSpace size={35} />
        <TouchableOpacity
          onPress={navigateToNext}
          style={styles.iconContainer}>
          <Icon name="right" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notes;
