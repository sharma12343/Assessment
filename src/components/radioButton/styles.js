import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../util/colors';
import {Fonts} from '../../util/fonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  childContainer: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.black,
    fontFamily: Fonts.RobotoMedium,
    fontWeight: '400',
  },
});

export default styles;
