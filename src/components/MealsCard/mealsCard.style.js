import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  img: {
    flex: 1,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  meals: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    backgroundColor: 'black',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    opacity: 0.5,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 5,
    color: 'white',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 26,
  },
  mealsCard: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
