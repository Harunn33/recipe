import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealsCard from '../../components/MealsCard/mealsCard';
import CustomLottie from '../../components/CustomLottie';
import styles from './meals.style';

const Meals = ({navigation, route}) => {
  const {category} = route.params;
  const {error, loading, data} = useFetch(Config.API_MEALS + category);
  const goDetail = id => {
    navigation.navigate('Detail', {
      id: id,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading && <CustomLottie error={false} />}
      {error && <CustomLottie error={true} />}
      <FlatList
        data={data.meals}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <MealsCard
            onPress={() => {
              goDetail(item.idMeal);
            }}
            props={item}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Meals;
