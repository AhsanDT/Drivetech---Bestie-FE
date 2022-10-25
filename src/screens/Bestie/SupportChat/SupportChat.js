import React from 'react';
import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import {ChatCard, ChatInput, Header} from '../../../components';
import {styles} from './styles';
const SupportChat = () => {
  const renderItem = () => (
    <ChatCard
      date={'06/15/2022'}
      time={' | 6:00 AM'}
      token={'KGNV83JNFG8'}
      message={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium sem sit amet venenatis commodo. Nullam aliquam lacus nisl, varius luctus mauris hendrerit ut. Etiam eros lectus, commod.'
      }
    />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'Support'} backIcon={true} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
        key={({item, index}) => {
          item.index + toString();
        }}
      />
      <ChatInput />
    </SafeAreaView>
  );
};

export default SupportChat;
