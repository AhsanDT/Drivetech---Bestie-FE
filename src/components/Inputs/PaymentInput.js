import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {colors, family, size, WP} from '../../shared/exporter';

const PaymentInput = ({
  title,
  onCardChange,
  onFocus,
  value,
  touched,
  error,
}) => {
  const {confirmPayment} = useStripe();
  return (
    <View style={styles.container}>
      {title && <Text style={styles.textStyle}>{title}</Text>}
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: 'Card Number',
          cvc: 'Type here',
          textColor: colors.g3,
        }}
        cardStyle={styles.cardStyle}
        style={styles.cardContainer}
        onCardChange={onCardChange}
        onFocus={onFocus}
      />
    </View>
  );
};

export {PaymentInput};
const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    borderBottomWidth: 0,
    color: colors.g3,
  },
  cardStyle: {
    borderRadius: 30,
    backgroundColor: colors.g2,
    borderBottomWidth: 0,
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    textColor: colors.g3,
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 8,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },

  cardContainer: {
    width: WP('90'),
    height: 50,
    alignSelf: 'center',
    marginBottom: WP('5'),
    // padding: WP('4'),
  },
});
