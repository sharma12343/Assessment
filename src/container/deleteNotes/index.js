import * as React from 'react';
import {View, Image, SafeAreaView, Text, Dimensions} from 'react-native';
import {PageSpace} from '../../components/pageSpace';
import styles from './style';
import {Constants} from '../../util/constants';
import AppHeader from '../../components/appHeader';
import Button from '../../components/button';
import {Colors} from '../../util/colors';
import {Fonts} from '../../util/fonts';
const windowWidth = Dimensions.get('window').width;
const DeleteNotes = props => {
  const deleteNotes = () => {
    props.navigation.navigate('Notes');
  };
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppHeader leftIcon={'left'} onClickLeftIcon={goBack} />
        <View style={{padding: 24}}>
          <Image
            source={Constants.image.hero1}
            style={styles.image}
            resizeMode="contain"
          />
          <PageSpace size={12} />
          <View style={styles.childContainer}>
            <Text style={styles.label}>{Constants.deleteNotes.label}</Text>
            <PageSpace size={35} />
            <Text style={styles.descreption}>
              {Constants.deleteNotes.descreption}
            </Text>
          </View>
        </View>
        <PageSpace size={12} />
        <Button
          height={62}
          width={windowWidth * 0.9}
          bgColor={Colors.light_red}
          borderRadius={30}
          label={Constants.deleteNotes.btnTxt}
          txtSize={16}
          labelColor={Colors.red}
          fontFamily={Fonts.RobotoBold}
          fontWeight={'600'}
          onPress={deleteNotes}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeleteNotes;
