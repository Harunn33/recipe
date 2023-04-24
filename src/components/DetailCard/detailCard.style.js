import {Dimensions, StyleSheet} from 'react-native';
import CONSTANTS from '../../constants';

export default StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: CONSTANTS.COLORS.CATEGORYCARD,
  },
  img: {
    height: Dimensions.get('window').height * 0.35,
  },
  texts: {
    padding: 10,
  },
  mealName: {
    color: CONSTANTS.COLORS.DETAILTITLE,
    fontWeight: 'bold',
    fontSize: 24,
  },
  mealArea: {
    color: CONSTANTS.COLORS.DETAILTITLE,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  seperator: {
    width: '100%',
    backgroundColor: 'grey',
    marginVertical: 5,
    height: 1,
  },
  mealInstructions: {
    fontWeight: '300',
  },
  ytBtn: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'red',
    borderRadius: 12,
    height: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ytBtnTitle: {
    color: CONSTANTS.COLORS.BG,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
