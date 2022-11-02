import React from 'react';
import {View, Text} from 'react-native';
import {colors, family} from '../../../../shared/exporter';
import {styles} from './styles';

const Bestie = () => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: colors.b1,
          fontFamily: family.Poppin_Medium,
        }}>
        Bestie
      </Text>
    </View>
  );
};

export default Bestie;
