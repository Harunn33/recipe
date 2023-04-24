import React from 'react';

import {SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import styles from './categories.style';
import useFetch from '../../hooks/useFetch';
import {FlatList} from 'react-native-gesture-handler';
import CustomLottie from '../../components/CustomLottie/customLottie';
import CategoryCard from '../../components/CategoryCard/categoryCard';
const Categories = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_CATEGORIES);
  const goMeal = category => {
    navigation.navigate('Meals', {
      category: category,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <CustomLottie error={false} />}
      {error && <CustomLottie error={true} />}
      <FlatList
        data={data.categories}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CategoryCard
            props={item}
            onPress={() => {
              console.log(item.strCategory);
              goMeal(item.strCategory);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;
