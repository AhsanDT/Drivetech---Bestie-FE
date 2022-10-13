import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useDispatch} from 'react-redux';
import {AppButton, AppHeader, AppLoader} from '../../../components';
import {verifyOTPRequest} from '../../../redux/actions';
import {
  colors,
  WP,
  checkConnected,
  networkText,
} from '../../../shared/exporter';
import styles from './styles';
const VerifyOtp = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [loading, setloading] = useState(false);
  const [userId, setuserId] = useState(route?.params?.userId);
  const [email, setEmail] = useState(route?.params?.email);

  const ref = useRef();

  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const dispatch = useDispatch(null);

  const onPressVerifyOtp = async () => {
    const check = await checkConnected();
    if (check) {
      if (value?.length == 6) {
        const data = new FormData();
        data.append('otp', value);
        data.append('email', email);
        setloading(true);
        try {
          const cbSuccess = response => {
            navigation.navigate('CreatePassword', {
              userId: userId,
              email: email,
            });
            setloading(false);
            console.log('res', response);
          };
          const cbFailure = err => {
            console.log('error', err);
            Alert.alert('hamad' || err);
            setloading(false);
          };
          dispatch(verifyOTPRequest(data, cbSuccess, cbFailure));
        } catch (error) {
          console.log('ERROR', error);
          setloading(false);
        }
      } else {
        alert('Enter OTP to Verify Account');
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };
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
          <Text style={styles.emailTextStyle}>{email}</Text>
        </Text>
      </View>

      <CodeField
        ref={ref}
        {...codeFieldProps}
        value={value}
        onChangeText={setValue}
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
        bgColor={value.length == 6 ? colors.b1 : colors.g3}
        width={WP('90')}
        height={WP('14')}
        title={'Verify Code'}
        onPress={() => {
          setloading(true);
          onPressVerifyOtp();
        }}
        disabled={value.length == 6 ? false : true}
      />
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};
export default VerifyOtp;
