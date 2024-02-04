import {StyleSheet,Dimensions} from 'react-native';
import {Colors} from '../../util/colors';
import {Fonts} from '../../util/fonts'
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth *.9,
    height: windowWidth*0.7,
  },
  childContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontSize: 48,
    color: Colors.black,
    textAlign: 'center',
    paddingLeft:20,
    paddingRight:20,
    fontFamily:Fonts.RobotoMedium ,
    fontWeight:'400'
  },
  descreption: {
    fontSize: 16,
    color: Colors.grey,
    textAlign: 'center',
    fontFamily:Fonts.RobotoMedium,
    fontWeight:'400',
    lineHeight:22
  },

});

export default styles;
