import React from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {AppButton, Header, SupportCard} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import {styles} from './styles';

const Support = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <SupportCard
      token={'HFYEU38FGHS'}
      status={'Pending'}
      date={'06/15/2022'}
      message={
        'I would like to report some issues that the app are facing right now.These are by logging'
      }
    />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'Support'} backIcon={true} />
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={renderItem}
        />
      </View>
      <AppButton
        bgColor={colors.b1}
        width={WP('85')}
        title={'Send New Message'}
        onPress={()=>{navigation.navigate('')}}
      />
    </SafeAreaView>
  );
};

export default Support;
