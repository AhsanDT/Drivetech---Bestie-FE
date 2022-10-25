import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, CreditCard, Header} from '../../../components';
import {Card_List, colors, WP} from '../../../shared/exporter';
import {styles} from './styles';

const AddCard = ({navigation}) => {
  const [show, setShow] = useState(Card_List);
  const renderItem = ({item, index}) => (
    <CreditCard
      show
      title={item.title}
      subTitle={item.subTitle}
      onPress={() => {
        setShow(
          show.map(obj =>
            obj.id == item.id
              ? {...obj, selected: true}
              : {...obj, selected: false},
          ),
        );
        console.log('selected', item.selected);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView style={styles.keyboardContainer}>
        <Header
          title={'Add Card'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />

        <Text style={styles.textStyle}>Card Info</Text>
        <FlatList
          data={show}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
        />
      </KeyboardAwareScrollView>

      <AppButton
        title={'Next'}
        bgColor={colors.b1}
        width={WP('85')}
        onPress={() => {
          navigation.navigate('CardDetails');
        }}
      />
    </SafeAreaView>
  );
};

export default AddCard;
