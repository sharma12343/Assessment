import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../util/colors';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
