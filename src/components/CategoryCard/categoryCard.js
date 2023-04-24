import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './categoryCard.style';

const CategoryCard = ({props, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.categoryCard}>
        <Image style={styles.img} source={{uri: props.strCategoryThumb}} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.strCategory}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
