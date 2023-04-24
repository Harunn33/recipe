import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './mealsCard.style';

const MealsCard = ({props, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.mealsCard}>
        <Image style={styles.img} source={{uri: props.strMealThumb}} />
        <View style={styles.meals} />
        <Text style={styles.title}>{props.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealsCard;
