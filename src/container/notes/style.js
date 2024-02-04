import {StyleSheet,Dimensions} from 'react-native';
import {Colors} from '../../util/colors';
import {Fonts} from '../../util/fonts'
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: windowWidth*0.85,
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
    fontFamily:Fonts.RobotoMedium ,
    fontWeight:'400'
  },
  descreption: {
    fontSize: 16,
    color: Colors.grey,
    textAlign: 'center',
    fontFamily:Fonts.RobotoMedium,
    fontWeight:'400'
  },
  iconContainer:{
    width:75,
    height:75,
    borderRadius:100,
    backgroundColor:Colors.black,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default styles;
