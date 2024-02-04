import {StyleSheet,Dimensions} from 'react-native';
import {Colors} from '../../util/colors';
import {Fonts} from '../../util/fonts'
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  label: {
    fontSize:38,
    color: Colors.black,
    fontFamily:Fonts.RobotoMedium ,
    fontWeight:'400'
  },
  descreption: {
    fontSize: 16,
    color: Colors.black,
    fontFamily:Fonts.RobotoMedium,
    fontWeight:'400',
    lineHeight:26
  },
  date: {
    fontSize:16,
    color: Colors.grey,
    fontFamily:Fonts.RobotoMedium ,
    fontWeight:'400'
  },
});

export default styles;
