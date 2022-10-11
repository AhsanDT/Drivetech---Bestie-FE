import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {AppButton, AppHeader} from '../../../components';
import {colors, WP} from '../../../shared/exporter';
import styles from './styles';
const VerifyOtp = ({navigation}) => {
  const [value, setValue] = useState('');

  const ref = useRef();

  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title={'Verification'}
        backIcon={true}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>
          Please enter your verification code sent to{'\n'}
          <Text style={styles.emailTextStyle}>zainseptimus@gmail.com</Text>
        </Text>
      </View>

      <CodeField
        ref={ref}
        {...codeFieldProps}
        value={value}
        onChangeText={val => {
          setValue(val);
          if (val.length == 6) {
          }
        }}
        cellCount={6}
        onSubmitEditing={() => {}}
        rootStyle={styles.otpInputBox}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[
              styles.cell,
              {borderColor: isFocused ? colors.bl : colors.g1},
            ]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.txtStyle}>{symbol}</Text>
          </View>
        )}
      />
      <AppButton
        bgColor={colors.b1}
        width={WP('90')}
        height={WP('14')}
        title={'Verify Code'}
        onPress={() => {
          navigation.navigate('CreatePassword');
        }}
      />
    </SafeAreaView>
  );
};
export default VerifyOtp;
