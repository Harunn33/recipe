import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './detailCard.style';

const DetailCard = ({props}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{uri: props.strMealThumb}} />
      <View style={styles.texts}>
        <Text style={styles.mealName}>{props.strMeal}</Text>
        <Text style={styles.mealArea}>{props.strArea}</Text>
        <View style={styles.seperator} />
        <Text style={styles.mealInstructions}>{props.strInstructions}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          Linking.openURL(props.strYoutube);
          console.log(props.strYoutube);
        }}>
        <View style={styles.ytBtn}>
          <Text style={styles.ytBtnTitle}>Watch on Youtube</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
