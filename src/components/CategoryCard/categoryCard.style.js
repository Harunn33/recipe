import {StyleSheet} from 'react-native';
import CONSTANTS from '../../constants';

export default StyleSheet.create({
  categoryCard: {
    backgroundColor: CONSTANTS.COLORS.CATEGORYCARD,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
  },
  img: {
    width: '20%',
    padding: 40,
    resizeMode: 'contain',
  },
  nameContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  name: {
    fontWeight: '300',
    fontSize: 17,
  },
});
