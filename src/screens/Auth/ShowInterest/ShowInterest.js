import {View, Text, StatusBar, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ShowInterestButton} from '../../../components';
import {interestList} from '../../../shared/utilities/constant';
import styles from './styles';

const ShowInterest = () => {
  const [list, setlist] = useState(interestList);

  const itemPressed = (item, index) => {
    if (list[index].selected) {
      list[index].selected = false;
    } else {
      list[index].selected = true;
    }
    setlist([...list]);
  };

  console.log('SELECTES==> ', list);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <Text style={styles.heading}>
        Don't be shy, the more you add the better the algorithm will match you
        with your ideal bestie
      </Text>
      <FlatList
        data={list}
        numColumns={3}
        horizontal={false}
        columnWrapperStyle={{
          flexWrap: 'wrap',
        }}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
        key={(item, index) => item + index.toString()}
        renderItem={({item, index}) => (
          <ShowInterestButton
            item={item}
            onPress={() => itemPressed(item, index)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ShowInterest;
