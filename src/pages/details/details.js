import React from 'react';

import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './details.style';
import CustomLottie from '../../components/CustomLottie';
import DetailCard from '../../components/DetailCard/detailCard';

const Details = ({route}) => {
  const {id} = route.params;
  const {error, loading, data} = useFetch(Config.API_DETAIL + id);
  return (
    <SafeAreaView style={styles.container}>
      {loading && <CustomLottie error={false} />}
      {error && <CustomLottie error={true} />}
      <FlatList
        data={data.meals}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <DetailCard props={item} />}
      />
    </SafeAreaView>
  );
};

export default Details;
